import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './DashboardBlocks.css';

const quickLinks = [
  { icon: <FaGithub />, title: 'GitHub', sub: 'Check my code', link: 'https://github.com/Shy4m-003' },
  { icon: <FaLinkedin />, title: 'LinkedIn', sub: 'Let\'s connect', link: 'https://www.linkedin.com/in/g-shyam-reddy' },
  { icon: <FaEnvelope />, title: 'Contact', sub: 'Send a message', link: 'mailto:shyamprasadreddyginkala@gmail.com' },
  { icon: <FaFileAlt />, title: 'Resume', sub: 'View Resume', link: '/Resume-BD.pdf' }
];

const QuickAccessBlock = () => {
  return (
    <div className="quick-access-wrapper w-full">
      {quickLinks.map((item, idx) => (
        <a key={idx} href={item.link} className="bento-card quick-card-vertical" target="_blank" rel="noopener noreferrer">
          <div className={`quick-icon-large color-${item.title.toLowerCase()}`}>
            {item.icon}
          </div>
          <h4 className="quick-title">{item.title}</h4>
          <span className="quick-sub">{item.sub}</span>
        </a>
      ))}
    </div>
  );
};

export default QuickAccessBlock;
