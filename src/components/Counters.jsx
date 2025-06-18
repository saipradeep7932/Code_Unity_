import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Headset, HardHat } from "lucide-react"; // Icons for counters

// Data for the counter section
const counterItems = [
  {
    icon: <Users size={48} className="text-blue-400" />, // Changed icon color to a lighter blue for pop
    value: 250,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: <Briefcase size={48} className="text-green-400" />, // Changed icon color
    value: 500,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <Headset size={48} className="text-purple-400" />, // Changed icon color
    value: 12000,
    label: "Hours Of Support",
    suffix: "+",
  },
  {
    icon: <HardHat size={48} className="text-orange-400" />, // Changed icon color
    value: 35,
    label: "Dedicated Experts",
    suffix: "+",
  },
];

// Reusable Counter component with animation
const AnimatedCounter = ({ from, to, duration, suffix }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  // useInView hook to trigger animation when component enters viewport
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp;
    const animateCount = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easedProgress = easeOutQuad(progress); // Apply easing function
      setCount(Math.floor(easedProgress * (to - from) + from));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(to); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animateCount);
  }, [from, to, duration, isInView]);

  // Easing function for smoother animation (quadratic ease-out)
  const easeOutQuad = (t) => t * (2 - t);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Counters = () => {
  return (
    <section id="counters" className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Abstract background shapes with subtle animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full -top-24 -right-24 mix-blend-overlay blur-3xl animate-blob-slow"></div>
        <div className="absolute w-80 h-80 bg-purple-600 rounded-full -bottom-24 -left-24 mix-blend-overlay blur-3xl animate-blob-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Main heading and paragraph with high contrast */}
          <h2 className="text-5xl font-extrabold mb-6 leading-tight text-black drop-shadow-lg">
            Our Achievements
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-black-300 opacity-90 leading-relaxed">
            Proudly showcasing the milestones we've achieved with our commitment
            to excellence and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {counterItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              // Solid dark background for counter cards for optimal contrast
              className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:bg-gray-700 transform hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div> 
              <p className="text-6xl font-extrabold mb-2 leading-tight text-white"> {/* Number text is white */}
                <AnimatedCounter from={0} to={item.value} duration={2} suffix={item.suffix} />
              </p>
              <h3 className="text-xl font-semibold text-gray-300 opacity-90">{item.label}</h3> {/* Label text is light gray */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
