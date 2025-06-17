import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Team", "Contact"];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">CodeUnity</h1>

        <nav className="hidden md:flex space-x-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-indigo-600">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 bg-white">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-indigo-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
