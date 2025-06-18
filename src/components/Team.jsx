// src/components/Team.jsx
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react"; // Added Github icon

// Array of team members with name, role, image, and social links (optional)
const teamMembers = [
  {
    name: "Pradeep Chand",
    role: "Lead Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#", // Added Github link
  },
  {
    name: "Arun Kumar",
    role: "Senior Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sneha Reddy",
    role: "Principal UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Ravi Teja",
    role: "Cloud DevOps Architect",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#CBD5E0" />
          </pattern>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Section Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Meet Our <span className="text-indigo-700">Expert Team</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Our diverse team of dedicated professionals brings a wealth of
            experience and passion to every project, ensuring exceptional
            results.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-8 flex flex-col items-center transition-all duration-300 ease-in-out relative group"
            >
              {/* Decorative top border on hover */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Member Image with enhanced styling */}
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-500 shadow-md mb-6 group-hover:border-blue-600 transition-colors duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/128x128/aabbcc/ffffff?text=${member.name.charAt(0)}`;
                }} // Placeholder for broken images
              />
              {/* Member Name and Role */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-800 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-semibold text-lg mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {member.role}
              </p>
              {/* Member Description */}
              <p className="text-base mt-2 text-gray-700 leading-relaxed">
                Passionate about building impactful digital experiences through
                teamwork and innovation.
              </p>
              {/* Social Media Links with improved hover */}
              <div className="flex space-x-4 mt-6">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition duration-300 transform hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition duration-300 transform hover:scale-110"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={24} />
                  </a>
                )}
                 {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition duration-300 transform hover:scale-110"
                    aria-label={`${member.name}'s Github`}
                  >
                    <Github size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
