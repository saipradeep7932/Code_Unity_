import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      // Full screen height, centered content, very dark background gradient
      className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-950 relative overflow-hidden" 
      style={{
        background: 'linear-gradient(to bottom right, #0A0A0A, #1D1B1C)', // Darker, richer gradient
      }}
    >
      {/* Background shapes for visual interest with animation */}
      <div className="absolute inset-0 z-0">
        {/* Blob 1: Vibrant blue, more blurred, slower animation */}
        <motion.div
          initial={{ x: -200, y: -200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute w-96 h-96 bg-blue-700 rounded-full -top-16 -left-16 blur-3xl opacity-30 animate-blob-slower"
        ></motion.div>
        {/* Blob 2: Vibrant purple, more blurred, slower animation with delay */}
        <motion.div
          initial={{ x: 200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
          className="absolute w-80 h-80 bg-purple-700 rounded-full -bottom-32 -right-32 blur-3xl opacity-30 animate-blob-slower animation-delay-3000"
        ></motion.div>
        {/* New Blob 3: Subtle glow, center-top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 animate-pulse-slow"
        ></motion.div>
      </div>

      <motion.div
        // Animation for content to fade in and slide up
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 z-10 relative"
      >
        {/* Explicitly setting text color and a very strong shadow */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,1)]" style={{ color: '#F8FAFC' }}> {/* Force text to a very light, almost white color, and a strong custom drop shadow */}
          Build Better, Smarter <br /> with{" "}
          <span className="text-yellow-300 drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">CodeUnity</span> {/* Strong custom drop shadow */}
        </h1>
        {/* Explicitly setting text color and a strong shadow */}
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ color: '#E2E8F0' }}> {/* Force text to a light gray, and a strong custom drop shadow */}
          We craft powerful software solutions and experiences tailored for your
          vision, transforming ideas into reality.
        </p>
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.4)" }} // Even darker hover shadow
          whileTap={{ scale: 0.95 }}
          href="#services"
          className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out transform"
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
