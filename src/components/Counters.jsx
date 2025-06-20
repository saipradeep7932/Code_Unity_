import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Headset, HardHat } from "lucide-react";

// Color palette
const colors = {
  primary: "#1A3C5A",          // Deep navy
  secondary: "#2DD4BF",        // Vibrant teal
  accent: "#F4A261",           // Golden orange
  background: "#0F172A",       // Deep black
  card: "#1E293B",             // Darker card background
  text: {
    primary: "#F9FAFC",        // Light gray
    secondary: "#94A3B8",      // Slate-gray
  },
};

const counterItems = [
  { icon: <Users size={48} className="text-teal-300" />, value: 250, label: "Happy Clients", suffix: "+" },
  { icon: <Briefcase size={48} className="text-teal-300" />, value: 500, label: "Projects Completed", suffix: "+" },
  { icon: <Headset size={48} className="text-teal-300" />, value: 12000, label: "Hours Of Support", suffix: "+" },
  { icon: <HardHat size={48} className="text-teal-300" />, value: 35, label: "Dedicated Experts", suffix: "+" },
];

const AnimatedCounter = ({ from, to, duration, suffix }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp;
    const animateCount = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const eased = t => t * (2 - t);
      setCount(Math.floor(eased(progress) * (to - from) + from));
      if (progress < 1) requestAnimationFrame(animateCount);
      else setCount(to);
    };
    requestAnimationFrame(animateCount);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, filter: "brightness(2)" },
  visible: {
    opacity: 1,
    filter: "brightness(1)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "brightness(2)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "brightness(1)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Counters = () => {
  return (
    <section
      id="counters"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" fill="none">
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M40 0H0V40H40V0Z" fill="white" />
            <path d="M0 0H40V1H0V0ZM0 39H40V40H0V39Z" fill={colors.secondary} />
            <path d="M0 0V40H1V0H0ZM39 0V40H40V0H39Z" fill={colors.secondary} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Our Achievements
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Proudly showcasing the milestones we've achieved with our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {counterItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[color:colors.card] p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-700 transition duration-300 transform hover:-translate-y-1 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[color:colors.secondary] to-[color:colors.accent] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-teal-900 rounded-full group-hover:bg-[color:colors.secondary] transition duration-300 relative z-10">
                {item.icon}
              </div>
              <p className="text-4xl font-bold text-white mb-2 group-hover:text-[color:colors.secondary] transition-colors duration-200">
                <AnimatedCounter from={0} to={item.value} duration={2} suffix={item.suffix} />
              </p>
              <h3 className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors duration-200">
                {item.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
