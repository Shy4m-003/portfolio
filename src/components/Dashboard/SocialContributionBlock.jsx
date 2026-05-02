import { FaMedium, FaGithub } from 'react-icons/fa';
import './DashboardBlocks.css';

const SocialContributionBlock = () => {
  return (
    <div className="bento-card social-bento-block w-full">
      <div className="social-header-ref">
        <h3 className="block-title" style={{marginBottom: 0}}>💖 Social Contribution</h3>
        <span className="social-sub-ref">Sharing knowledge. Contributing back.</span>
      </div>
      
      <div className="social-cards-wrapper">
        <a href="https://medium.com/@shyamprasadreddyginkala/hardcoding-vs-frameworks-in-backend-development-which-one-is-better-d0ec2bdf27a0" target="_blank" rel="noopener noreferrer" className="social-card medium-card">
          <div className="social-card-header">
            <FaMedium className="social-icon" />
            <span className="social-badge">Blog</span>
          </div>
          <h4>Hardcoding vs Frameworks: How Frameworks Save Time in Software Development</h4>
          <span className="social-link-text">Read on Medium &rarr;</span>
        </a>
        
        <a href="https://github.com/Grad26-by-Ya" target="_blank" rel="noopener noreferrer" className="social-card github-card">
          <div className="social-card-header">
            <FaGithub className="social-icon text-blue" />
            <span className="social-badge">Open Source</span>
          </div>
          <p>Actively contributing to open source and collaborative developer communities.</p>
          <span className="social-link-text text-blue">GitHub: Grad26-by-Ya &rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default SocialContributionBlock;
