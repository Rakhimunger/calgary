import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const services = [
  "Expert Fireplace Installation",
  "Regular Cleaning & Maintenance",
  "Efficient Fan Installation & Service",
  "Upgraded Fireplace Solutions",
  "Seamless Wood to Gas Conversions",
  "Fireplace Selection & Procurement",
  "Custom Fireplace Design & Consulting",
  "Emergency Repair Services",
  "Fireplace Accessories & Parts Supply",
];

const stats = [
  { value: "100", label: "Year of Combined Experience", animated: true },
  { value: "10K+", label: "Fireplaces Installed" },
  { value: 30, label: "Years Servicing Calgary Community" },
];

export default function FireplaceExpertise() {
  // State for counting up the '30' stat
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1000; // total duration in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 bg-white text-gray-800 overflow-hidden">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-4 text-[#023b3b] drop-shadow-md"
      >
        Unmatched Fireplace Expertise
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center text-base sm:text-lg md:text-xl text-sky-500 font-medium mb-12"
      >
        Delivering warmth, comfort and style.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700 max-w-6xl mx-auto mb-16"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-start space-x-2 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <span className="text-lg text-sky-700 font-bold">+</span>
            <span className="text-sm sm:text-base">{service}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
      >
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow-md">
              {/* Show count animation for the "30" stat */}
              {stat.animated ? count : stat.value}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
