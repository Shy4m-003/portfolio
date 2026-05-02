import { FaDownload, FaCode, FaTrophy, FaRocket } from 'react-icons/fa';
import './DashboardBlocks.css';

const HeroBlock = () => {
  return (
    <div className="bento-card hero-block w-full">
      <div className="hero-content-bento">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name-bento">
          G. Shyam <br />
          Prasad <span className="text-orange">Reddy</span>
        </h1>
        <h2 className="hero-title-bento text-blue">Backend Software Developer</h2>
        <p className="hero-intro-bento">
          I build scalable systems, design clean architectures, and ship robust backend solutions that solve real-world problems.
        </p>
        <a href="/Resume-BD.pdf" download className="hero-resume-btn">
          <FaDownload className="btn-icon-orange" /> Download Resume
        </a>
      </div>

      <div className="hero-stats-row">
        <div className="hero-stat">
          <span className="stat-icon"><FaCode /></span>
          <div className="stat-text">
            <strong>3+</strong>
            <span>Projects Built</span>
          </div>
        </div>
        <div className="hero-stat">
          <span className="stat-icon"><FaTrophy /></span>
          <div className="stat-text">
            <strong>1+</strong>
            <span>Systems Designed</span>
          </div>
        </div>
        <div className="hero-stat">
          <span className="stat-icon"><FaRocket /></span>
          <div className="stat-text">
            <strong>Always</strong>
            <span>Learning Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
