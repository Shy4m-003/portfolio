import TerminalVisual from '../Hero/TerminalVisual';
import { FaCode } from 'react-icons/fa';
import './DashboardBlocks.css';

const HighlightBlock = () => {
  return (
    <div className="bento-card highlight-block w-full">
      <div className="highlight-content">
        <div className="highlight-sub-badge">shyam@portfolio:~</div>
        <h2 className="highlight-massive-text">
          Building <span className="text-blue">Scalable Systems</span><br/>
          for the Future.
        </h2>
        
        <div className="highlight-terminal-wrapper">
          <TerminalVisual />
        </div>
      </div>
      
      <div className="highlight-bg-visuals">
        <FaCode className="bg-icon-code" />
      </div>
    </div>
  );
};

export default HighlightBlock;
