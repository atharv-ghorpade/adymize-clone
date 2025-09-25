import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HearFromThem() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const mediaCardsRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
        {
          y: -40,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Media cards animation
      const mediaCards = mediaCardsRef.current.children;
      gsap.fromTo(mediaCards,
        {
          y: 100,
          opacity: 0,
          rotationX: 15,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mediaCardsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Company logos animation
      const logoElements = logosRef.current.querySelectorAll('.logo-card');
      gsap.fromTo(logoElements,
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
          rotation: 5
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
            <span>REVIEWS • REVIEWS • REVIEWS</span>
          </div>
          
          {/* Title with Avatar */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-5xl">👨‍💼</div>
            <h2 className="text-4xl font-bold text-blue-500">
              Hear from them
            </h2>
          </div>
        </div>
        
        {/* Media Cards Row */}
        <div ref={mediaCardsRef} className="grid grid-cols-2 gap-8 mb-16">
          {/* Left Card - Video Player */}
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-1">
            <div className="bg-blue-50 rounded-2xl overflow-hidden relative">
              {/* Video Content Area */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                <div className="absolute inset-4 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-blue-600 font-semibold text-lg mb-2">The Builder Service</div>
                    <div className="text-blue-500 text-sm">
                      "It was much effortlessly<br />
                      Done to transform<br />
                      a major event in *location*"
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="p-4 bg-white">
                <div className="flex items-center gap-3">
                  {/* Play Button */}
                  <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  
                  {/* Progress Bar */}
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-blue-500"></div>
                  </div>
                  
                  {/* Time */}
                  <span className="text-xs text-gray-500">0:23</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card - Testimonial Image */}
          <div className="relative">
            <div className="bg-yellow-100 rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center relative">
                {/* Person Image Placeholder */}
                <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-4xl">
                  👨‍💼
                </div>
                
                {/* Quote overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-3">
                  <p className="text-sm text-gray-700 font-medium">
                    "Had the best guidance with right touch ups"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>
        
        {/* Company Logos Grid */}
        <div ref={logosRef} className="bg-gray-50/50 rounded-2xl p-8">
          <div className="grid grid-cols-5 gap-6 items-center justify-items-center">
            {/* Row 1 */}
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">⚡</span>
              </div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-green-600 font-bold text-xs">myntra</div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">☕</span>
              </div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-red-500 font-semibold text-xs text-center">
                <span>Techo</span>
                <div className="text-blue-600 text-xs">+ Geniuses</div>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-xs">LC</span>
              </div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-gray-600 font-bold text-xs text-center">SASTRA</div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-black rounded-lg"></div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-gray-600 font-semibold text-xs">GROWTH</div>
            </div>
            <div className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                Genera+
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}