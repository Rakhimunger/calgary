import React from "react";
import { FaArrowRight } from "react-icons/fa";

import Home from "../assets/Home.jpg";
import Home5 from "../assets/Home5.jpg";
import Home6 from "../assets/Home6.jpg";

const blogPosts = [
  {
    title:
      "5 Best Gas Fireplace Brands in 2025 (Top Market Competitors Ranked)",
    date: "December 30, 2023",
    category: "Insights",
    image: Home,
  },
  {
    title: "Top 10 Tips for Fireplace Efficiency: Enhance Your Home’s Warmth",
    date: "November 29, 2023",
    category: "Home Comfort",
    image: Home6,
  },
  {
    title:
      "Selecting Fireplaces for New Homes: A Builder’s Guide to Innovation and Style",
    date: "December 9, 2023",
    category: "How-To Guides",
    image: Home5,
  },
];

const BlogCards = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-10 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-sky-600 mb-10">
        🔥 Discover Fireplace Tips, Trends & Style
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-gray-400 mb-1">
                {post.date} • {post.category}
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                {post.title}
              </h3>

              <div className="flex items-center gap-1 mt-3 text-sm text-sky-600 font-medium transition-all group-hover:gap-2 duration-200">
                <span>Read More</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
