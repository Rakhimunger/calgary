import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import House from "../assets/House.jpg";
import House2 from "../assets/House2.jpg";
import Home from "../assets/Home.jpg";
import Home4 from "../assets/Home4.jpg";

const images = [House, House2, Home, Home4];

export default function ServicesSection() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    direction === "left"
      ? (current.scrollLeft -= 300)
      : (current.scrollLeft += 300);
  };

  return (
    <div className="w-full py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Fireplace Services
      </h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200
                     sm:p-3 sm:left-2 md:p-4 md:left-4"
          style={{ touchAction: "manipulation" }} // mobile touch optimization
        >
          <FaChevronLeft className="text-sm sm:text-base md:text-lg" />
        </button>

        {/* Images Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-6 md:px-10"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Fireplace ${index + 1}`}
              className="min-w-[150px] sm:min-w-[200px] md:min-w-[250px] 
                         h-[180px] sm:h-[250px] md:h-[300px] 
                         object-cover rounded-md shadow-lg
                         transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200
                     sm:p-3 sm:right-2 md:p-4 md:right-4"
          style={{ touchAction: "manipulation" }}
        >
          <FaChevronRight className="text-sm sm:text-base md:text-lg" />
        </button>
      </div>
    </div>
  );
}
