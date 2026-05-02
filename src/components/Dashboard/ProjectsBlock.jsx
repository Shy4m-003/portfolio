import { useState, useRef } from 'react';
import { FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import './DashboardBlocks.css';

const projects = [
  {
    category: 'Scalable Systems',
    title: 'Skillora',
    keywords: ['Java', 'Spring Boot', 'Docker'],
    description: 'Microservices-based LMS with recommendations, RBAC, and event-driven architecture.',
    link: 'https://github.com/Shy4m-003/Skillora'
  },
  {
    category: 'Full Stack',
    title: 'DropNow',
    keywords: ['Spring Boot', 'Angular', 'MySQL'],
    description: 'Ride-hailing platform with real-time ride requests, driver management, and secure payments.',
    link: 'https://github.com/Shy4m-003/DropNow'
  },
  {
    category: 'Machine Learning',
    title: 'Employee Attrition Prediction',
    keywords: ['Python', 'ML', 'Pandas'],
    description: 'ML model to predict employee attrition using classification algorithms and data insights.',
    link: 'https://github.com/Shy4m-003/Employee-Attrition-Prediction'
  }
];

const ProjectsBlock = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bento-card projects-bento-block w-full">
      <div className="projects-header-ref">
        <h3 className="block-title" style={{marginBottom: 0}}><FaFolderOpen style={{marginRight: '8px'}} /> Projects</h3>
        <span className="drag-hint">Things I've built</span>
      </div>
      
      <div 
        className={`projects-horizontal-scroll ${isDragging ? 'dragging' : ''}`}
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {projects.map((project, idx) => (
          <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="bento-project-card">
            <span className="project-category">{project.category}</span>
            <h4 className="project-title-bento">{project.title}</h4>
            
            <p className="project-description-bento">
              {project.description}
            </p>
            
            <div className="project-badges">
              {project.keywords.map((keyword, kIdx) => (
                <span key={kIdx} className="badge">{keyword}</span>
              ))}
            </div>
            
            <div className="project-footer">
              <span className="view-code-btn"><FaArrowRight /></span>
            </div>
          </a>
        ))}
        
        {/* More Projects Card */}
        <div className="bento-project-card more-card">
          <div className="more-content">
            <span className="more-star">✨</span>
            <p>Many More Coming...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
