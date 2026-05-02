import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/CustomCursor/CustomCursor';

// New Dashboard Blocks
import HeroBlock from './components/Dashboard/HeroBlock';
import QuickAccessBlock from './components/Dashboard/QuickAccessBlock';
import SkillsBlock from './components/Dashboard/SkillsBlock';
import ProjectsBlock from './components/Dashboard/ProjectsBlock';
import SocialContributionBlock from './components/Dashboard/SocialContributionBlock';
import ServicesBlock from './components/Dashboard/ServicesBlock';

// Contact Section
import Contact from './components/Contact/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('dark'); // default to dark
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <CustomCursor />
      
      {/* Ambient Dashboard Background */}
      <div className="ambient-bg">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
      </div>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="bento-dashboard container">
        <div className="bento-grid">
          {/* Row 1 */}
          <div className="bento-area-hero" id="home">
            <HeroBlock />
          </div>
          <div className="bento-area-skills" id="skills">
            <SkillsBlock />
          </div>
          
          {/* Row 2 */}
          <div className="bento-area-quick">
            <QuickAccessBlock />
          </div>
          <div className="bento-area-projects" id="projects">
            <ProjectsBlock />
          </div>

          {/* Row 3 */}
          <div className="bento-area-social" id="blog">
            <SocialContributionBlock />
          </div>
          <div className="bento-area-services" id="services">
            <ServicesBlock />
          </div>

          {/* Footer Block */}
          <div className="bento-area-contact" id="contact">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
