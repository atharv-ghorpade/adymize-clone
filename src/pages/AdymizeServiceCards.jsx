import React from 'react';

const AdymizeServiceCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        
        {/* Strategic Marketing */}
        <div className="flex items-center gap-16 max-w-6xl mx-auto bg-white rounded-3xl p-8">
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
              <div className="bg-white rounded-2xl p-6 relative z-10 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-32 relative mb-4">
                  <svg className="w-full h-full" viewBox="0 0 200 80">
                    <path d="M20 60 Q50 20 80 40 Q110 20 140 40 Q170 20 180 30" 
                          stroke="#22d3ee" strokeWidth="3" fill="none"/>
                  </svg>
                  <div className="absolute bottom-0 left-0 w-1 h-16 bg-gray-800"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-1 bg-gray-800"></div>
                </div>
                
                {/* Stats */}
                <div className="flex justify-between ">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-bold text-lg">19931</div>
                      <div className="text-xs text-gray-500">Net Orders</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-bold text-lg">$130,153</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-purple-200 px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-sm font-medium text-purple-800">ADS • ADS • ADS</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Strategic Marketing</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Facebook Ads</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Google Ads</button>
            </div>
          </div>
        </div>

  {/* Eye-catchy Designs */}
  <div className="flex items-center gap-16 max-w-6xl mx-auto bg-white rounded-3xl p-8">
          <div className="flex-1">
            <div className="bg-purple-200 px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-sm font-medium text-purple-800">DESIGN • DESIGN • DESIGN</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Eye-catchy Designs</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Social Media</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Ads</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Videos</button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-4"></div>
                  <div className="w-24 h-3 bg-gray-200 rounded mx-auto mb-2"></div>
                  <div className="w-16 h-2 bg-gray-100 rounded mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

  {/* Social Media */}
  <div className="flex items-center gap-16 max-w-6xl mx-auto bg-white rounded-3xl p-8">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 h-48 relative overflow-hidden">
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-pink-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-purple-200 px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-sm font-medium text-purple-800">SOCIAL • SOCIAL • SOCIAL</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Social Media</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Facebook Ads</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Google Ads</button>
            </div>
          </div>
        </div>

  {/* Automation */}
  <div className="flex items-center gap-16 max-w-6xl mx-auto bg-white rounded-3xl p-8">
          <div className="flex-1">
            <div className="bg-purple-200 px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-sm font-medium text-purple-800">AUTOMATE • AUTOMATE • AUTOMATE</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Automation</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Automate the manual task, Save the time and energy, Only focus on delivering quality
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">CRM</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Lead Gen</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Business Flows</button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 h-48 relative">
                <div className="absolute top-4 right-4 bg-gray-200 px-3 py-1 rounded-lg flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-800 rounded"></div>
                  <span className="text-sm font-medium">Lead on Ad</span>
                </div>
                
                <div className="absolute top-16 right-4 left-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-2 flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white rounded"></div>
                    <span className="text-sm font-medium">Add to Sheet</span>
                  </div>
                  <div className="w-1 h-4 bg-gray-800 ml-8"></div>
                </div>
                
                <div className="absolute top-32 right-4 left-4">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white rounded"></div>
                    <span className="text-sm font-medium">Add to CRM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  {/* Web Development */}
  <div className="flex items-center gap-16 max-w-6xl mx-auto bg-white rounded-3xl p-8">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 h-48 relative">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-200 rounded-lg h-16 flex flex-col justify-end p-2">
                    <div className="w-full h-2 bg-blue-600 rounded"></div>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-16 flex flex-col justify-end p-2">
                    <div className="w-full h-2 bg-blue-600 rounded"></div>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-16 flex flex-col justify-end p-2">
                    <div className="w-full h-2 bg-blue-600 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-purple-200 px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-sm font-medium text-purple-800">WEB • WEB • WEB</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Web Development</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Website Development</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Landing Pages</button>
            </div>
          </div>
        </div>

  {/* Robust SEO */}
  <div className="flex items-center gap-16 max-w-6xl mx-auto bg-white rounded-3xl p-8">
          <div className="flex-1">
            <div className="bg-purple-200 px-4 py-2 rounded-full inline-block mb-4">
              <span className="text-sm font-medium text-purple-800">SEO • SEO • SEO</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-500 mb-4">Robust SEO</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Social Media</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Ads</button>
              <button className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-medium">Videos</button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 h-48 relative">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-gray-300 rounded"></div>
                    <div className="flex-1 space-y-1">
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-6 bg-gray-300 rounded"></div>
                    <div className="flex-1 space-y-1">
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-100 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-400 rounded"></div>
                  <span className="text-xs font-medium">YOUR WEBSITE</span>
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