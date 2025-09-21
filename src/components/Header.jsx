import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center">
          {/* Navigation Container - Centered */}
          <div className="flex items-center justify-center flex-1">
            <div className="bg-white rounded-lg px-6 sm:px-12 py-3 shadow-sm">
              <div className="flex items-center space-x-8 sm:space-x-12">
                {/* Logo inside navbar */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-gray-800">Adymize</span>
                </div>
                
                {/* Navigation Links */}
                <a href="#services" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-200">
                  Services
                </a>
                <a href="#clients" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-200">
                  Clients
                </a>
                <a href="#why-adymize" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-200 whitespace-nowrap">
                  Why Adymize?
                </a>
                <a href="#reviews" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-200">
                  Reviews
                </a>
                <a href="#faqs" className="text-gray-800 hover:text-purple-600 font-medium transition-colors duration-200">
                  FAQs
                </a>
                
                {/* Chat Now Button inside navbar */}
                <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;