"use client"

import "./Home.css"

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home">
      <section className="hero">
        <div className="animated-bg">
          <div className="programming-tool react-logo"></div>
          <div className="programming-tool javascript-logo"></div>
          <div className="programming-tool python-logo"></div>
          <div className="programming-tool flutter-logo"></div>
          <div className="programming-tool nodejs-logo"></div>
          <div className="programming-tool laravel-logo"></div>
          <div className="programming-tool mongodb-logo"></div>
          <div className="programming-tool mysql-logo"></div>

          <div className="cs-shape binary-block"></div>
          <div className="cs-shape circuit-square"></div>
          <div className="cs-shape database-shape"></div>
          <div className="cs-shape diamond-shape"></div>
          <div className="cs-shape hexagon-shape"></div>
          <div className="cs-shape bracket-shape"></div>
          <div className="cs-shape chip-shape"></div>
          <div className="code-particle particle-1"></div>
          <div className="code-particle particle-2"></div>
          <div className="code-particle particle-3"></div>
          <div className="code-particle particle-4"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ghaith Ben Slimen</span>
            </h1>
            <p className="hero-subtitle">Computer Science Graduate – Software Engineering & Information Systems</p>
            <p className="hero-description">
              Computer science graduate with hands-on experience in mobile & web development, AI integration, and
              software project management. Passionate about leveraging technology to build innovative, user-focused
              solutions.
            </p>
            <div className="hero-buttons">
              <button onClick={() => setCurrentPage("projects")} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={() => setCurrentPage("contact")} className="btn btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="image-placeholder">
              <img
                src="./505871793_736546905711419_6155978400308814323_n.jpg"
                alt="Ghaith Ben Slimen - Software Engineer"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="skills-grid">
            <div className="skill-card fade-in-up">
              <div className="skill-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>
                Building cross-platform mobile applications with Flutter and React Native for seamless user experiences.
              </p>
            </div>
            <div className="skill-card fade-in-up">
              <div className="skill-icon">💻</div>
              <h3>Web Development</h3>
              <p>Creating responsive web applications with React, Laravel, and modern JavaScript frameworks.</p>
            </div>
            <div className="skill-card fade-in-up">
              <div className="skill-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>
                Integrating AI-powered solutions using Python, Flask, and machine learning technologies for smart
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's create something extraordinary</p>
            <button onClick={() => setCurrentPage("contact")} className="btn btn-primary">
              Start a Project
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
