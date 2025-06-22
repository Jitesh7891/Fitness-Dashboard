// Button for toggling Dark Mode

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
      onClick={onToggle}
      title="Toggle dark mode"
    >
      <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
};

export default DarkModeToggle;
