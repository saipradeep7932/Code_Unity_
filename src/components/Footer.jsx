import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">CodeUnity</h3>
          <p className="text-sm">
            Empowering developers through unified collaboration, cutting-edge technology,
            and innovative solutions.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
          <p>Email: contact@codeunity.dev</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Hyderabad, India</p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} CodeUnity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;