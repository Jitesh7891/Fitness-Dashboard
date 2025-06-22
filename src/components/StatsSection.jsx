import  { useEffect, useState } from 'react';
import StatCard from './StatCard';

const StatsSection = ({ currentStats, currentGoals, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in effect on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Configuration for each stat card with styles and values
  const statsConfig = [
    {
      title: "Steps",
      iconClass: "fas fa-walking text-info",
      current: currentStats.steps,
      goal: currentGoals.steps,
      progressColor: "bg-info",
      bgCircleColor: "rgba(75, 192, 192, 0.15)",
      delay: 0
    },
    {
      title: "Calories",
      iconClass: "fas fa-fire text-danger",
      current: currentStats.calories,
      goal: currentGoals.calories,
      progressColor: "bg-danger",
      bgCircleColor: "rgba(255, 99, 132, 0.15)",
      delay: 100
    },
    {
      title: "Workouts",
      iconClass: "fas fa-dumbbell text-primary",
      current: currentStats.workouts,
      goal: currentGoals.workouts,
      progressColor: "bg-primary",
      bgCircleColor: "rgba(54, 162, 235, 0.15)",
      delay: 200
    },
    {
      title: "Active Minutes",
      iconClass: "fas fa-clock text-warning",
      current: currentStats.activeMinutes,
      goal: currentGoals.activeMinutes,
      progressColor: "bg-warning",
      bgCircleColor: "rgba(255, 193, 7, 0.15)",
      delay: 300
    }
  ];

  return (
    <div className="stats-section mb-5">
      <div
        className="text-center mb-4 "
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <h2 className={`fw-bold mb-2 ${darkMode ? 'text-white' : 'text-dark'}`}>
          Today's Progress
        </h2>
        <p className={`${darkMode ? 'text-light-emphasis' : 'text-muted'} mb-0`}>
          Track your daily fitness goals and achievements
        </p>
      </div>

      <div className="row g-4 mt-4">
        {statsConfig.map((stat) => (
          <div
            key={stat.title}
            className="col-lg-3 col-md-6 col-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${stat.delay}ms`
            }}
          >
            <StatCard
              title={stat.title}
              iconClass={stat.iconClass}
              current={stat.current}
              goal={stat.goal}
              progressColor={stat.progressColor}
              bgCircleColor={stat.bgCircleColor}
              darkMode={darkMode}
            />
          </div>
        ))}
      </div>

      {/* floating backgrounds... (unchanged) */}
      <div className="position-relative">
        {/* ... */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .stats-section {
          position: relative;
          padding: 2rem 0;
        }
          
          // Subtle floating radial gradients for background flair
        .stats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${darkMode
          ? 'radial-gradient(circle at 20% 50%, rgba(75, 192, 192, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 99, 132, 0.03) 0%, transparent 50%)'
          : 'radial-gradient(circle at 20% 50%, rgba(75, 192, 192, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 99, 132, 0.02) 0%, transparent 50%)'
        };
          pointer-events: none;
          z-index: -2;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
