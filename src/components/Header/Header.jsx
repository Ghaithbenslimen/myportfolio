"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (page) => {
    setCurrentPage(page)
    closeMenu()
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <button className="logo" onClick={() => handleNavClick("home")}>
          <span className="logo-text">Welcome to my space</span>
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <span className={`nav-text ${currentPage === "home" ? "active" : ""}`} onClick={() => handleNavClick("home")}>
            Home
          </span>
          <span
            className={`nav-text ${currentPage === "about" ? "active" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            About
          </span>
          <span
            className={`nav-text ${currentPage === "projects" ? "active" : ""}`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </span>
          <span
            className={`nav-text ${currentPage === "contact" ? "active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </span>
        </nav>

        <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
