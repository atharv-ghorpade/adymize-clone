import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Why Adymize?', href: '/why-adymize' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 flex justify-center pointer-events-none">
      <div className="mt-6 w-[95%] max-w-5xl pointer-events-auto rounded-2xl bg-white/70 backdrop-blur-md shadow-lg flex items-center px-6 py-3">
        {/* Logo left */}
        <Link to="/" className="flex items-center space-x-2 mr-6">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center -rotate-12">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">Adymize</span>
        </Link>
        {/* Nav Links center */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* CTA Button far right */}
        <Link
          to="/faqs"
          className="ml-6 bg-gray-900 text-white px-6 py-2.5 rounded-xl font-semibold shadow hover:bg-gray-800 transition-all duration-200"
        >
          Chat Now
        </Link>
      </div>
    </header>
  );
}