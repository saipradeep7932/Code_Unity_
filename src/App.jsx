import React from "react";
import Navbar from "./components/Navbar.jsx"; // Added .jsx extension
import Hero from "./components/Hero.jsx";     // Added .jsx extension
import About from "./components/About.jsx";   // Added .jsx extension
import Services from "./components/Services.jsx"; // Added .jsx extension
import Team from "./components/Team.jsx";     // Added .jsx extension
import Contact from "./components/Contact.jsx"; // Added .jsx extension
import Footer from "./components/Footer.jsx"; // Added .jsx extension
import Counters from "./components/Counters.jsx"; // Added .jsx extension

const App = () => {
  return (
    // Main container for the entire application.
    // Uses 'font-sans' for a modern look, default text color, and smooth scrolling for anchor links.
    // Removed 'bg-white' from here as individual sections will manage their backgrounds.
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar component for navigation, fixed at the top */}
      <Navbar />
      {/* Hero section with a prominent call to action */}
      <Hero />
      {/* About section detailing the company's mission and values */}
      <About />
      {/* New Counters section to display key achievements */}
      <Counters />
      {/* Services section outlining the offerings */}
      <Services />
      {/* Team section introducing key members */}
      <Team />
      {/* Contact section with a form and contact information */}
      <Contact />
      {/* Footer component with links and copyright information */}
      <Footer />
    </div>
  );
};

export default App;
