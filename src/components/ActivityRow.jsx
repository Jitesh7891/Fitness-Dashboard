import { useState } from 'react';

const ActivityRow = ({ log, index, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Base background depending on theme and row index
  const baseBg = darkMode
    ? (index % 2 === 0 ? 'rgba(30, 41, 59, 0.3)' : 'rgba(51, 65, 85, 0.2)')
    : (index % 2 === 0 ? 'rgba(248, 250, 252, 0.8)' : 'rgba(241, 245, 249, 0.5)');

  // Hover background for row
  const hoverBg = darkMode
    ? 'rgba(59, 130, 246, 0.2)'
    : 'rgba(59, 130, 246, 0.1)';

  const currentBg = isHovered ? hoverBg : baseBg;

  // Styles for different activity types
  const typeStyles = {
    Cardio: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      boxShadow: '0 4px 15px rgba(239,68,68,0.3)'
    },
    Strength: {
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      boxShadow: '0 4px 15px rgba(59,130,246,0.3)'
    },
    Flexibility: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      boxShadow: '0 4px 15px rgba(16,185,129,0.3)'
    }
  };

  const badgeStyle = typeStyles[log.type] || typeStyles.Flexibility;

  return (
    <tr
      key={log.id}
      className="activity-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer'
      }}
    >
      <td className="ps-4 py-3" style={{ background: currentBg }}>
        <div className="d-flex align-items-center" style={{ justifyContent: 'center', paddingRight: '2vw' }}>
          <div
            className="me-3"
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 0 10px rgba(59,130,246,0.5)'
            }}
          />
          <span
            className={`${darkMode ? 'text-light-emphasis' : 'text-muted'} fw-medium`}
            style={{ fontSize: '0.9rem' }}
          >
            {/* Display formatted date */}
            {new Date(log.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </div>
      </td>

      <td className="py-3" style={{ background: currentBg }}>
        <strong
          className={`${darkMode ? 'text-white' : 'text-dark'} fw-bold`}
          style={{ fontSize: '1rem' }}
        >
          {log.activity}
        </strong>
      </td>

      <td className="py-3" style={{ background: currentBg }}>
        <span
          className="badge rounded-pill px-3 py-2 fw-semibold text-white"
          style={{
            background: badgeStyle.background,
            boxShadow: badgeStyle.boxShadow,
            fontSize: '0.8rem',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            border: 'none'
          }}
        >
          {log.type}
        </span>
      </td>

      <td className={`py-3 fw-medium ${darkMode ? 'text-light-emphasis' : 'text-muted'}`} style={{ background: currentBg, fontSize: '0.95rem' }}>
        {log.duration}
      </td>

      <td className="py-3" style={{ background: currentBg }}>
        <div className="d-flex align-items-center" style={{ justifyContent: 'center' }}>
          {/* Visual circular marker for calories burned */}
          <div
            className="me-2"
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'white',
              }}
            />
          </div>
          <span
            className="fw-bold"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1rem',
            }}
          >
            {log.calories} cal
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ActivityRow;
