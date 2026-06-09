import React from 'react'
import './HeroVideo.css'
const HeroVideo = () => {
  return (
    <div>
<video src="/byd-shark-dvc-6.webm" autoPlay muted playsInline loop poster="/byd-shark-dvc-6-poster.jpg"></video>
<span className="brand-tag">World’s no.1 PHEV brand*  </span>
<span className="btn-parent">
  <button className="btn">EXPRESS YOUR INTEREST</button>
  <button className="btn2">TEST DRIVE</button>
  <button className="btn3">BOOK NOW</button>
</span>
<span className="disclaimer">
  *Based on the publicly available sources
</span>
<span className="price">
  PKR 19,950,000/-
</span>

    </div>
  )
}

export default HeroVideo