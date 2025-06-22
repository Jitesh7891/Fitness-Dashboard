import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import ViewToggle from './ViewToggle';

const Header = ({ darkMode, onToggleDarkMode, viewType, onChangeViewType }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Track your progress and achieve your goals';
  const typingSpeed = 80; // milliseconds per character

  //Typewriter Effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <h1 className="display-5 fw-bold text-primary mb-1">Fitness Dashboard</h1>
            <p className={`mb-0 ${darkMode ? 'text-light-emphasis' : 'text-dark'}`}>
              {displayText}
              <span className="typewriter-cursor">|</span>
            </p>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-2">
            <DarkModeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />
            <ViewToggle viewType={viewType} onChange={onChangeViewType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;