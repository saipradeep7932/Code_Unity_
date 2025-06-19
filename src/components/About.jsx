import React from "react";
import { Briefcase, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

// Color palette
const colors = {
  primary: "#1A3C5A", // Deep navy
  secondary: "#2DD4BF", // Vibrant teal
  accent: "#F4A261", // Golden orange
  background: "#E0F2FE", // Soft blue
  card: "#FFFFFF", // White
  text: {
    primary: "#1F2937", // Dark gray
    secondary: "#6B7280", // Medium gray
  },
};

// Array of features
const features = [
  {
    icon: <Briefcase size={40} className="text-[color:colors.secondary]" />,
    title: "Professional Solutions",
    desc: "We deliver enterprise-grade software tailored to your needs with a focus on results and performance.",
  },
  {
    icon: <Code size={40} className="text-[color:colors.secondary]" />,
    title: "Cutting-Edge Technology",
    desc: "Our stack includes modern tools and frameworks to ensure scalability, security, and success.",
  },
  {
    icon: <Rocket size={40} className="text-[color:colors.secondary]" />,
    title: "Rapid Development",
    desc: "Using agile methodology, we iterate quickly and ship fast while maintaining quality.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, filter: "brightness(2)" },
  visible: { opacity: 1, filter: "brightness(1)", transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "brightness(2)" },
  visible: { opacity: 1, y: 0, filter: "brightness(1)", transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[color:colors.background] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40H40V0Z" fill="white" />
            <path d="M0 0H40V1H0V0ZM0 39H40V40H0V39Z" fill="[color:colors.secondary]" />
            <path d="M0 0V40H1V0H0ZM39 0V40H40V0H39Z" fill="[color:colors.secondary]" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-[color:colors.text.primary] mb-6 leading-tight tracking-tight">
            Why Choose <span className="text-[color:colors.secondary]">CodeUnity</span>?
          </h2>
          <p className="text-[color:colors.text.secondary] text-xl max-w-3xl mx-auto leading-relaxed">
            At CodeUnity, we bridge vision and execution through innovative development and a commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[color:colors.card] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[color:colors.secondary] to-[color:colors.accent] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full group-hover:bg-[color:colors.secondary] group-hover:text-white transition-all duration-300 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[color:colors.text.primary] group-hover:text-[color:colors.secondary] transition-colors duration-300 relative z-10">
                {item.title}
              </h3>
              <p className="text-[color:colors.text.secondary] text-base leading-relaxed group-hover:text-[color:colors.text.primary] transition-colors duration-300 relative z-10">
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