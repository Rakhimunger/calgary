import React from "react";
import { motion } from "framer-motion";
import House from "../assets/House.jpg";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {/* ✅ Exact Image Without Overlay */}
      <img
        src={House}
        alt="Fireplace Background"
        className="w-full h-full object-cover"
      />

      {/* ✅ Centered Content on Top */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-black max-w-3xl"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-lg">
            🔥 Fireplace For New Homes
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-black mb-8 drop-shadow-sm">
            Add value and comfort to your new construction project with our
            range of quality fireplaces built to impress.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            Explore Fireplaces
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
