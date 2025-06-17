import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Build responsive, secure and scalable web apps."
  },
  {
    title: "UI/UX Design",
    desc: "Craft engaging and user-centered designs."
  },
  {
    title: "Cloud Deployment",
    desc: "Launch your product with AWS, Vercel, or GCP."
  },
  {
    title: "DevOps & CI/CD",
    desc: "Ensure smooth delivery and operations."
  },
  {
    title: "API Development",
    desc: "Custom APIs built for speed and scale."
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform apps built with React Native."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a full suite of software solutions to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
