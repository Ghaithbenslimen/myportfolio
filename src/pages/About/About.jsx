import "./About.css"

const About = () => {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Flutter", level: 85 },
    { name: "Python", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Laravel", level: 75 },
    { name: "React Native", level: 80 },
  ]

  const experiences = [
    {
      title: "Video Editor",
      company: "GNG ESPORTS",
      period: "2021 - 2024",
      description:
        "Worked as a video editor creating high-quality content, optimizing visuals, and ensuring smooth transitions to enhance the viewer experience.",
    },
    {
      title: "Mobile App Developer",
      company: "MEGATEL Project",
      period: "February - May 2024",
      description:
        "Developed a mobile app for MEGATEL call center to optimize employee time management, scheduling, and performance tracking using Flutter.",
    },
    {
      title: "IEEE Member & Challenger",
      company: "IEEEXtreme 16.0",
      period: "October 2022",
      description:
        "As a member of IEEE and challenger in IEEEXtreme 16.0, solved complex problems under pressure using algorithmic thinking.",
    },
  ]

  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <div className="about-content">
            <h1 className="page-title fade-in-up">About Me</h1>
            <div className="about-grid">
              <div className="about-text fade-in-up">
                <p className="lead">
                  I'm a passionate computer science graduate specialized in software engineering and information
                  systems, with hands-on experience in mobile & web development and AI integration.
                </p>
                <p>
                  My journey in software development started with a curiosity about creating innovative solutions that
                  make a difference. I have experience working on real-world projects including mobile applications for
                  call centers, AI-powered pharmacy systems, and e-commerce platforms.
                </p>
                <p>
                  I'm motivated to grow through development-focused work experiences and passionate about leveraging
                  technology to build user-focused solutions. When I'm not coding, you can find me participating in
                  programming competitions or creating video content for esports.
                </p>
              </div>
              <div className="about-image fade-in">
                <img src="/people-working-as-team-company_23-2149136891.avif" alt="Developer workspace" className="workspace-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="job-company">{exp.company}</div>
                  <div className="job-period">{exp.period}</div>
                  <p className="job-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">What I Value</h2>
          <div className="values-grid">
            <div className="value-card fade-in-up">
              <div className="value-icon">🎯</div>
              <h3>Innovation</h3>
              <p>
                I believe in leveraging technology to build innovative, user-focused solutions that make a real
                difference.
              </p>
            </div>
            <div className="value-card fade-in-up">
              <div className="value-icon">🤝</div>
              <h3>Problem Solving</h3>
              <p>
                With strong analytical thinking and problem-solving skills, I tackle complex challenges with creative
                solutions.
              </p>
            </div>
            <div className="value-card fade-in-up">
              <div className="value-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>
                Motivated to grow through development-focused experiences and staying current with emerging
                technologies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
