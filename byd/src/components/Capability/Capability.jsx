import React from 'react';
import './Capability.css';

const Capability = () => {
  const capabilities = [
    {
      id: 1,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fshark-slider-img-1.webp&w=640&q=75',
      title: '360 CAMERA',
    },
    {
      id: 2,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fshark-slider-img-2.webp&w=640&q=75',
      title: 'INTELLIGENT COCKPIT WITH 15.6 INCH LCD'
    },
    {
      id: 3,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fshark-slider-img-3.webp&w=640&q=75',
      title: '2500KG OF TOWING'
    }
  ];

  return (
    <div className="capability-wrapper">
      <p className="capability-heading">NEXT LEVEL CAPABILITIES</p>
      <div className="capability-container">
        {capabilities.map((capability) => (
          <div key={capability.id} className="capability-card">
            <img 
              src={capability.imageUrl} 
              alt={capability.title}
              className="capability-image"
            />
            <div className="capability-text">
              <h3 className="capability-title">{capability.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="v2l-Section">
        <img 
          src="https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Fshark-function-img.webp&w=1920&q=75" 
          alt="V2L" 
          className="v2l-image" 
        />
        <p className="v2l-title">V2L function</p>
        <p className="v2l-description">"Vehicle-to-Load" (V2L) capability. Vehicle's battery can be used as a power source for external devices.</p>
      </div>
    </div>
  );
};

export default Capability;