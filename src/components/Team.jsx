// src/components/Team.jsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Pradeep Chand",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Arun Kumar",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ravi Teja",
    role: "DevOps Engineer",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-12">Meet Our Team</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="text-sm mt-2 text-gray-600">
                Passionate about building impactful digital experiences through teamwork and innovation.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
