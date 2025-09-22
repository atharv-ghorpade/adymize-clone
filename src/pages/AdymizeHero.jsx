import React from 'react';

const AdymizeHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
          <div className="text-center relative">
            {/* Main Headline */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
                <span className="block text-slate-800 mb-2">Turn Your Ads Into</span>
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent relative">
                  Profit Machines
                  {/* Underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-1">
                    <svg viewBox="0 0 300 10" className="w-full h-full">
                      <path
                        d="M5 5 Q150 0 295 5"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="none"
                        className="opacity-70"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#0891b2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Sparkle icon for emphasis */}
                  <div className="absolute -top-2 -right-6 sm:-right-10 w-6 h-6 sm:w-8 sm:h-8 hidden sm:block">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400" fill="currentColor">
                      <path d="M12 1L14.5 8.5L22 11L14.5 13.5L12 21L9.5 13.5L2 11L9.5 8.5L12 1Z"/>
                    </svg>
                  </div>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Stop wasting money on ads that don't convert. Our proven strategies have generated 
                <span className="font-bold text-green-600"> ₹60+ Crores in revenue </span> 
                for 500+ brands worldwide.
              </p>
            </div>

            {/* Statistics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg border border-white/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">5+</div>
                  <div className="text-sm sm:text-base text-slate-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-slate-200 pt-6 sm:pt-0">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">500+</div>
                  <div className="text-sm sm:text-base text-slate-600 font-medium">Brands Transformed</div>
                </div>
                <div className="text-center border-t sm:border-t-0 border-slate-200 pt-6 sm:pt-0">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">₹60+ Cr</div>
                  <div className="text-sm sm:text-base text-slate-600 font-medium">Revenue Generated</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-700">4.9/5 Rating</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <button className="group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Book Your Free Strategy Call</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                🔒 No commitment required • 💡 Get actionable insights • ⚡ 30-minute session
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 bg-white/60 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-slate-700 text-lg sm:text-xl mb-2 font-medium">
              Trusted & Certified By Industry Leaders
            </p>
            <p className="text-slate-500 text-sm">
              Our expertise is validated by the world's top platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Meta Business Partner */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Meta</div>
                  <div className="text-sm text-slate-600 font-medium">Business Partner</div>
                  <div className="mt-1 px-2 py-1 bg-blue-50 rounded-full">
                    <span className="text-xs text-blue-600 font-semibold">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopify Partners */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.8 7.5c-.8-2.4-2.1-3.6-3.8-3.6-1.8 0-3.1 1.2-3.8 3.6l1.9 1.9c.4-1.4.9-2.1 1.9-2.1s1.5.7 1.9 2.1l1.9-1.9zm-3.8 8.3c1.4 0 2.5-1.1 2.5-2.5S13.4 11 12 11s-2.5 1.1-2.5 2.5 1.1 2.3 2.5 2.3zm6.5-3.8c0-3.6-2.9-6.5-6.5-6.5S5.5 8.4 5.5 12s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm2.5 0c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">Shopify</div>
                  <div className="text-sm text-slate-600 font-medium italic">Partners</div>
                  <div className="mt-1 px-2 py-1 bg-green-50 rounded-full">
                    <span className="text-xs text-green-600 font-semibold">CERTIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Partner */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">Google</div>
                  <div className="text-sm text-slate-600 font-medium">Partner</div>
                  <div className="mt-1 px-2 py-1 bg-red-50 rounded-full">
                    <span className="text-xs text-red-600 font-semibold">PREMIER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdymizeHero;