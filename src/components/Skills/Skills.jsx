import { useState, useRef } from 'react';
import { 
  FaJava, FaDatabase, FaServer, FaNetworkWired, FaAngular, 
  FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaLinux 
} from 'react-icons/fa';
import { 
  SiTypescript, SiSpringboot, SiHibernate, SiMysql, 
  SiMongodb, SiKubernetes, SiApachemaven, SiGooglecloud, 
  SiFirebase, SiRender 
} from 'react-icons/si';

import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'SQL', icon: <FaDatabase /> }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Hibernate', icon: <SiHibernate /> },
      { name: 'REST APIs', icon: <FaServer /> },
      { name: 'Microservices', icon: <FaNetworkWired /> }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Maven', icon: <SiApachemaven /> },
      { name: 'Linux', icon: <FaLinux /> }
    ]
  },
  {
    title: 'Cloud & Platforms',
    skills: [
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Render', icon: <SiRender /> }
    ]
  }
];

const Skills = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title text-gradient">Technical Arsenal</h2>
        
        <div 
          className={`skills-layout ${isDragging ? 'dragging' : ''}`}
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-block">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-cards-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-mini-card">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
