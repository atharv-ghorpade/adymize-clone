import React from 'react';
import instagramLogo from '../assets/instagram.png';
import linkedinLogo from '../assets/linkedin.png';
import whatsappLogo from '../assets/whatsapp.png';

// Smooth scroll function for navigation
const smoothScrollTo = (elementId) => {
  if (elementId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }
  
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80; // Account for fixed header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              AD Mark
            </h2>
            <p className="text-gray-600 text-sm max-w-xs">
               Tech solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {['home', 'services', 'contact'].map((link) => (
              <button
                key={link}
                onClick={() => smoothScrollTo(link)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 capitalize"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a 
              href="https://wa.me/917058277558" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-green-100 rounded-lg flex items-center justify-center transition-colors duration-200"
              title="WhatsApp"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4 object-contain" />
            </a>
            <a 
              href="https://www.instagram.com/ad_mark_01/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-pink-100 rounded-lg flex items-center justify-center transition-colors duration-200"
              title="Instagram"
            >
              <img src={instagramLogo} alt="Instagram" className="w-4 h-4 object-contain" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ad-mark-tech-615572356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200"
              title="LinkedIn"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-4 h-4 object-contain" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 py-4">
          <div className="text-center text-sm text-gray-500">
            © 2025 AD Mark. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}