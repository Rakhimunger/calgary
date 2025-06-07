import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Local image imports
import House from "../assets/House.jpg";
import House2 from "../assets/House2.jpg";
import Home from "../assets/Home.jpg";
import Home3 from "../assets/Home3.jpg";
import Home4 from "../assets/Home4.jpg";
import Home6 from "../assets/Home6.jpg";

const imageUrls = [House, House2, Home, Home3, Home4, Home6];

export default function IgnitingExcellence() {
  const [tab, setTab] = useState("History");
  const [currentImage, setCurrentImage] = useState(0);

  const tabs = {
    History:
      "Classic Fireplace Distributors has been a beacon of warmth and comfort in Calgary since 1993. With over 100 years of combined experience, our team is committed to providing top-quality fireplaces that enhance the beauty and coziness of any space. We are proud members of CHBA Calgary Region, WETT Inc., and HPBAC - organizations dedicated to quality workmanship and safe practices.",
    Mission:
      "Our mission is to ignite comfort and joy in every home through expertly crafted fireplaces that merge elegance, performance, and efficiency.",
    Vision:
      "To be the most trusted fireplace provider, known for innovation, integrity, and inspiring spaces with warmth.",
  };

  const nextImage = () =>
    setCurrentImage((currentImage + 1) % imageUrls.length);
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + imageUrls.length) % imageUrls.length);

  return (
    <div className="min-h-screen  px-4 py-12 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight drop-shadow">
          <span className="bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">
            Igniting Excellence
          </span>
        </h1>
        <p className="text-blue-500 mt-4 text-lg font-medium tracking-wide">
          Your warmth, our passion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Image + Controls */}
        <div className="w-full relative">
          <img
            src={imageUrls[currentImage]}
            alt="fireplace"
            className="rounded-2xl shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-500"
          />
          <div className="flex justify-center gap-8 mt-4 text-2xl text-gray-600">
            <button
              onClick={prevImage}
              className="hover:text-blue-600 transition duration-200"
            >
              ⟵
            </button>
            <button
              onClick={nextImage}
              className="hover:text-blue-600 transition duration-200"
            >
              ⟶
            </button>
          </div>
        </div>

        {/* Right: Tabs & Content */}
        <div className="w-full">
          <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-300 pb-2">
            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`text-md font-semibold px-3 py-1 rounded-md transition duration-200 ${
                  tab === key
                    ? "bg-blue-100 text-blue-800"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <motion.p
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-700 text-base leading-loose"
          >
            {tabs[tab]}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
