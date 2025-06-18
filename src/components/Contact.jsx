import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react"; // Corrected import syntax

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  // Handle input changes for form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or form submission
    console.log("Form Submitted:", form);
    setSubmissionStatus("success"); // Set status to success
    setForm({ name: "", email: "", message: "" }); // Clear form fields

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 3000);

    // In a real application, you would send this data to a backend:
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setSubmissionStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmissionStatus(null), 3000);
    })
    .catch((error) => {
      console.error('Error:', error);
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus(null), 3000);
    });
    */
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
       {/* Subtle background grid */}
       <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#E2E8F0" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Get In <span className="text-indigo-700">Touch</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a question or a project in mind? Feel free to reach out to us.
            We're always ready to discuss your next big idea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col space-y-6 border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Mail size={24} className="text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Email Us:</h4>
                <p className="text-gray-700">contact@codeunity.dev</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Phone size={24} className="text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Call Us:</h4>
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <MapPin size={24} className="text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Our Location:</h4>
                <p className="text-gray-700">Hyderabad, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-gray-800 placeholder-gray-500 shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-gray-800 placeholder-gray-500 shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-gray-800 placeholder-gray-500 shadow-sm"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 8px 15px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
              >
                Send Message
              </motion.button>

              {/* Submission Status Message */}
              {submissionStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-4 text-green-600 font-medium text-lg"
                >
                  Message submitted successfully! Thank you for contacting us.
                </motion.p>
              )}
              {submissionStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-4 text-red-600 font-medium text-lg"
                >
                  Failed to send message. Please try again later.
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
