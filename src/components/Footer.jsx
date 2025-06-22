import { useState, useEffect } from 'react';

const Footer = ({ darkMode = false }) => {
  const [sparkles, setSparkles] = useState([]);

  // Create sparkle effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.98) {
        const newSparkle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        setSparkles(prev => [...prev, newSparkle]);
        
        setTimeout(() => {
          setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const footerStyles = {
    footer: {
      background: darkMode 
        ? '#000000'
        : '#ffffff',
      color: darkMode ? '#fff' : '#212529',
      transition: 'all 0.7s ease',
      position: 'absolute',
      overflow: 'hidden',
      width : '100vw',
      left : '0',
      marginTop : '10vh'
    },
    bgShape1: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      borderRadius: '50%',
      opacity: 0.1,
      background: darkMode 
        ? 'linear-gradient(45deg, #9c27b0, #e91e63)'
        : 'linear-gradient(45deg, #2196f3, #00bcd4)',
      animation: 'pulse 4s ease-in-out infinite',
      zIndex: 1,
    },
    bgShape2: {
      position: 'absolute',
      bottom: '-50%',
      right: '-50%',
      width: '150%',
      height: '150%',
      borderRadius: '50%',
      opacity: 0.05,
      background: darkMode 
        ? 'linear-gradient(-45deg, #2196f3, #00bcd4)'
        : 'linear-gradient(-45deg, #9c27b0, #e91e63)',
      animation: 'pulse 4s ease-in-out infinite 2s',
      zIndex: 1,
    },
    brandLogo: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
    },
    featureCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s ease',
      animation: 'float 6s ease-in-out infinite',
    },
    iconWrapper: {
      width: '60px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
    },
    socialIcon: {
      width: '50px',
      height: '50px',
      background: 'rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    gradientText: {
      background: 'linear-gradient(45deg, #9c27b0, #e91e63, #ff5722)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradient-shift 3s ease infinite',
    },
    divider: {
      height: '2px',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      margin: '2rem 0',
    },
    sparkle: {
      position: 'fixed',
      width: '4px',
      height: '4px',
      background: darkMode ? '#ffd700' : '#6f42c1',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 9999,
      animation: 'sparkle 1s ease-out forwards',
    }
  };

  const keyframes = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes gradient-shift {
      0%, 100% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(90deg); }
    }
    
    @keyframes sparkle {
      0% { transform: scale(0) rotate(0deg); opacity: 1; }
      100% { transform: scale(1) rotate(180deg); opacity: 0; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          style={{
            ...footerStyles.sparkle,
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
          }}
        />
      ))}

      <footer style={footerStyles.footer}>
        {/* Background Shapes */}
        <div style={footerStyles.bgShape1}></div>
        <div style={footerStyles.bgShape2}></div>

        {/* Main Content */}
        <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center py-5">
            <div className="col-12 col-lg-10">
              
              {/* Brand Section */}
              <div className="text-center mb-5">
                <div 
                  className="d-inline-flex align-items-center gap-3 px-4 py-3 rounded-pill"
                  style={footerStyles.brandLogo}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <i className="fas fa-sparkles text-warning fs-4"></i>
                  <h2 className="fw-bold mb-0" style={footerStyles.gradientText}>
                    Jitesh Shewaramani
                  </h2>
                  <i className="fas fa-sparkles text-warning fs-4"></i>
                </div>
              </div>

              {/* Features Grid */}
              <div className="row g-4 mb-5">
                {[
                  {
                    icon: 'fas fa-code',
                    color: 'text-primary',
                    title: 'Clean Code',
                    description: 'Built with modern technologies and best practices for optimal performance',
                    delay: '0s'
                  },
                  {
                    icon: 'fas fa-heart',
                    color: 'text-danger',
                    title: 'Made with Love',
                    description: 'Crafted with attention to detail and exceptional user experience in mind',
                    delay: '2s'
                  },
                  {
                    icon: 'fas fa-coffee',
                    color: 'text-warning',
                    title: 'Fueled by Coffee',
                    description: 'Powered by countless cups of coffee and endless passion for innovation',
                    delay: '4s'
                  }
                ].map((feature, index) => (
                  <div key={index} className="col-12 col-md-4">
                    <div 
                      className="text-center p-4 rounded-4 h-100"
                      style={{
                        ...footerStyles.featureCard,
                        animationDelay: feature.delay
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                        const icon = e.currentTarget.querySelector('.icon-wrapper');
                        if (icon) {
                          icon.style.background = 'rgba(255, 255, 255, 0.2)';
                          icon.style.transform = 'rotate(360deg)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                        const icon = e.currentTarget.querySelector('.icon-wrapper');
                        if (icon) {
                          icon.style.background = 'rgba(255, 255, 255, 0.1)';
                          icon.style.transform = 'rotate(0deg)';
                        }
                      }}
                    >
                      <div 
                        className="icon-wrapper rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={footerStyles.iconWrapper}
                      >
                        <i className={`${feature.icon} ${feature.color} fs-3`}></i>
                      </div>
                      <h4 className="fw-semibold mb-3">{feature.title}</h4>
                      <p className="mb-0 opacity-75">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Section */}
              <div className="text-center mb-4">
                <h5 className="mb-4 fw-semibold">Connect With Us</h5>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  {[
                    'fab fa-github',
                    'fab fa-twitter',
                    'fab fa-linkedin',
                    'fab fa-instagram',
                    'fab fa-discord'
                  ].map((iconClass, index) => (
                    <div
                      key={index}
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={footerStyles.socialIcon}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.transform = 'translateY(-5px) rotate(15deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.transform = 'translateY(0px) rotate(0deg)';
                      }}
                    >
                      <i className={`${iconClass} fs-4`}></i>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={footerStyles.divider}></div>

              {/* Copyright */}
              <div className="text-center">
                <p className="mb-0 d-flex align-items-center justify-content-center flex-wrap gap-2 opacity-75">
                  <span>&copy; 2025 Jitesh Shewaramani. All rights reserved.</span>
                  <span className="d-flex align-items-center gap-1">
                    Made with <i className="fas fa-heart text-danger"></i> for amazing experiences
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;