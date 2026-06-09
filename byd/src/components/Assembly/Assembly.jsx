import React from 'react';
import './Assembly.css';

const Assembly = () => {
  const technicalAssembly = [
    {
      id: 1,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Ffeatures%2Ffeature-01.webp&w=640&q=75',
    },
    {
      id: 2,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Ffeatures%2Ffeature-02.webp&w=640&q=75',
    },
    {
      id: 3,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Ffeatures%2Ffeature-03.webp&w=640&q=75',
    },
    {
      id: 4,
      imageUrl: 'https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Ffeatures%2Ffeature-04.webp&w=640&q=75',
    }
  ];

  return (
    <div className="assembly-wrapper">
      <p className="assembly-heading">Advanced technical assembly</p>
      <div className="assembly-container">
        {technicalAssembly.map((item) => (
          <div key={item.id} className="assembly-card">
            <img 
              src={item.imageUrl} 
              alt={`Assembly ${item.id}`}
              className="assembly-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assembly;