"use client"

import { useState } from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage" // Add this import
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About setCurrentPage={setCurrentPage} />
      case "projects":
        return <Projects setCurrentPage={setCurrentPage} />
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />
      case "portfolio-design": // Add this case
        return <PortfolioPage setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App