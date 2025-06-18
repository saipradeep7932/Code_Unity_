import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 mt-20 relative overflow-hidden">
      {/* Subtle background particles/dots */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 relative z-10">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-3xl font-extrabold text-white mb-6">
            Code<span className="text-blue-500">Unity</span>
          </h3>
          <p className="text-md leading-relaxed text-gray-400 mb-6">
            Empowering developers through unified collaboration, cutting-edge
            technology, and innovative solutions to build the future, today.
          </p>
          {/* Social Media Links with vibrant hover */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-125"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-125"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition duration-300 transform hover:scale-125"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-700 transition duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-125"
              aria-label="Github"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-md">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition duration-300 hover:underline hover:underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300 hover:underline hover:underline-offset-4"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition duration-300 hover:underline hover:underline-offset-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="text-gray-400 hover:text-white transition duration-300 hover:underline hover:underline-offset-4"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition duration-300 hover:underline hover:underline-offset-4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
          <address className="space-y-4 text-md not-italic">
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:contact@codeunity.dev"
                className="hover:text-white transition duration-300"
              >
                contact@codeunity.dev
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-white transition duration-300"
              >
                +91 98765 43210
              </a>
            </p>
            <p className="text-gray-400">Hyderabad, Telangana, India</p>
          </address>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-16 text-sm text-gray-500 border-t border-gray-800 pt-8">
        &copy; {new Date().getFullYear()} CodeUnity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
