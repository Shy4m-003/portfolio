import { useState, useEffect } from 'react';
import TerminalVisual from './TerminalVisual';
import './Hero.css';

const taglines = [
  "Building scalable systems.",
  "Designing clean architectures.",
  "Evolving with complexity."
];

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer;
    const fullText = taglines[currentTaglineIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 40); // Deletion speed
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 80); // Typing speed
    }
    
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500); // Wait before deleting
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTaglineIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting text-gradient slide-up-1">Hi, I'm</p>
          <h1 className="hero-name slide-up-2">G. Shyam Prasad Reddy</h1>
          <h2 className="hero-title slide-up-3">Backend Software Developer</h2>
          
          <div className="hero-tagline-box slide-up-4">
            <p className="hero-tagline">
              <span className="typewriter-text">{currentText}</span>
              <span className="cursor">|</span>
            </p>
          </div>
          
          <p className="hero-intro slide-up-5">
            Backend-focused developer specializing in Java, Spring Boot, and microservices architecture. 
            Passionate about system design and building real-world scalable applications.
          </p>
          
          <div className="hero-cta slide-up-6">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a href="#" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-visual-container">
          <TerminalVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
