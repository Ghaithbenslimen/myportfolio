"use client"

import { useState } from "react"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./Projects.css"

const Projects = ({ setCurrentPage }) => { // Add setCurrentPage prop
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Para.tn: AI-Powered Connected Pharmacy",
      description:
        "Final year project to build a smart parapharmacy app offering AI-driven skincare suggestions and full inventory/customer management using Scrumban methodology.",
      image: "./c1.png",
      technologies: ["Flutter", "React", "Node.js", "Flask", "MongoDB"],
      category: ["fullstack", "web","mobile","backend"],
      demoUrl: "https://drive.google.com/file/d/1lFNU5S9ucNHRPiQyISb-YMc3dQeC1PgY/view?usp=drive_link",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "MEGATEL Mobile App",
      description:
        "Mobile app for MEGATEL call center to optimize employee time management, scheduling, and performance tracking. Features clean, intuitive UI for seamless user experience.",
      image: "./8fbd65e5-c1cf-4f88-a4e0-cb3fc44c6316-cover.png",
      technologies: ["Flutter", "Dart", "Firebase"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    
    {
      id: 3,
      title: "Nike Shoes Store Mobile App",
      description:
        "Developed the product screen of the Nike Store app using React Native, enabling smooth product browsing and a responsive UI.",
      image: "original-959ede0c343838cf41d910b54e535f0c.webp",
      technologies: ["React Native", "JavaScript", "CSS"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Video Editing Portfolio",
      description:
        "Professional video editing work for GNG ESPORTS, creating high-quality content with optimized visuals and smooth transitions.",
      image: "./517496686_779235844669259_7660317124170242804_n.jpg",
      technologies: ["After Effects", "Premier Pro", "Photoshop"],
      category: "Videos",
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "mobile", label: "Mobile" },
    { key: "web", label: "Web" },
    { key: "backend", label: "Backend" },
    { key: "Videos", label: "Videos" },
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project) => 
        Array.isArray(project.category) 
          ? project.category.includes(filter)
          : project.category === filter
      )

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="projects">
      <div className="container">
        <section className="projects-hero">
          <h1 className="page-title fade-in-up">My Projects</h1>
          <p className="page-subtitle fade-in-up">
            A collection of projects showcasing my skills in mobile development, web applications, and AI integration
          </p>
        </section>

        {featuredProjects.length > 0 && (
          <section className="featured-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  featured={true} 
                  delay={index * 0.1}
                  setCurrentPage={setCurrentPage} // Pass setCurrentPage prop
                />
              ))}
            </div>
          </section>
        )}

        <section className="all-projects-section">
          <h2 className="section-title">All Projects</h2>

          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-tab ${filter === category.key ? "active" : ""}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 0.1}
                setCurrentPage={setCurrentPage} // Pass setCurrentPage prop
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Projects