import React from "react";
import { Briefcase, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Briefcase size={36} className="text-indigo-600" />,
    title: "Professional Solutions",
    desc: "We deliver enterprise-grade software tailored to your needs with a sharp focus on results."
  },
  {
    icon: <Code size={36} className="text-indigo-600" />,
    title: "Cutting-Edge Technology",
    desc: "Our stack includes the latest tools to ensure scalability, performance, and long-term success."
  },
  {
    icon: <Rocket size={36} className="text-indigo-600" />,
    title: "Rapid Development",
    desc: "With agile methodology, we iterate quickly and ship fast while keeping quality intact."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose CodeUnity?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At CodeUnity, we aim to bridge the gap between vision and execution through focused development and design thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
