import { useState, useEffect } from 'react';
import './ChartSetup'; 
import Header from './components/Header';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import ChartsSection from './components/ChartsSection';
import ActivityLog from './components/ActivityLog';
import { generateDummyData } from './utils/generateDummyData';
import { goals } from './constants/goal';

const FitnessDashboard = () => {
  const [viewType, setViewType] = useState('daily');
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setData(generateDummyData(viewType));
  }, [viewType]);

  // compute currentStats
  const getCurrentStats = () => {
    if (!data || data.length === 0) {
      return { steps: 0, calories: 0, workouts: 0, activeMinutes: 0 };
    }
    if (viewType === 'daily') {
      const last = data[data.length - 1] || {};
      return {
        steps: last.steps || 0,
        calories: last.calories || 0,
        workouts: last.workouts || 0,
        activeMinutes: last.activeMinutes || 0
      };
    } else {
      return data.reduce((acc, day) => ({
        steps: acc.steps + day.steps,
        calories: acc.calories + day.calories,
        workouts: acc.workouts + day.workouts,
        activeMinutes: acc.activeMinutes + day.activeMinutes
      }), { steps: 0, calories: 0, workouts: 0, activeMinutes: 0 });
    }
  };

  const currentStats = getCurrentStats();
  const currentGoals = goals[viewType];

  return (
    <div
      className={`position-absolute top-0 start-0 w-100 h-100 ${darkMode ? 'bg-dark text-light' : ''}`}
      style={{
        backgroundColor: darkMode ? '#212529' : '#f8f9fa',
        margin: 0,
        padding: 0,
        overflowX: 'hidden'
      }}
      data-bs-theme={darkMode ? 'dark' : 'light'}
    >
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <div className="container-fluid py-4">
        <Header
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(prev => !prev)}
          viewType={viewType}
          onChangeViewType={setViewType}
        />

        <StatsSection
          currentStats={currentStats}
          currentGoals={currentGoals}
          darkMode={darkMode}
        />

        <ChartsSection
          data={data}
          viewType={viewType}
          darkMode = {darkMode}
        />

        <ActivityLog darkMode={darkMode} />

        <Footer darkMode={darkMode}/>
      </div>
    </div>
  );
};

export default FitnessDashboard;
