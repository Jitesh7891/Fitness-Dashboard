import StepsChart from './StepsChart';
import BarChart from './BarChart';

const ChartsSection = ({ data, viewType, darkMode }) => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-lg-8">
        <div className="card border-0 h-100" style={{
          background: 'light-dark(linear-gradient(135deg, #ffffff 0%, #f8fafc 100%), linear-gradient(135deg, #1f2937 0%, #111827 100%))',
          boxShadow: 'light-dark(0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.3)), light-dark(0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 10px 10px -5px rgba(0, 0, 0, 0.2))',
          borderRadius: '20px',
          overflow: 'hidden',
          border: 'light-dark(1px solid rgba(0, 0, 0, 0.05), 1px solid rgba(255, 255, 255, 0.1))'
        }}>
          <div className="card-header bg-transparent border-0 pt-4 pb-2" style={{
            background: 'light-dark(linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(31, 41, 55, 0.8) 100%))'
          }}>
            <div className="d-flex align-items-center">
              <div style={{
                width: '4px',
                height: '24px',
                background: 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)',
                borderRadius: '2px',
                marginRight: '12px'
              }}></div>
              <h5 className="card-title mb-0" style={{
                color: 'light-dark(#111827, #f3f4f6)',
                fontWeight: '700',
                fontSize: '18px',
                letterSpacing: '-0.025em'
              }}>Activity Trends</h5>
            </div>
          </div>
          <div
            className="card-body"
            style={{
              padding: window.innerWidth < 400 ? '0' : '1.5rem',
              width: window.innerWidth < 400 ? '95vw' : '100%',
              marginLeft : window.innerWidth < 400 ? '-10vw' : '',
            }}
          >
            <StepsChart data={data} viewType={viewType} darkMode = {darkMode} />
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="row g-4">
          <div className="col-12">
            <div className="card border-0" style={{
              background: 'light-dark(linear-gradient(135deg, #ffffff 0%, #fef2f2 100%), linear-gradient(135deg, #1f2937 0%, #7f1d1d 100%))',
              boxShadow: 'light-dark(0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.3)), light-dark(0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 10px 10px -5px rgba(0, 0, 0, 0.2))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: 'light-dark(1px solid rgba(239, 68, 68, 0.1), 1px solid rgba(239, 68, 68, 0.2))'
            }}>
              <div className="card-header bg-transparent border-0 pt-4 pb-2" style={{
                background: 'light-dark(linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(31, 41, 55, 0.8) 100%))'
              }}>
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '3px',
                    height: '20px',
                    background: 'linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(220, 38, 38) 100%)',
                    borderRadius: '2px',
                    marginRight: '10px'
                  }}></div>
                  <h6 className="card-title mb-0" style={{
                    color: 'light-dark(#374151, #d1d5db)',
                    fontWeight: '600',
                    fontSize: '14px',
                    letterSpacing: '-0.025em'
                  }}>Calories Burned</h6>
                </div>
              </div>
              <div className="card-body p-3">
                {/* BarChart for Calories Burned */}
                <BarChart
                  data={data}
                  viewType={viewType}
                  label="Calories"
                  title="Calories Burned"
                  borderColor="rgb(239, 68, 68)"
                  backgroundColor="rgba(239, 68, 68, 0.8)"
                  optionsOverrides={{
                    height: '140px',
                    plugins: {
                      title: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card border-0" style={{
              background: 'light-dark(linear-gradient(135deg, #ffffff 0%, #eff6ff 100%), linear-gradient(135deg, #1f2937 0%, #1e3a8a 100%))',
              boxShadow: 'light-dark(0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.3)), light-dark(0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 10px 10px -5px rgba(0, 0, 0, 0.2))',
              borderRadius: '16px',
              overflow: 'hidden',
              border: 'light-dark(1px solid rgba(59, 130, 246, 0.1), 1px solid rgba(59, 130, 246, 0.2))'
            }}>
              <div className="card-header bg-transparent border-0 pt-4 pb-2" style={{
                background: 'light-dark(linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(31, 41, 55, 0.8) 100%))'
              }}>
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '3px',
                    height: '20px',
                    background: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%)',
                    borderRadius: '2px',
                    marginRight: '10px'
                  }}></div>
                  <h6 className="card-title mb-0" style={{
                    color: 'light-dark(#374151, #d1d5db)',
                    fontWeight: '600',
                    fontSize: '14px',
                    letterSpacing: '-0.025em'
                  }}>Workout Sessions</h6>
                </div>
              </div>
              <div className="card-body p-3">
                {/* BarChart for Workout Sessions */}
                <BarChart
                  data={data}
                  viewType={viewType}
                  label="Workouts"
                  title="Workout Sessions"
                  borderColor="rgb(59, 130, 246)"
                  backgroundColor="rgba(59, 130, 246, 0.8)"
                  optionsOverrides={{
                    height: '140px',
                    scales: {
                      y: {
                        ticks: {
                          stepSize: 1
                        }
                      }
                    },
                    plugins: {
                      title: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;