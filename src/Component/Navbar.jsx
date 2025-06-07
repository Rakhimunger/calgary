import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    {
      name: "Brands",
      href: "#",
    },
    {
      name: "Services",
      href: "#",
    },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg relative z-50">
      <style jsx>{`
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
        .nav-item {
          position: relative;
          margin: 0 2px;
        }
        .nav-item::before {
          content: "";
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
        }
        .nav-item:hover::before {
          width: 100%;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-serif text-xs font-bold">
              <span className="text-2xl italic">Classic</span>
              <div className="text-sm font-normal tracking-wider">
                FIREPLACE
              </div>
              <div className="text-xs font-light tracking-widest">
                DISTRIBUTORS
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-0">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group nav-item">
                  <a
                    href={item.href}
                    className="relative px-4 py-3 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out group block overflow-hidden"
                    onMouseEnter={() =>
                      item.hasDropdown && setActiveDropdown(index)
                    }
                    onMouseLeave={() =>
                      item.hasDropdown && setActiveDropdown(null)
                    }
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </span>

                    {/* Hover Shape */}
                    <div
                      className="absolute top-0 left-0 right-0 h-full bg-teal-600 transition-all duration-300 ease-out transform origin-top group-hover:scale-y-100 scale-y-0"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
                      }}
                    ></div>

                    {/* Additional accent shape */}
                    <div
                      className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-teal-500 to-teal-700 transition-all duration-300 ease-out transform origin-top group-hover:scale-y-100 scale-y-0"
                      style={{
                        clipPath: "polygon(5% 0, 95% 0, 80% 100%, 20% 100%)",
                        transitionDelay: "50ms",
                      }}
                    ></div>
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 ${
                        activeDropdown === index
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
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

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200 flex-1"
                >
                  {item.name}
                </a>
                {item.hasDropdown && (
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="px-3 py-2 text-gray-300 hover:text-white"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.hasDropdown && (
                <div
                  className={`ml-4 space-y-1 transition-all duration-200 ${
                    activeDropdown === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-600 mt-4">
            <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
