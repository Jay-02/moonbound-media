import React from 'react'
import heroImg from '../img/backgroundHero.png'

function HeroImage() {
  return (
    <div className="relative ">
      <div className="absolute inset-1 mt-10">
        
      </div>
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-left object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-slate-950/50"></div>
    </div>
  );
}

export default HeroImage