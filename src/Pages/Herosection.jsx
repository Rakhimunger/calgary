import React from "react";
import House from "../assets/House.jpg";

const Herosection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <style>
        {`
          @keyframes marqueeRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .marquee-text {
            animation: marqueeRight 45s linear infinite;
            white-space: nowrap;
            display: inline-block;
          }

          .outlined-text {
            font-family: 'Arial Black', sans-serif;
            font-weight: 900;
            font-size: 3rem;
            color: white;
            -webkit-text-stroke: 2px black;
            text-stroke: 2px black;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
          }

          @media (min-width: 640px) {
            .outlined-text { font-size: 5rem; }
          }

          @media (min-width: 768px) {
            .outlined-text { font-size: 6rem; }
          }
        `}
      </style>

      {/* 🌀 Marquee Text */}
      <div className="absolute inset-0 flex items-center z-10 bg-opacity-30 overflow-hidden">
        <div className="marquee-text">
          <span className="outlined-text mx-10">Wood Fireplaces</span>
          <span className="outlined-text mx-10">Outdoor Fireplaces</span>
          <span className="outlined-text mx-10">Electric Fireplaces</span>
          <span className="outlined-text mx-10">Wood Fireplaces</span>
          <span className="outlined-text mx-10">Outdoor Fireplaces</span>
          <span className="outlined-text mx-10">Electric Fireplaces</span>
        </div>
      </div>

      {/* 📷 Background Image */}
      <img
        src={House}
        alt="Fireplace Background"
        className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-md"
      />
    </div>
  );
};

export default Herosection;
