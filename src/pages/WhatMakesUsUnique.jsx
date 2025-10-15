import React, { useEffect, useRef } from 'react';
import { Minus, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatMakesUsUnique() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const tableRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation with more dynamic movement
      gsap.fromTo(headerRef.current.children,
        {
          y: -50,
          opacity: 0,
          scale: 0.8,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Table header animation
      gsap.fromTo(tableRef.current.querySelector('thead'),
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Table rows animation with stagger
      gsap.fromTo(tableRef.current.querySelectorAll('tbody tr'),
        {
          x: -50,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced CTA animation
      gsap.fromTo(ctaRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.7
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const comparisonData = [
    {
      feature: "Approach to Solutions",
      others: "Generic, one-size-fits-all solutions",
      admark: "Personalized strategies tailored to your business"
    },
    {
      feature: "Service Range",
      others: "Limited service offerings",
      admark: "Comprehensive services under one roof"
    },
    {
      feature: "Reporting & Analytics",
      others: "Unclear reporting & metrics",
      admark: "Transparent metrics & detailed reporting"
    },
    {
      feature: "Partnership Model",
      others: "Short-term project focus",
      admark: "Long-term support & partnership"
    },
    {
      feature: "Track Record",
      others: "Limited track record",
      admark: "Proven results & client testimonials"
    }
  ];

  const handleChatWithExperts = () => {
    // Redirect to WhatsApp with pre-filled message
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = "Hi! I have a question about your services and would like to chat with an expert.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div ref={containerRef} id="why-choose-us" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-8 sm:py-12 lg:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          {/* Header Section */}
          <div ref={headerRef}>
            {/* Special Badge */}
            <div className="text-center mb-6">
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                SPECIAL • SPECIAL • SPECIAL
              </div>
            </div>
            
            {/* Main Title */}
            <div className="text-center mb-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight">
                Why Choose Us?
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-500 font-medium">
                What Makes ADMark Tech Different
              </p>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="mb-6 sm:mb-8 overflow-x-auto">
            <table ref={tableRef} className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="text-left p-4 sm:p-6 font-bold text-gray-700 border-b-2 border-gray-200 w-1/3">
                    Features
                  </th>
                  <th className="text-center p-4 sm:p-6 font-bold text-gray-500 border-b-2 border-gray-200 w-1/3">
                    <div className="flex items-center justify-center">
                      <span className="text-xs sm:text-sm uppercase tracking-wide">Typical Agencies</span>
                    </div>
                  </th>
                  <th className="text-center p-4 sm:p-6 font-bold text-purple-600 border-b-2 border-gray-200 w-1/3">
                    <div className="flex items-center justify-center">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide">
                        ADMark Tech
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="p-4 sm:p-6 font-semibold text-gray-800 border-r border-gray-100">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 text-center border-r border-gray-100">
                      <div className="flex items-center justify-center text-sm sm:text-base">
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-gray-400 font-medium">{row.others}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <div className="flex items-center justify-center text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{row.admark}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Bottom CTA */}
          <div ref={ctaRef} className="text-center">
            <div className="inline-block bg-gray-50 border border-gray-300 rounded-md px-5 py-3 mt-8">
              <span className="text-gray-500 text-sm">
                Still have a question?{' '}
                <button 
                  onClick={handleChatWithExperts}
                  className="text-purple-600 font-semibold hover:underline hover:text-purple-700 transition-colors duration-200 cursor-pointer"
                >
                  Chat with our experts
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}