import { activityLogs } from '../constants/activityLogs';
import ActivityRow from './ActivityRow';

const ActivityLog = ({ darkMode }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div
          className="card border-0 shadow-lg position-relative overflow-hidden"
          style={{
            // Gradient background based on theme
            background: darkMode
              ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
        >
          <div
            className="position-absolute top-0 end-0 opacity-10"
            style={{
              width: '200px',
              height: '200px',
              background: darkMode
                ? 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'
                : 'radial-gradient(circle, #ddd6fe 0%, transparent 70%)',
              transform: 'translate(50%, -50%)',
              borderRadius: '50%'
            }}
          />

          <div className="card-header bg-transparent border-0 pt-4 pb-3 position-relative">
            <h5
              className={`card-title mb-0 fw-bold ${darkMode ? 'text-white' : 'text-dark'}`}
              style={{
                fontSize: '1.5rem',
                letterSpacing: '-0.5px',
                textShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Recent Activity Log
            </h5>
            <div
              className="position-absolute bottom-0 start-0 w-100"
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                borderRadius: '1px'
              }}
            />
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table mb-0" style={{ borderCollapse: 'separate', borderSpacing: '0' }}>
                <thead>
                  <tr
                    style={{
                      background: darkMode
                        ? 'linear-gradient(90deg, #374151 0%, #4b5563 100%)'
                        : 'linear-gradient(90deg, #f8fafc 0%, #e2e8f0 100%)'
                    }}
                  >
                    {/* Table header columns */}
                    {['Date', 'Activity', 'Type', 'Duration', 'Calories'].map((col) => (
                      <th
                        key={col}
                        className={`border-0 ${col === 'Date' ? '' : ''} py-3 fw-semibold ${
                          darkMode ? 'text-light' : 'text-dark'
                        }`}
                        style={{
                          fontSize: '0.9rem',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activityLogs.map((log, idx) => (
                    <ActivityRow key={log.id} log={log} index={idx} darkMode={darkMode} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className="position-absolute bottom-0 start-0 w-100"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)',
              opacity: '0.7'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
