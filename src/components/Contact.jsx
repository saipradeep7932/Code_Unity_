import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    setSubmissionStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmissionStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none">
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40H40V0Z" fill="white" />
            <path d="M0 0H40V1H0V0ZM0 39H40V40H0V39Z" fill="#2DD4BF" />
            <path d="M0 0V40H1V0H0ZM39 0V40H40V0H39Z" fill="#2DD4BF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Get In <span className="text-[#2DD4BF]">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a question or a project in mind? Reach out to us to discuss your next big idea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1F2937] p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col space-y-6"
          >
            {[
              { icon: <Mail size={24} className="text-[#2DD4BF]" />, title: "Email Us", value: "contact@codeunity.dev", href: "mailto:contact@codeunity.dev" },
              { icon: <Phone size={24} className="text-[#2DD4BF]" />, title: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: <MapPin size={24} className="text-[#2DD4BF]" />, title: "Our Location", value: "Hyderabad, Telangana, India" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 group">
                <div className="bg-[#164E63] p-3 rounded-full group-hover:bg-[#2DD4BF] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">{item.title}:</h4>
                  {item.href ? (
                    <a href={item.href} className="text-gray-300 hover:text-[#2DD4BF] transition duration-200">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1F2937] p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Fields */}
              {[
                { name: "name", placeholder: "Your Name", type: "text" },
                { name: "email", placeholder: "Your Email", type: "email" },
              ].map((field, idx) => (
                <input
                  key={idx}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-5 py-3 border border-gray-600 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2DD4BF] focus:outline-none transition duration-200"
                  required
                />
              ))}

              {/* Textarea */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Your Message"
                className="w-full px-5 py-3 border border-gray-600 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2DD4BF] focus:outline-none transition duration-200"
                required
              ></textarea>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#2DD4BF] hover:bg-[#1A3C5A] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 text-lg"
              >
                Send Message
              </motion.button>

              {/* Success / Error Messages */}
              {submissionStatus === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-4 text-[#F4A261] font-medium text-lg">
                  Message submitted successfully! Thank you for contacting us.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
