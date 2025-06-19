import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// Color palette
const colors = {
  primary: "#1A3C5A",
  secondary: "#2DD4BF",
  background: "#0F172A",
  text: {
    primary: "#F9FAFC",
    secondary: "#D1D5DB",
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About", "Services", "Team", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:colors.background] shadow-lg"
          : "bg-[color:colors.background]/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-[color:colors.text.primary] tracking-tight">
          Code<span className="text-[color:colors.secondary]">Unity</span>
        </h1>

        <nav className="hidden md:flex space-x-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-[color:colors.text.secondary] font-medium text-lg hover:text-[color:colors.secondary] transition duration-300 ease-in-out px-2 py-1 rounded-md relative group scroll-smooth"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[color:colors.secondary] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-[color:colors.secondary] p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[color:colors.secondary]"
            aria-label="Toggle navigation"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 bg-[color:colors.background] shadow-inner"
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-[color:colors.text.secondary] hover:text-[color:colors.secondary] border-b border-gray-700 last:border-b-0 text-lg font-medium transition duration-300"
              onClick={() => setOpen(false)}
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
