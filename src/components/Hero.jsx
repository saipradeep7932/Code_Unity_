import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-pink-500 text-white relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build Better, Smarter <br /> with <span className="text-yellow-300">CodeUnity</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6">
          We craft powerful software solutions and experiences tailored for your vision.
        </p>
        <a
          href="#services"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Explore Services
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
