import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Palette,
  Cloud,
  Settings,
  Zap,
  Smartphone,
} from "lucide-react"; // Importing relevant icons

// Array of services with title, description, and an icon
const services = [
  {
    icon: <Monitor size={36} className="text-blue-500" />,
    title: "Web Development",
    desc: "Build responsive, secure, and scalable web applications tailored to your business needs.",
  },
  {
    icon: <Palette size={36} className="text-green-500" />,
    title: "UI/UX Design",
    desc: "Craft engaging and user-centered designs that provide intuitive and delightful experiences.",
  },
  {
    icon: <Cloud size={36} className="text-purple-500" />,
    title: "Cloud Deployment",
    desc: "Seamlessly launch and manage your products on leading cloud platforms like AWS, Vercel, or GCP.",
  },
  {
    icon: <Settings size={36} className="text-red-500" />,
    title: "DevOps & CI/CD",
    desc: "Implement robust DevOps practices and CI/CD pipelines to ensure smooth delivery and operations.",
  },
  {
    icon: <Zap size={36} className="text-orange-500" />,
    title: "API Development",
    desc: "Design and build high-performance, secure, and scalable custom APIs for your applications.",
  },
  {
    icon: <Smartphone size={36} className="text-teal-500" />,
    title: "Mobile Apps",
    desc: "Develop cross-platform mobile applications with React Native, reaching users on iOS and Android.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Dynamic background pattern for a modern feel */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e0e7ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute inset-0 z-0 bg-blue-50 opacity-20 mix-blend-multiply"></div>

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
            Our Core <span className="text-indigo-700">Services</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            We provide a full suite of software solutions, from conceptualization
            to deployment, to bring your innovative ideas to life with precision
            and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl border border-blue-100 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group"
            >
              {/* Animated border/glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-300 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{boxShadow: '0 0 20px rgba(66, 153, 225, 0.5)'}}></div>
              
              {/* Service Icon with background circle */}
              <div className="mb-4 p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              {/* Service Description */}
              <p className="text-gray-700 text-lg leading-relaxed relative z-10">
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
