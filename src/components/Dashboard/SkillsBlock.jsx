import { 
  FaJava, FaHtml5, FaCss3Alt, FaDocker, FaLinux, FaGitAlt
} from 'react-icons/fa';
import { 
  SiTypescript, SiSpringboot, SiHibernate, SiMysql, 
  SiMongodb, SiKubernetes, SiApachemaven, SiGooglecloud, 
  SiFirebase, SiRender, SiAngular 
} from 'react-icons/si';
import './DashboardBlocks.css';

const SkillsBlock = () => {
  return (
    <div className="bento-card reference-skills-block w-full">
      <div className="skills-header-ref">
        <h3 className="block-title" style={{marginBottom: 0}}>✨ Skills</h3>
        <span className="skills-sub-ref">Technologies I work with</span>
      </div>

      <div className="ref-skills-grid">
        {/* Languages */}
        <div className="ref-skill-category">
          <h4 className="ref-cat-title text-blue">{'</>'} Languages</h4>
          <ul className="ref-skill-list">
            <li><FaJava className="ref-skill-icon color-java" /> Java</li>
            <li><SiTypescript className="ref-skill-icon color-ts" /> TypeScript</li>
            <li><span className="ref-skill-icon txt-icon">SQL</span> SQL</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="ref-skill-category">
          <h4 className="ref-cat-title text-green">Backend</h4>
          <ul className="ref-skill-list">
            <li><SiSpringboot className="ref-skill-icon color-spring" /> Spring Boot</li>
            <li><SiHibernate className="ref-skill-icon color-hib" /> Hibernate (JPA)</li>
            <li><span className="ref-skill-icon txt-icon">API</span> REST APIs</li>
            <li><span className="ref-skill-icon txt-icon">µS</span> Microservices</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="ref-skill-category">
          <h4 className="ref-cat-title text-red">Frontend</h4>
          <ul className="ref-skill-list">
            <li><SiAngular className="ref-skill-icon color-angular" /> Angular</li>
            <li><FaHtml5 className="ref-skill-icon color-html" /> HTML</li>
            <li><FaCss3Alt className="ref-skill-icon color-css" /> CSS</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="ref-skill-category">
          <h4 className="ref-cat-title text-purple">Databases</h4>
          <ul className="ref-skill-list">
            <li><SiMysql className="ref-skill-icon color-mysql" /> MySQL</li>
            <li><SiMongodb className="ref-skill-icon color-mongo" /> MongoDB</li>
          </ul>
        </div>

        {/* DevOps & Tools */}
        <div className="ref-skill-category">
          <h4 className="ref-cat-title text-blue">DevOps & Tools</h4>
          <ul className="ref-skill-list">
            <li><FaDocker className="ref-skill-icon color-docker" /> Docker</li>
            <li><SiKubernetes className="ref-skill-icon color-k8s" /> Kubernetes</li>
            <li><FaGitAlt className="ref-skill-icon color-git" /> Git</li>
            <li><SiApachemaven className="ref-skill-icon color-maven" /> Maven</li>
            <li><FaLinux className="ref-skill-icon color-linux" /> Linux</li>
          </ul>
        </div>

        {/* Cloud & Platforms */}
        <div className="ref-skill-category">
          <h4 className="ref-cat-title text-orange">Cloud & Platforms</h4>
          <ul className="ref-skill-list">
            <li><SiGooglecloud className="ref-skill-icon color-gcp" /> Google Cloud</li>
            <li><SiFirebase className="ref-skill-icon color-firebase" /> Firebase</li>
            <li><SiRender className="ref-skill-icon color-render" /> Render</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default SkillsBlock;
