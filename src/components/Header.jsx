import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md flex items-center justify-center transform -rotate-12">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-gray-800">Adymize</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/clients" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Clients
            </Link>
            <Link to="/why-adymize" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Why Adymize?
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Reviews
            </Link>
            <Link to="/faqs" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              FAQs
            </Link>
            <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 hover:shadow-lg">
              Chat Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;