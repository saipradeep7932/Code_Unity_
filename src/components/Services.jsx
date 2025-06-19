import React from "react";
import { motion } from "framer-motion";
import { Monitor, Palette, Cloud, Settings, Zap, Smartphone } from "lucide-react";

// Color palette
const colors = {
  primary: "#1A3C5A", // Deep navy
  secondary: "#2DD4BF", // Vibrant teal
  accent: "#F4A261", // Golden orange
  background: "#0F172A", // Deep black
  card: "#1F2937", // Dark gray
  text: {
    primary: "#F9FAFC", // Light gray
    secondary: "#D1D5DB", // Medium gray
  },
};

// Array of services
const services = [
  {
    icon: <Monitor size={36} className="text-[color:colors.secondary]" />,
    title: "Web Development",
    desc: "Build responsive, secure, and scalable web applications tailored to your business needs.",
  },
  {
    icon: <Palette size={36} className="text-[color:colors.secondary]" />,
    title: "UI/UX Design",
    desc: "Craft engaging and user-centered designs that provide intuitive and delightful experiences.",
  },
  {
    icon: <Cloud size={36} className="text-[color:colors.secondary]" />,
    title: "Cloud Deployment",
    desc: "Seamlessly launch and manage your products on leading cloud platforms like AWS, Vercel, or GCP.",
  },
  {
    icon: <Settings size={36} className="text-[color:colors.secondary]" />,
    title: "DevOps & CI/CD",
    desc: "Implement robust DevOps practices and CI/CD pipelines to ensure smooth delivery and operations.",
  },
  {
    icon: <Zap size={36} className="text-[color:colors.secondary]" />,
    title: "API Development",
    desc: "Design and build high-performance, secure, and scalable custom APIs for your applications.",
  },
  {
    icon: <Smartphone size={36} className="text-[color:colors.secondary]" />,
    title: "Mobile Apps",
    desc: "Develop cross-platform mobile applications with React Native, reaching users on iOS and Android.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, filter: "brightness(2)" },
  visible: { opacity: 1, filter: "brightness(1)", transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "brightness(2)" },
  visible: { opacity: 1, y: 0, filter: "brightness(1)", transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[color:colors.background] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="[color:colors.secondary]" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-[color:colors.text.primary] mb-6 leading-tight tracking-tight">
            Our Core <span className="text-[color:colors.secondary]">Services</span>
          </h2>
          <p className="text-[color:colors.text.secondary] text-xl max-w-3xl mx-auto leading-relaxed">
            We provide a full suite of software solutions, from conceptualization to deployment, with precision and expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[color:colors.card] p-8 rounded-2xl border border-gray-700 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[color:colors.secondary] to-[color:colors.accent] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              <div className="mb-6 p-3 rounded-full bg-teal-900 group-hover:bg-[color:colors.secondary] group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[color:colors.text.primary] mb-3 group-hover:text-[color:colors.secondary] transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              <p className="text-[color:colors.text.secondary] text-lg leading-relaxed relative z-10">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;