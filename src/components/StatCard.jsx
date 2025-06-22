const StatCard = ({ title, iconClass, current, goal, progressColor, bgCircleColor, darkMode }) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div 
      className={`card border-0 h-100 stat-card ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = darkMode 
          ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)'
          : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 123, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = darkMode 
          ? '0 8px 25px rgba(0, 0, 0, 0.3)'
          : '0 8px 25px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Animated background gradient */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
      />
      
      <div className="card-body p-4 position-relative">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <div 
              className="rounded-circle p-3 position-relative icon-wrapper"
              style={{ 
                backgroundColor: bgCircleColor,
                transition: 'all 0.3s ease',
                border: darkMode ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid rgba(0, 0, 0, 0.05)'
              }}
            >
              <i 
                className={`${iconClass} fs-4`}
                style={{
                  transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              ></i>
              
              {/* Pulsing ring effect */}
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle pulse-ring"
                style={{
                  border: '2px solid currentColor',
                  opacity: 0,
                  transform: 'scale(1)',
                  animation: 'none'
                }}
              />
            </div>
          </div>
          
          <div className="flex-grow-1 ms-4">
            <h6 
              className={`card-title mb-2 fw-semibold ${darkMode ? 'text-light-emphasis' : 'text-muted'}`}
              style={{
                fontSize: '0.875rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
            >
              {title}
            </h6>
            
            <h3 
              className={`mb-3 fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}
              style={{
                fontSize: '2rem',
                lineHeight: '1.2',
                transition: 'color 0.3s ease'
              }}
            >
              {current.toLocaleString()}
            </h3>
            
            {/* Enhanced progress bar */}
            <div 
              className="progress mb-2"
              style={{ 
                height: '6px',
                borderRadius: '10px',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                overflow: 'hidden'
              }}
            >
              <div
                className={`progress-bar ${progressColor}`}
                style={{ 
                  width: `${percentage}%`,
                  borderRadius: '10px',
                  transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Shimmer effect */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    animation: 'shimmer 2s infinite linear',
                    transform: 'translateX(-100%)'
                  }}
                />
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <small className={`${darkMode ? 'text-light-emphasis' : 'text-muted'} fw-medium`}>
                Goal: {goal.toLocaleString()}
              </small>
              <small 
                className={`fw-bold ${percentage >= 100 ? 'text-success' : (darkMode ? 'text-info' : 'text-primary')}`}
              >
                {Math.round(percentage)}%
              </small>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div 
        className="position-absolute bottom-0 start-0 w-100 bottom-accent"
        style={{
          height: '3px',
          background: `linear-gradient(90deg, var(--bs-${progressColor.replace('bg-','')}) 0%, transparent 100%)`,
          opacity: 0.6,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        .stat-card:hover .icon-wrapper i {
          transform: scale(1.1) rotate(5deg);
        }
        
        .stat-card:hover .pulse-ring {
          animation: pulse-ring 1.5s ease-out infinite;
        }
        
        .stat-card:hover .bottom-accent {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default StatCard;
