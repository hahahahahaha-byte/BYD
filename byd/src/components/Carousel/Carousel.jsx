import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'PHEV WITH SUPER DUAL MODE OFF-ROAD PLATFORM',
      subtitle: 'BYD DMO · Ultimate Off-Road Hybrid',
      badge: 'DMO PLATFORM',
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fabout-shark-1.webp&w=1920&q=75',
      stats: [
        { label: 'Electric Range (NEDC)', value: '100 KM' },
        { label: 'Fuel Tank Capacity', value: '60L' },
        { label: 'Combined Range', value: '800 KM' }
      ],
      description: 'The Super Dual Mode Off-Road Platform, developed by BYD, is a specialised off-road plug-in hybrid platform. It combines a ladder frame chassis, an off-road hybrid architecture, and a high-performance chassis to deliver a balance of powerful off-roading capabilities, vehicle safety, and energy efficiency.',
      highlights: ['Ladder Frame Chassis', 'Off-Road Hybrid Architecture'],
      accent: '#f39c12'
    },
    {
      id: 2,
      title: 'UNSTOPPABLE OFF-ROAD PERFORMANCE',
      subtitle: 'Twin Motor + Advanced Torque Vectoring',
      badge: 'TERRAIN MASTER',
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fabout-shark-2.webp&w=1920&q=75',
      stats: [
        { label: 'Peak Power', value: '500+ HP' },
        { label: 'Max Torque', value: '760 Nm' },
        { label: 'Wading Depth', value: '850 mm' }
      ],
      description: 'Equipped with dual electric motors and a high-efficiency turbo engine, the DMO platform delivers instant torque and relentless traction. Front and rear differential lockers paired with intelligent torque vectoring let you crawl over boulders, deep ruts, and steep inclines with absolute confidence.',
      highlights: ['Front/Rear Diff Locks', '38° Approach Angle'],
      accent: '#10b981'
    },
    {
      id: 3,
      title: 'SMART HYBRID · MAXIMUM EFFICIENCY',
      subtitle: 'Intelligent Energy Management',
      badge: 'ECO INNOVATION',
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fabout-shark-3.webp&w=1920&q=75',
      stats: [
        { label: 'Energy Recovery', value: 'Up to 85%' },
        { label: 'EV Only Range', value: '100 km' },
        { label: 'Combined Range', value: '800 km' }
      ],
      description: 'Seamlessly switch between pure electric, series hybrid, and parallel hybrid modes. The intelligent energy management system optimizes fuel consumption while maintaining extreme off-road readiness. Perfect for long overland expeditions without range anxiety.',
      highlights: ['V2L External Discharge', '6.6kW AC Charging'],
      accent: '#3b82f6'
    }
  ];

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrentIndex(index);
  };

  const prevSlide = () => goToSlide(currentIndex - 1);
  const nextSlide = () => goToSlide(currentIndex + 1);

  const currentSlide = slides[currentIndex];

  return (
    <div className="dmo-carousel-container">
      <div className="dmo-carousel">
        <div className="carousel-content">
          {/* LEFT COLUMN - TEXT INFO */}
          <div className="info-section">
            <div className="badge-container">
              <span className="badge" style={{ backgroundColor: `${currentSlide.accent}20`, color: currentSlide.accent, borderColor: `${currentSlide.accent}40` }}>
                {currentSlide.badge}
              </span>
            </div>

            <h2 className="slide-title">{currentSlide.title}</h2>
            <p className="slide-subtitle" style={{ borderLeftColor: currentSlide.accent }}>{currentSlide.subtitle}</p>

            <div className="stats-row">
              {currentSlide.stats.map((stat, idx) => (
                <div key={idx} className="stat-block">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="slide-description">{currentSlide.description}</p>

            <div className="highlights-list">
              {currentSlide.highlights.map((item, idx) => (
                <span key={idx} className="highlight-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE (363x293px) */}
          <div className="image-section">
            <div className="image-wrapper" style={{ borderColor: `${currentSlide.accent}40` }}>
              <img 
                src={currentSlide.imageUrl} 
                alt={currentSlide.title}
                className="slide-image"
                style={{ width: '363px', height: '293px', objectFit: 'cover' }}
              />
              <div className="image-glow" style={{ background: `radial-gradient(circle, ${currentSlide.accent}30, transparent)` }}></div>
            </div>
          </div>
        </div>

        {/* NAVIGATION CONTROLS */}
        <div className="carousel-navigation">
          <button className="nav-arrow prev" onClick={prevSlide}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="slide-indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`indicator-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                style={currentIndex === idx ? { backgroundColor: currentSlide.accent } : {}}
              />
            ))}
          </div>

          <button className="nav-arrow next" onClick={nextSlide}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Slide counter */}
        <div className="slide-counter">
          <span style={{ color: currentSlide.accent }}>{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="counter-total">/{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;