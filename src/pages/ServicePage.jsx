import React from 'react';
import { BarChart3, Palette, Users, MonitorSpeaker, Search, Zap, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Strategic Marketing",
      description: "Catapult your brand into the spotlight with our genius strategies - it's like magic, but for marketing."
    },
    {
      icon: <MonitorSpeaker className="w-8 h-8 text-purple-600" />,
      title: "Technical Solutions",
      description: "From tech wizardry to seamless online experiences, we turn digital hiccups into high-fives for your users."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Creative Design", 
      description: "Picture-perfect branding and graphics - we make your competitors jealous, and your audience adore you."
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your online swagger! We'll spruce up your website so Google has no choice but to be your biggest fan."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Social Media Management",
      description: "Hands-free social success! While you focus on your cat videos, we'll make sure your brand shines across all social platforms."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Automation Services", 
      description: "Automagically enhance efficiency! Our automation tricks make your processes smoother than a freshly buttered slide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          {/* Title Section */}
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <span className="absolute -top-6 -right-12 text-purple-500 font-bold text-lg transform rotate-12">
                NEW!
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </h1>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {React.cloneElement(service.icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-700 mb-2">Want to discuss</p>
            <button className="text-gray-800 font-semibold underline hover:text-blue-600 transition-colors">
              Let's Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;