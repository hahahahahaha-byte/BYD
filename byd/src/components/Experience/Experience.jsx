import React from 'react';
import './Experience.css';

const Experience = () => {
  const specs = [
    { label: 'Variants', value: '' },
    { label: 'Exterior Colours', value: '' },
    { label: 'Interior', value: '' }
  ];

  return (
    <div className="experience-wrapper">
      <div className="experience-content">
        <div className="experience-left">
          <img 
            src="https://byd-mega.com/gallery/shark-6/interior/black/01.webp" 
            alt="Experience" 
            className="experience-image"
          />
        </div>
        <div className="experience-right">
          <div className="performance-stats">
            <div className="stat-item">
              <span className="stat-number">800km</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5.7s</span>
              <span className="stat-subtitle">0-100km/hr</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">436 HP</span>
              <span className="stat-subtitle">650 NM Torque</span>
            </div>
          </div>

          <div className="specs-table">
            {specs.map((spec, index) => (
              <React.Fragment key={index}>
                <div className="specs-row">
                  <span className="specs-label">{spec.label}</span>
                </div>
                {index < specs.length - 1 && <div className="specs-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <button className="book-now-btn">Book Now</button>

          <p className="disclaimer">
            Disclaimer: Performance related matrices are based on controlled conditions. 
            Actual performance will vary depending on driving behaviour, environment 
            and other influencing factors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;