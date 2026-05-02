import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    category: 'Scalable Systems',
    title: 'Skillora – Adaptive Learning Management System',
    keywords: ['Microservices', 'System Design', 'REST APIs', 'Event-Driven', 'RBAC'],
    description: 'Microservices-based LMS designed for personalized learning paths, scalable architecture, and future AI-driven recommendations.',
    link: 'https://github.com/Shy4m-003/Skillora'
  },
  {
    category: 'Full Stack',
    title: 'DropNow – Ride-Hailing Platform',
    keywords: ['Spring Boot', 'Angular', 'REST APIs', 'Full Stack'],
    description: 'Full-stack ride-hailing system handling real-time ride requests, backend workflows, and user interactions using layered architecture.',
    link: 'https://github.com/Shy4m-003/DropNow'
  },
  {
    category: 'Machine Learning',
    title: 'Employee Attrition Prediction',
    keywords: ['Machine Learning', 'Classification', 'Data Analysis'],
    description: 'Predictive model analyzing employee attrition using classification algorithms and feature insights.',
    link: 'https://github.com/Shy4m-003/Employee-Attrition-Prediction'
  }
];

const Projects = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array to create a seamless infinite loop
  const carouselItems = [...projects, { isExtra: true }, ...projects, { isExtra: true }];

  useEffect(() => {
    if (isPaused) return;
    
    let animationFrameId;
    let lastTimestamp = 0;
    const speed = 0.05; // pixels per ms
    
    const scroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      
      if (trackRef.current && deltaTime > 0) {
        trackRef.current.scrollLeft += speed * deltaTime;
        
        // Loop back to start when we reach exactly halfway
        if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
          trackRef.current.scrollLeft = 0;
        }
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-gradient">Featured Projects</h2>
      </div>
      
      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onClick={() => setIsPaused(true)}
      >
        <div 
          className="carousel-track hide-scrollbar" 
          ref={trackRef}
          onScroll={() => {
            // Keep it paused if user is actively scrolling
            if (!isPaused) setIsPaused(true);
            // Resume after a delay
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => setIsPaused(false), 2000);
          }}
        >
          {carouselItems.map((project, idx) => (
            <div key={idx} className="carousel-slide">
              {project.isExtra ? (
                <div className="project-card extra-card">
                  <div className="extra-content">
                    <h4>More Projects Coming...</h4>
                    <div className="pulse-dot"></div>
                  </div>
                </div>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h4 className="project-title">{project.title}</h4>
                    
                    <div className="project-badges">
                      {project.keywords.map((keyword, kIdx) => (
                        <span key={kIdx} className="badge">{keyword}</span>
                      ))}
                    </div>
                    
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="project-footer">
                    <span className="view-code">View Code &rarr;</span>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
