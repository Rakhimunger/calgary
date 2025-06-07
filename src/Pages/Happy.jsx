import React from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, Smile } from "lucide-react";

export default function Happy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4 py-16 sm:px-8 md:px-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Our <span className="text-blue-700">Happy Customers</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          Don't just take our word for it. Hear from those who've experienced
          the warmth of Classic Fireplace.
        </p>
      </motion.div>

      {/* Highlighted Review Box Instead of API Error */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 border-l-4 border-blue-400 text-blue-800 px-8 py-6 rounded-2xl shadow-md max-w-3xl mx-auto mb-16 backdrop-blur-sm"
      >
        <p className="italic text-lg leading-relaxed">
          “We recently installed a fireplace from Classic and the experience was
          wonderful from start to finish. Warmth, beauty, and excellent customer
          service all in one!”
        </p>
        <div className="mt-4 text-right font-semibold">
          — A Satisfied Customer
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg px-8 py-12 text-center max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
        >
          Contact Us
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Get in Touch
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:scale-105 transition transform shadow-lg">
            <PhoneCall size={20} /> Contact Us
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:scale-105 transition transform shadow-lg">
            <Mail size={20} /> Send Message
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-14 text-gray-500 text-sm">
        <span className="inline-flex items-center gap-1">
          <Smile className="text-yellow-400" size={16} /> Crafted with care at
          Classic Fireplace
        </span>
      </div>
    </div>
  );
}
