import React from 'react';

const AdymizeServiceCards = () => {
  return (
    <div id="clients" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* Strategic Marketing */}
        <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-6 relative z-10 shadow-lg">
                  {/* Analytics header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="font-semibold text-slate-700">Analytics Dashboard</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">94</div>
                  </div>
                  
                  {/* Performance metrics simulation */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-green-600">1</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-purple-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance highlight */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-green-700">YOUR ADS</div>
                      <div className="text-sm text-green-600">Converting at record rates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ADS • ADS • ADS
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                Strategic Marketing
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Facebook Ads
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-green-200 px-5 py-2 rounded-full text-green-700 font-medium hover:bg-green-50 transition-colors duration-200">
                  Google Ads
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Eye-catchy Designs */}
        <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Content (reversed layout) */}
            <div className="space-y-6 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  DESIGN • DESIGN • DESIGN
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Eye-catchy Designs
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-pink-200 px-5 py-2 rounded-full text-pink-700 font-medium hover:bg-pink-50 transition-colors duration-200">
                  Social Media
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-purple-200 px-5 py-2 rounded-full text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200">
                  Ads
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Videos
                </span>
              </div>
            </div>
            
            {/* Right side - Smartphone Mockup (reversed layout) */}
            <div className="relative lg:order-2">
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-full blur-xl"></div>
                
                {/* Modern Smartphone Frame */}
                <div className="bg-slate-800 rounded-[2rem] p-2 mx-auto w-56 shadow-2xl relative z-10">
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-full z-20"></div>
                  
                  {/* Phone screen */}
                  <div className="bg-white rounded-[1.5rem] h-64 p-4 relative overflow-hidden">
                    {/* Product showcase - Bracelet ad */}
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-2">Natural Amethyst</div>
                      <h3 className="font-bold text-base mb-3 text-slate-800">BRACELET</h3>
                      
                      {/* Product image placeholder */}
                      <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
                        <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                      </div>
                      
                      {/* Rating stars */}
                      <div className="flex justify-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      
                      {/* Price */}
                      <div className="bg-slate-100 rounded-full py-1 px-3 mb-3">
                        <span className="text-lg font-bold text-slate-800">₹599/-</span>
                      </div>
                      
                      {/* Discount badge */}
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                        10% OFF...
                      </div>
                      
                      {/* Buy button */}
                      <button className="bg-slate-800 text-white w-full py-2 rounded-xl font-semibold text-sm">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Social Media Dashboard Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-6 relative z-10 shadow-lg">
                  {/* SEO-style header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-700">Social Dashboard</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">85</div>
                  </div>
                  
                  {/* Social platform performance simulation */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-blue-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-purple-600">2</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-purple-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social performance highlight */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-blue-700">YOUR BRAND</div>
                      <div className="text-sm text-blue-600">Trending across all platforms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SOCIAL • SOCIAL • SOCIAL
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Social Media
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Facebook Ads
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-purple-200 px-5 py-2 rounded-full text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200">
                  Instagram Marketing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Automation */}
        <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Content (reversed layout) */}
            <div className="space-y-6 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-blue-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  AUTOMATE • AUTOMATE • AUTOMATE
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Automation
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Automate the manual task, Save the time and energy, Only focus on delivering quality
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-cyan-200 px-5 py-2 rounded-full text-cyan-700 font-medium hover:bg-cyan-50 transition-colors duration-200">
                  CRM
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Lead Gen
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-purple-200 px-5 py-2 rounded-full text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200">
                  Business Flows
                </span>
              </div>
            </div>
            
            {/* Right side - Automation Flow Mockup (reversed layout) */}
            <div className="relative lg:order-2">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-200/50 to-blue-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-6 relative z-10 shadow-lg">
                  {/* Automation header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-700">Automation Flow</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-600">98</div>
                  </div>
                  
                  {/* Automation steps simulation */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-green-600">1</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-green-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-blue-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Automation success highlight */}
                  <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-cyan-700">AUTOMATION ACTIVE</div>
                      <div className="text-sm text-cyan-600">Saving 40+ hours weekly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Website Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-200/50 to-blue-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-6 relative z-10 shadow-lg">
                  {/* Web development header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-700">Web Performance</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">96</div>
                  </div>
                  
                  {/* Website metrics simulation */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-emerald-600">1</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-emerald-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-blue-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Website performance highlight */}
                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-700">WEBSITE OPTIMIZED</div>
                      <div className="text-sm text-emerald-600">Lightning fast & responsive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  WEB • WEB • WEB
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Web Development
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-emerald-200 px-5 py-2 rounded-full text-emerald-700 font-medium hover:bg-emerald-50 transition-colors duration-200">
                  Website Development
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Landing Pages
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Robust SEO */}
        <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Content (reversed layout) */}
            <div className="space-y-6 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  SEO • SEO • SEO
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Robust SEO
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-green-200 px-5 py-2 rounded-full text-green-700 font-medium hover:bg-green-50 transition-colors duration-200">
                  Keyword Research
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-emerald-200 px-5 py-2 rounded-full text-emerald-700 font-medium hover:bg-emerald-50 transition-colors duration-200">
                  Content Optimization
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-teal-200 px-5 py-2 rounded-full text-teal-700 font-medium hover:bg-teal-50 transition-colors duration-200">
                  Link Building
                </span>
              </div>
            </div>
            
            {/* Right side - SEO Dashboard Mockup (reversed layout) */}
            <div className="relative lg:order-2">
              <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-6 relative z-10 shadow-lg">
                  {/* SEO metrics header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-700">SEO Dashboard</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">92</div>
                  </div>
                  
                  {/* Search results simulation */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-green-600">1</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-blue-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center mt-1">
                        <span className="text-xs font-bold text-yellow-600">2</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-3 bg-purple-500 rounded"></div>
                        <div className="w-4/5 h-2 bg-slate-200 rounded"></div>
                        <div className="w-3/5 h-2 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Website ranking highlight */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-green-700">YOUR WEBSITE</div>
                      <div className="text-sm text-green-600">Ranking #1 for target keywords</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdymizeServiceCards;