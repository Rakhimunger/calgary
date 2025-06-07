import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    {
      name: "Brands",
      href: "#",
      // Example dropdown items (add if needed)
      // hasDropdown: true,
      // dropdownItems: ["Brand 1", "Brand 2", "Brand 3"],
    },
    {
      name: "Services",
      href: "#",
      // hasDropdown: true,
      // dropdownItems: ["Service 1", "Service 2", "Service 3"],
    },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .nav-item {
          position: relative;
          margin: 0 2px;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 100%;
          background: linear-gradient(135deg, #0d9488, #14b8a6);
          transition: width 0.3s ease-out;
          clip-path: polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%);
          z-index: 1;
          border-radius: 4px;
        }

        .nav-item:hover::before {
          width: 100%;
        }

        .nav-item > a {
          position: relative;
          z-index: 2;
          display: inline-block;
          padding: 0.5rem 1rem;
          font-size: 0.875rem; /* text-sm */
          color: black;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-item > a:hover {
          color: white;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          padding: 0.5rem 1rem;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 0.25rem;
          min-width: 10rem;
          z-index: 50;
        }

        .dropdown-item {
          display: block;
          padding: 0.25rem 0;
          color: #333;
          font-size: 14px;
          transition: color 0.2s;
          text-decoration: none;
        }

        .dropdown-item:hover {
          color: #0d9488;
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-sm animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-serif text-xs font-bold text-black select-none">
              <span className="text-2xl italic">Classic</span>
              <div className="text-sm font-normal tracking-wider">
                FIREPLACE
              </div>
              <div className="text-xs font-light tracking-widest">
                DISTRIBUTORS
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4 items-center relative">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="nav-item group"
                  onMouseEnter={() =>
                    item.hasDropdown
                      ? setActiveDropdown(item.name)
                      : setActiveDropdown(null)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href={item.href}>{item.name}</a>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="dropdown-menu">
                      {item.dropdownItems.map((dropItem, idx) => (
                        <a key={idx} href="#" className="dropdown-item">
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-black hover:text-teal-600 p-2">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-black hover:text-teal-600 p-2 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-4 space-y-2 shadow-inner">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-900 hover:text-teal-600 text-sm"
                >
                  {item.name}
                </a>
                {item.hasDropdown &&
                  item.dropdownItems.map((subItem, idx) => (
                    <div
                      key={idx}
                      className="ml-4 text-sm text-gray-600 hover:text-teal-600"
                    >
                      <a href="#">{subItem}</a>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
