import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Links for navigation
  const links = ["Home", "About", "Services", "Team", "Contact"];

  // Handle scroll to add/remove shadow from navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      // Initial animation for header to slide down
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Fixed position, full width, z-index for layering, and dynamic shadow based on scroll
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm shadow-sm" // Added backdrop blur for professional transparency
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Company Logo/Name */}
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">
          Code<span className="text-blue-500">Unity</span>
        </h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 font-medium text-lg hover:text-indigo-600 transition duration-300 ease-in-out px-2 py-1 rounded-md relative group"
            >
              {link}
              {/* Underline animation on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-indigo-600 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Conditional Rendering) */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 bg-white shadow-inner"
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-gray-700 hover:text-indigo-600 border-b border-gray-100 last:border-b-0 text-lg font-medium transition duration-300"
              onClick={() => setOpen(false)} // Close menu on link click
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
