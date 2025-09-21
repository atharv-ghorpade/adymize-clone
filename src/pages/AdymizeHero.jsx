import React from 'react';

const AdymizeHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
          <div className="text-center relative">
            {/* Main Headline */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
                <span className="block text-blue-600 mb-2">Optimize Your Ads</span>
                <span className="block text-purple-600 relative">
                  For More Profit.
                  {/* Underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-1">
                    <svg viewBox="0 0 300 10" className="w-full h-full">
                      <path
                        d="M5 5 Q150 0 295 5"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                        fill="none"
                        className="opacity-60"
                      />
                    </svg>
                  </div>
                  {/* Small pen icon - hidden on very small screens */}
                  <div className="absolute -bottom-1 -right-4 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 hidden xs:block">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-gray-600" fill="currentColor">
                      <path d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425.362-.15.762-.15t.775.15q.375.15.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763-.138.362-.438.662L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5l-1.4 1.4Z"/>
                    </svg>
                  </div>
                </span>
              </h1>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 text-gray-600 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6">
              <span>5+ years</span>
              <span className="text-gray-400">|</span>
              <span>511+ Brands</span>
              <span className="text-gray-400">|</span>
              <span className="whitespace-nowrap">60+ Crore Ad spent</span>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
              A dedicated team of specialists, delivering remarkable work to our clients worldwide!
            </p>

            {/* CTA Button */}
            <button className="bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </main>

      {/* Partners Section */}
      <section className="py-12 sm:py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 text-base sm:text-lg mb-8 sm:mb-12 font-medium px-2">
            Our Performance Marketing Services are Certified by
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-16">
            {/* Meta Business Partner */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-base sm:text-lg">∞</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">Meta</div>
                  <div className="text-xs sm:text-sm text-gray-600">Business Partner</div>
                </div>
              </div>
            </div>

            {/* Shopify Partners */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-base sm:text-lg">🛍</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">shopify</div>
                  <div className="text-xs sm:text-sm text-gray-600 italic">partners</div>
                </div>
              </div>
            </div>

            {/* Google Partner */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-base sm:text-lg">G</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800">Google</div>
                  <div className="text-xs sm:text-sm text-gray-600">Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdymizeHero;