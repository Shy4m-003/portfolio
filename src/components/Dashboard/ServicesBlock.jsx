import { FaServer, FaCodeBranch, FaCubes, FaUsers } from 'react-icons/fa';
import './DashboardBlocks.css';

const servicesList = [
  {
    icon: <FaServer />,
    title: 'Backend Development',
    text: 'Scalable APIs and microservices with Spring Boot.'
  },
  {
    icon: <FaCubes />,
    title: 'Full Stack Development',
    text: 'End-to-end web applications with modern tech.'
  },
  {
    icon: <FaCodeBranch />,
    title: 'System Design',
    text: 'Designing scalable and resilient system architectures.'
  },
  {
    icon: <FaUsers />,
    title: 'Collaboration',
    text: 'Open to collaborate on impactful projects.'
  }
];

const ServicesBlock = () => {
  return (
    <div className="bento-card services-bento-block w-full">
      <div className="services-header-ref">
        <h3 className="block-title" style={{marginBottom: 0}}>⚡ Services</h3>
        <span className="services-sub-ref">How I can help you build and scale.</span>
      </div>
      <div className="services-grid-wrapper">
        {servicesList.map((service, idx) => (
          <div key={idx} className="service-ref-card">
            <div className="service-icon-bento text-blue">{service.icon}</div>
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBlock;
