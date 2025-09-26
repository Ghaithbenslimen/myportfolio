"use client"

import "./Footer.css"
import { useState, useRef, useEffect } from "react"

const Footer = ({ setCurrentPage }) => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // ✅ FIXED: Use REACT_APP_ prefix for Create React App
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY
  const GEMINI_API_URL = GEMINI_API_KEY 
    ? `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`
    : null

    
  // Debug to check if environment variable is loading
  useEffect(() => {
    console.log('Environment variable check:')
    console.log('REACT_APP_GEMINI_API_KEY:', process.env.REACT_APP_GEMINI_API_KEY ? 'Loaded' : 'Not loaded')
    console.log('API Key preview:', process.env.REACT_APP_GEMINI_API_KEY ? `${process.env.REACT_APP_GEMINI_API_KEY.substring(0, 10)}...` : 'None')
  }, [])

  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
    if (!isChatOpen && messages.length === 0) {
      setMessages([{
        text: "Hello! I'm your AI assistant. How can I help you today?",
        sender: "bot"
      }])
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    // Check if API key is available
    if (!GEMINI_API_KEY) {
      console.error('API Key missing. Current value:', GEMINI_API_KEY)
      setMessages(prev => [...prev, {
        text: "AI service is currently unavailable. Please contact me directly at bsghaith300@gmail.com",
        sender: "bot"
      }])
      return
    }

    const userMessage = { text: inputMessage, sender: "user" }
    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetchGeminiResponse(inputMessage)
      
      setMessages(prev => [...prev, {
        text: response || "I'm sorry, I couldn't process your request.",
        sender: "bot"
      }])
    } catch (error) {
      console.error("Error calling Gemini API:", error)
      setMessages(prev => [...prev, {
        text: "Sorry, I'm having trouble connecting to the AI service. Please try again later.",
        sender: "bot"
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const fetchGeminiResponse = async (message) => {
    // Check if API URL is configured
    if (!GEMINI_API_URL) {
      throw new Error('API URL not configured')
    }

    // System prompt for context-aware responses
    const systemPrompt = `You are an AI assistant for Ghaith Ben Slimen's portfolio website. 
    Ghaith is a computer science graduate specializing in web development, mobile development, 
    and AI integration. He studied at ISIMa (Software Engineering) and is based in Kelibia, Tunisia.
    
    Key information about Ghaith:
    - Email: bsghaith300@gmail.com
    - Phone: +216 20 328 738
    - Location: Hamem lghzez, Kelibia, Nabeul - Tunisia
    - Education: ISIMa - Software Engineering
    - Services: Web Development, Mobile Development, AI Integration, Software Consulting
    - Social: GitHub, LinkedIn, Twitter
    
    Please respond helpfully to questions about Ghaith's services, experience, or contact information.
    Keep responses concise and professional (2-3 sentences maximum). If asked about unrelated topics, 
    gently steer the conversation back to Ghaith's portfolio and services.`

    const fullMessage = `${systemPrompt}\n\nUser question: ${message}`

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullMessage
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 256,
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`HTTP ${response.status}: ${JSON.stringify(errorData)}`)
      }

      const data = await response.json()
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text
      } else {
        throw new Error('Invalid response format from Gemini API')
      }
    } catch (error) {
      console.error('Gemini API error:', error)
      throw error
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <button onClick={() => handleNavigation("home")} className="footer-logo">
              <span className="logo-text">Ghaith Ben Slimen</span>
            </button>
            <p className="footer-description">
              Computer science graduate passionate about building innovative, user-focused solutions through technology.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Ghaithbenslimen" className="social-link" aria-label="GitHub">
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ghaith-ben-slimen-161676274/" className="social-link" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/bs_ghaith" className="social-link" aria-label="Twitter">
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <div className="footer-nav">
              <span className="footer-link">Web Development</span>
              <span className="footer-link">Mobile Development</span>
              <span className="footer-link">AI Integration</span>
              <span className="footer-link">Software Consulting</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <a href="mailto:bsghaith300@gmail.com" className="footer-link">
                bsghaith300@gmail.com
              </a>
              <a href="tel:+21620328738" className="footer-link">
                +216 20 328 738
              </a>
              <span className="footer-link">Hamem lghzez, Kelibia, Nabeul - Tunisia</span>
              <span className="footer-link">ISIMa - Software Engineering</span>
            </div>
          </div>
        </div>

       
      </div>

      {/* Chatbot UI */}
      <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
        <div className="chatbot-header" onClick={toggleChat}>
          <h3>AI Assistant</h3>
          <span className="chatbot-toggle">
            {isChatOpen ? '×' : '💬'}
          </span>
        </div>
        
        {isChatOpen && (
          <div className="chatbot-content">
            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="chatbot-input">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="1"
              />
              {/* ✅ FIXED: Remove the API key check from disabled condition */}
              <button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim() || isLoading}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer