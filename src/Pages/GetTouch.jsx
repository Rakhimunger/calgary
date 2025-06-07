import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion"; // Import framer motion
import Home6 from "../assets/Home6.jpg";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Home6})` }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 text-center text-black px-4">
        {/* Heading with up-down motion */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        >
          Have a project in mind?
        </motion.h1>

        {/* Paragraph with up-down motion */}
        <motion.p
          className="text-lg md:text-xl mb-6 font-medium"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        >
          Do not hesitate to say Bonjour
        </motion.p>

        <button className="inline-flex items-center px-6 py-3 border border-whitetext-black font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
          Let’s Talk <ArrowUpRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
}
