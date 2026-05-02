import { useState, useEffect } from 'react';
import './TerminalVisual.css';

const TerminalVisual = () => {
  const [lines, setLines] = useState([]);
  
  const terminalSequence = [
    { text: '> Initializing system...', delay: 800 },
    { text: '> Loading modules...', delay: 1500 },
    { text: '> Connecting to database...', delay: 2200 },
    { text: '> Starting services...', delay: 2900 },
    { text: '> System ready. Let\'s build! 🚀', delay: 3500 }
  ];

  useEffect(() => {
    const timeouts = terminalSequence.map((item, index) => {
      return setTimeout(() => {
        setLines(prev => [...prev, item.text]);
      }, item.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close-btn"></span>
          <span className="min-btn"></span>
          <span className="max-btn"></span>
        </div>
      </div>
      <div className="terminal-body">
        {lines.map((line, idx) => (
          <div key={idx} className="terminal-line typing-anim">
            <span className="terminal-prompt text-orange">{'>'}</span> {line.replace('>', '').trim()}
          </div>
        ))}
        <div className="terminal-line">
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalVisual;
