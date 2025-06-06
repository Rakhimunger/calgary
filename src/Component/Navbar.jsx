// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="bg-black text-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <div className="text-xl font-bold">Classic Fireplace</div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
//           <a href="#" className="hover:text-teal-400">
//             Home
//           </a>
//           <a href="#" className="hover:text-teal-400">
//             About Us
//           </a>
//           {/* Dropdown - Brands */}
//           <div className="group relative">
//             <button className="hover:text-teal-400">Brands</button>
//             <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded shadow-md"></div>
//           </div>
//           {/* Dropdown - Services */}
//           <div className="group relative">
//             <button className="hover:text-teal-400">Services</button>
//             <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded shadow-md"></div>
//           </div>
//           <a href="#" className="hover:text-teal-400">
//             Blog
//           </a>
//           <a href="#" className="hover:text-teal-400">
//             Contact
//           </a>
//           <button className="text-xl">&#128722;</button> {/* Cart icon */}
//           <button className="text-xl">&#128269;</button> {/* Search icon */}
//         </nav>

//         {/* Mobile Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black text-white px-4 py-2 space-y-2">
//           <a href="#" className="block hover:text-teal-400">
//             Home
//           </a>
//           <a href="#" className="block hover:text-teal-400">
//             About Us
//           </a>

//           <div>
//             <p className="font-semibold">Brands</p>
//           </div>

//           <div>
//             <p className="font-semibold">Services</p>
//           </div>

//           <a href="#" className="block hover:text-teal-400">
//             Blog
//           </a>
//           <a href="#" className="block hover:text-teal-400">
//             Contact
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
