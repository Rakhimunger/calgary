import React from "react";
import { FaArrowRight } from "react-icons/fa";

import House from "../assets/House.jpg";
import House2 from "../assets/House2.jpg";

const blogPosts = [
  {
    title:
      "5 Best Gas Fireplace Brands in 2025 (Top Market Competitors Ranked)",
    date: "June 7, 2025",
    category: "Insights",
    image: House,
  },
  {
    title: "Top 10 Tips for Fireplace Efficiency: Enhance Your Home’s Warmth",
    date: "June 7, 2025",
    category: "Home Comfort",
    image: House2,
  },
  {
    title:
      "Selecting Fireplaces for New Homes: A Builder’s Guide to Innovation and Style",
    date: "June 7, 2025",
    category: "How-To Guides",
    image: House,
  },
];

const BlogCards = () => {
  return (
    <div className="bg-gradient-to-b from-white via-teal-50 to-blue-100 py-14 px-6 sm:px-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-teal-700 tracking-tight mb-10 drop-shadow-md">
        Latest News{" "}
        <span className="text-gray-900 font-light">Stay Informed</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-center text-sky-700 mb-12">
        🔥 Discover Fireplace Tips, Trends & Style
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-400 flex flex-col overflow-hidden animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 tracking-wide uppercase">
                  {post.date} &bull; {post.category}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-sky-700 transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2">
                <button
                  aria-label={`Read more about ${post.title}`}
                  className="inline-flex items-center gap-2 text-sky-700 font-semibold text-sm sm:text-base hover:text-sky-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded"
                >
                  Read More <FaArrowRight className="inline-block" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogCards;
