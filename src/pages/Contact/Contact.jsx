"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Initialize EmailJS with your user ID (public key)
      emailjs.init("MXFxmNsSGSoH8UCge"); // Replace with your actual user ID

      const response = await emailjs.send(
        'service_ndyp2vb', // Replace with your service ID
        'template_amtqmdp', // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "ghaithbs300@gmail.com",
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Email failed to send');
      }
    } catch (err) {
      console.error("Email sending error:", err);
      setSubmitStatus("error");
      setError("Failed to send email. Please try again or contact me directly.");
      
      // Fallback to mailto
      const mailtoLink = `mailto:ghaithbs300@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setError(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "bsghaith300@gmail.com",
      link: "mailto:bsghaith300@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+216 20 328 738",
      link: "tel:+21620328738",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Hamem lghzez, Kelibia, Nabeul - Tunisia",
      link: null,
    },
    {
      icon: "🎓",
      title: "Education",
      value: "ISIMa - Software Engineering",
      link: null,
    },
  ];

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1 className="page-title fade-in-up">Get In Touch</h1>
          <p className="page-subtitle fade-in-up">
            Have a project in mind or looking for a motivated developer? I'd love to hear from you.
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <h2>Let's Connect</h2>
            <p className="contact-intro">
              I'm always open to discussing new opportunities, interesting projects, or collaborating on innovative
              solutions. As a computer science graduate passionate about technology, I'm motivated to grow through
              development-focused work experiences.
            </p>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h3>Professional Skills</h3>
              <div className="skills-summary">
                <div className="skill-category">
                  <strong>Frontend:</strong> HTML, CSS, JavaScript, Dart, React
                </div>
                <div className="skill-category">
                  <strong>Backend:</strong> Python, Node.js, C, Java, PHP
                </div>
                <div className="skill-category">
                  <strong>Mobile:</strong> Flutter, React Native
                </div>
                <div className="skill-category">
                  <strong>Databases:</strong> MongoDB, MySQL, Oracle
                </div>
                <div className="skill-category">
                  <strong>Design:</strong> After Effects, Premier Pro, Photoshop
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">✅ Thank you! Your message has been sent successfully.</div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">
                  ❌ {error || "Sorry, there was an error sending your message."}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;