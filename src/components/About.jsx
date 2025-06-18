import React from "react";
import { Briefcase, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

// Array of features with icon, title, and description
const features = [
  {
    icon: <Briefcase size={40} className="text-indigo-600 mb-3" />,
    title: "Professional Solutions",
    desc: "We deliver enterprise-grade software tailored to your needs with a sharp focus on results and robust performance.",
  },
  {
    icon: <Code size={40} className="text-indigo-600 mb-3" />,
    title: "Cutting-Edge Technology",
    desc: "Our stack includes the latest tools and frameworks to ensure scalability, security, and long-term success.",
  },
  {
    icon: <Rocket size={40} className="text-indigo-600 mb-3" />,
    title: "Rapid Development",
    desc: "With agile methodology, we iterate quickly and ship fast while maintaining impeccable quality and reliability.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern/texture */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20H20V0Z" fill="white" />
            <path d="M0 0H20V1H0V0ZM0 19H20V20H0V19Z" fill="#E2E8F0" />
            <path d="M0 0V20H1V0H0ZM19 0V20H20V0H19Z" fill="#E2E8F0" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-indigo-700">CodeUnity</span>?
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            At CodeUnity, we aim to bridge the gap between vision and execution
            through focused development, innovative design thinking, and a
            commitment to excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100 relative overflow-hidden group"
            >
              {/* Animated overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Feature Icon */}
              <div className="mb-4 flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full group-hover:bg-white-600 group-hover:text-white transition-all duration-300 relative z-10">
                {item.icon}
              </div>
              {/* Feature Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-800 transition-colors duration-300 relative z-10">
                {item.title}
              </h3>
              {/* Feature Description */}
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
