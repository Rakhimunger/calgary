import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaRulerCombined,
  FaDraftingCompass,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUser />,
    number: "1",
    title: "Personalized Consultation",
    description: "Understanding your fireplace needs & vision.",
  },
  {
    icon: <FaRulerCombined />,
    number: "2",
    title: "Space Evaluation",
    description: "Precise measurements for perfect fitting.",
  },
  {
    icon: <FaDraftingCompass />,
    number: "3",
    title: "Fireplace Selection",
    description: "Choose style & budget-friendly options.",
  },
  {
    icon: <FaCheckCircle />,
    number: "4",
    title: "Installation & Approval",
    description: "Seamless setup until complete satisfaction.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const iconVariants = {
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, 15, 0],
    transition: { duration: 0.8, repeat: Infinity, repeatType: "loop" },
  },
};

const StepsSection = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10">
        Our Step-by-Step Process
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-gradient-to-tr from-blue-50 to-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl cursor-pointer w-full max-w-xs mx-auto"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.3 }}
            whileHover={{ scale: 1.04 }}
          >
            <motion.div
              className="text-blue-700 text-3xl sm:text-4xl mb-3"
              variants={iconVariants}
              whileHover="hover"
            >
              {step.icon}
            </motion.div>
            <div className="flex items-center mb-2 w-full justify-center sm:justify-start">
              <div className="bg-blue-700 text-white font-semibold rounded-full w-7 h-7 flex items-center justify-center mr-3 text-sm sm:text-base">
                {step.number}
              </div>
              <h3 className="text-md sm:text-lg font-semibold text-blue-900">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-600 text-center sm:text-left text-xs sm:text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
