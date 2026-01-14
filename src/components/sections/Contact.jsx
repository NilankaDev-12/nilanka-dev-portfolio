import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const Contact = () => {
  // Social media links
  const socialLinks = {
    instagram: "https://instagram.com/nilankaroy12",
    linkedin: "https://linkedin.com/in/nilanka-roy-9a0370357", // Replace with your LinkedIn
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center"
    >
      <RevealOnScroll>
        <div className="w-100 md:w-150 px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="space-y-8 text-center">
            <p className="text-white/80 text-lg mb-8">
              Feel free to reach out to me through my social media!
            </p>
            
            <div className="flex justify-center items-center gap-8">
              {/* Instagram Icon */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <svg 
                      className="w-10 h-10 text-white"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
              </a>

              {/* LinkedIn Icon */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <svg 
                      className="w-10 h-10 text-white"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="mt-12 text-white/60">
              <p className="text-sm mb-4">
                Click on the icons above to connect with me directly!
              </p>
              
              {/* Hardcoded Email Section */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-white/80 mb-2">For direct communication:</p>
                <div className="flex items-center justify-center gap-2">
                  <svg 
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  <p className="text-lg font-medium text-white">
                    nilankaroy6@gmail.com
                  </p>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  Feel free to reach out via email anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;