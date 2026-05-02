import { useEffect, useRef } from 'react';
import { FaServer, FaLaptopCode, FaCogs, FaHandshake } from 'react-icons/fa';
import './Services.css';

const servicesList = [
  {
    title: 'Backend Development',
    description: 'Build scalable APIs and microservices using Spring Boot, focusing on clean architecture and high performance.',
    icon: <FaServer />
  },
  {
    title: 'Full Stack Web Development',
    description: 'Develop complete web applications with seamless frontend + backend integration for real-world solutions.',
    icon: <FaLaptopCode />
  },
  {
    title: 'System Design',
    description: 'Design clean, scalable architectures for complex domains, ensuring reliability and future-proofing.',
    icon: <FaCogs />
  },
  {
    title: 'Collaboration / Freelance',
    description: 'Open to collaborating on exciting projects, startups, and providing robust business solutions.',
    icon: <FaHandshake />
  }
];

const Services = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const cards = document.querySelectorAll('.service-card-alt');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title text-gradient">What I Can Do</h2>
        
        <div className="services-alternating">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`service-card-alt ${isEven ? 'slide-left' : 'slide-right'}`}>
                <div className="service-icon-box">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-text-box">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
