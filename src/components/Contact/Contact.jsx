import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="footer-bento-block w-full">
      <div className="footer-content-grid">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">{'</>'}</span>
          </div>
          <div className="footer-brand-text">
            <h3>Let's build something<br/>amazing together.</h3>
            <p>Always open to new opportunities<br/>and interesting ideas.</p>
          </div>
        </div>

        <div className="footer-section footer-contact-info">
          <h4 className="footer-title">Contact Me</h4>
          <ul className="footer-list">
            <li><FaEnvelope className="contact-icon" /> shyamprasadreddyginkala@gmail.com</li>
            <li><FaPhone className="contact-icon" /> +91 7702277931</li>
            <li><FaMapMarkerAlt className="contact-icon" /> Bengaluru, India</li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h4 className="footer-title">Follow Me</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/Shy4m-003" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/g-shyam-reddy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:shyamprasadreddyginkala@gmail.com"><FaEnvelope /></a>
          </div>
          {/* Subtle chart visual like reference image */}
          <div className="footer-subtle-chart">
            <svg viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q10,20 20,10 T40,10 T60,15 T80,5 T100,10" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
              <circle cx="0" cy="10" r="1.5" fill="var(--color-primary)" opacity="0.5" />
              <circle cx="20" cy="10" r="1.5" fill="var(--color-primary)" opacity="0.5" />
              <circle cx="40" cy="10" r="1.5" fill="var(--color-primary)" opacity="0.5" />
              <circle cx="60" cy="15" r="1.5" fill="var(--color-primary)" opacity="0.5" />
              <circle cx="80" cy="5" r="1.5" fill="var(--color-primary)" opacity="0.5" />
              <circle cx="100" cy="10" r="1.5" fill="var(--color-primary)" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
