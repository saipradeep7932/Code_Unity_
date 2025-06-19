import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

// Color palette
const colors = {
  primary: "#1A3C5A", // Deep navy
  secondary: "#2DD4BF", // Vibrant teal
  accent: "#F4A261", // Golden orange
  background: "#0F172A", // Deep black
  text: {
    primary: "#F9FAFC", // Light gray
    secondary: "#D1D5DB", // Medium gray
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, filter: "brightness(2)" },
  visible: { opacity: 1, filter: "brightness(1)", transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "brightness(2)" },
  visible: { opacity: 1, y: 0, filter: "brightness(1)", transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-[color:colors.background] text-[color:colors.text.secondary] py-20 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5"> {/* Reduced opacity for less intrusive pattern */}
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"> {/* Increased spacing */}
            <circle cx="4" cy="4" r="1.5" fill="[color:colors.secondary]" /> {/* Slightly larger dots for clarity */}
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-extrabold text-[color:colors.text.primary] mb-6 tracking-tight">
              Code<span className="text-[color:colors.secondary]">Unity</span>
            </h3>
            <p className="text-base leading-relaxed text-[color:colors.text.secondary] mb-6">
              Empowering developers through collaboration, cutting-edge technology, and innovative solutions.
            </p>
            <div className="flex space-x-6">
              {[
                { Icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { Icon: Twitter, href: "#", color: "hover:text-sky-400" },
                { Icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { Icon: Github, href: "#", color: "hover:text-gray-100" },
              ].map(({ Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`text-[color:colors.text.secondary] ${color} transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[color:colors.secondary] focus:ring-offset-2 focus:ring-offset-[color:colors.background]`}
                  aria-label={Icon.name}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-[color:colors.text.primary] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-base">
              {[
                { href: "#home", text: "Home" },
                { href: "#about", text: "About Us" },
                { href: "#services", text: "Services" },
                { href: "#team", text: "Our Team" },
                { href: "#contact", text: "Contact" },
              ].map(({ href, text }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    className="text-[color:colors.text.secondary] hover:text-[color:colors.secondary] transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[color:colors.secondary]"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-xl font-semibold text-[color:colors.text.primary] mb-6">Contact Info</h4>
            <address className="space-y-3 text-base not-italic">
              <p className="text-[color:colors.text.secondary]">
                Email: <a href="mailto:contact@codeunity.dev" className="hover:text-[color:colors.secondary] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[color:colors.secondary]">contact@codeunity.dev</a>
              </p>
              <p className="text-[color:colors.text.secondary]">
                Phone: <a href="tel:+919876543210" className="hover:text-[color:colors.secondary] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[color:colors.secondary]">+91 98765 43210</a>
              </p>
              <p className="text-[color:colors.text.secondary]">Hyderabad, Telangana, India</p>
            </address>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mt-16 text-sm text-[color:colors.text.secondary] border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} CodeUnity. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;