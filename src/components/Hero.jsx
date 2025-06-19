import React from "react";
import { motion } from "framer-motion";

// Color scheme update for professional look
const COLORS = {
  primary: "#1A3C5A", // Deep navy
  secondary: "#2DD4BF", // Vibrant teal
  accent: "#F4A261",    // Golden orange
  backgroundStart: "#0F172A", // Deep slate/navy
  backgroundEnd: "#1E293B",   // Slightly lighter slate
  textPrimary: "#F9FAFC",     // Light gray
  textSecondary: "#94A3B8",   // Softer slate-gray
  card: "#FFFFFF",
};

const containerVariants = {
  hidden: { opacity: 0, filter: "brightness(2)" },
  visible: {
    opacity: 1,
    filter: "brightness(1)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.backgroundStart}, ${COLORS.backgroundEnd})`,
      }}
    >
      {/* Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" fill="none">
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill={COLORS.secondary} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ x: -200, y: -200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute w-96 h-96 bg-[rgba(45,212,191,0.5)] rounded-full -top-16 -left-16 blur-3xl"
        />
        <motion.div
          initial={{ x: 200, y: 200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
          className="absolute w-80 h-80 bg-[rgba(244,162,97,0.4)] rounded-full -bottom-32 -right-32 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute w-[400px] h-[400px] bg-[rgba(26,60,90,0.4)] rounded-full top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"
        />
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-6 z-10 relative max-w-4xl mx-auto"
      >
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
          style={{ color: COLORS.textPrimary }}
        >
          Build Better, Smarter <br /> with{" "}
          <span style={{ color: COLORS.secondary }}>CodeUnity</span>
        </h1>
        <p
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: COLORS.textSecondary }}
        >
          We craft powerful software solutions and experiences tailored for
          your vision, transforming ideas into reality.
        </p>
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 15px rgba(45, 212, 191, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          href="#services"
          className="inline-block px-10 py-4 rounded-full font-semibold text-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: COLORS.secondary,
            color: COLORS.card,
          }}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
