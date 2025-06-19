import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

// Static Color Values (replaced Tailwind-incompatible dynamic refs)
const TEAM_BG = "#0F172A"; // Deep dark
const CARD_BG = "#FFFFFF"; // White
const TEXT_PRIMARY = "#1F2937"; // Dark gray
const TEXT_SECONDARY = "#6B7280"; // Medium gray
const ACCENT = "#F4A261";
const SECONDARY = "#2DD4BF";

// Team members data
const teamMembers = [
  {
    name: "Bhargav Naidu",
    role: "Lead Fullstack Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, filter: "brightness(2)" },
  visible: { opacity: 1, filter: "brightness(1)", transition: { duration: 0.8, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, filter: "brightness(2)" },
  visible: { opacity: 1, y: 0, filter: "brightness(1)", transition: { duration: 0.6, ease: "easeOut" } },
};

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden" style={{ backgroundColor: TEAM_BG }}>
      {/* Optional subtle dot pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.5" fill={SECONDARY} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-20">
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Meet Our <span style={{ color: SECONDARY }}>Expert Team</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Our diverse team of professionals brings experience and passion to every project, delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-8 flex flex-col items-center transition-all duration-300 ease-in-out relative group border border-gray-200"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-teal-400 shadow-md mb-6 group-hover:border-orange-400 transition-colors duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/128x128/E5E7EB/374151?text=${member.name.charAt(0)}`;
                }}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-teal-600 font-semibold text-lg mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {member.role}
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                Passionate about building impactful digital experiences through teamwork and innovation.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin size={24} />, href: member.linkedin, color: "hover:text-blue-600", label: "LinkedIn" },
                  { icon: <Twitter size={24} />, href: member.twitter, color: "hover:text-sky-400", label: "Twitter" },
                  { icon: <Github size={24} />, href: member.github, color: "hover:text-gray-900", label: "Github" },
                ].map(
                  (social, idx) =>
                    social.href && (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white`}
                        aria-label={`${member.name}'s ${social.label}`}
                      >
                        {social.icon}
                      </a>
                    )
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
