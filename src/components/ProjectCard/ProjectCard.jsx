import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, featured = false, delay = 0, setCurrentPage }) => {
  // Check if this is the para.tn project
  const isParaTN = project.title.toLowerCase().includes('para.tn') || 
                   project.demoUrl?.includes('para.tn');

  // Check if this is a portfolio project
  const isPortfolio = project.title.toLowerCase().includes('portfolio') || 
                      project.title.toLowerCase().includes('personal website') ||
                      project.demoUrl?.includes('portfolio');

  const handlePortfolioClick = () => {
    setCurrentPage('portfolio-design');
  };

  const handleDemoClick = (e) => {
    // For external links, let the default behavior happen
  };

  return (
    <div 
      className={`project-card ${featured ? 'featured' : ''} fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="project-image">
        <img src={project.image || "/placeholder.svg"} alt={project.title} />
        {/* Show overlay for para.tn or portfolio projects */}
        {(isParaTN || isPortfolio) && (
          <div className="project-overlay">
            <div className="project-links">
              {isParaTN && (
                <a 
                  href={project.demoUrl} 
                  className="project-link demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDemoClick}
                >
                  <span>Live Demo</span>
                </a>
              )}
              {isPortfolio && (
                <button 
                  className="project-link portfolio-link"
                  onClick={handlePortfolioClick}
                >
                  <span>Visit My Portfolio</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;