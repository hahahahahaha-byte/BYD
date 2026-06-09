import React from 'react'
import './InteriorImages.css'

const InteriorImages = () => {
  return (
    <div className="container">
      <p className="interior-description">Adventure inside-out!</p>
      
      <img 
        src="https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Finterior%2Finterior-shark-01.webp&w=1920&q=75" 
        alt="Car 1" 
        className="interior-image1" 
      />
      
      <img 
        src="https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Finterior%2Finterior-shark-02-left.webp&w=1080&q=75" 
        alt="Car 2" 
        className="interior-image2" 
      />
      
      <img 
        src="https://byd-mega.com/_next/image?url=%2Fimages%2Fbyd-shark%2Finterior%2Finterior-shark-03-right.webp&w=1080&q=75" 
        alt="Car 3" 
        className="interior-image3" 
      />
    </div>
  )
}

export default InteriorImages