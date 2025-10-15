import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/hearfromthem/1.webp';
import img2 from '../assets/hearfromthem/2.webp';
import img3 from '../assets/hearfromthem/3.webp';
import img4 from '../assets/hearfromthem/4.webp';
import img5 from '../assets/hearfromthem/5.webp';
import img6 from '../assets/hearfromthem/6.webp';
import img7 from '../assets/hearfromthem/7.webp';
import img8 from '../assets/hearfromthem/8.webp';
import img9 from '../assets/hearfromthem/9.webp';
import img10 from '../assets/hearfromthem/10.webp';
import img11 from '../assets/hearfromthem/11.webp';
import img12 from '../assets/hearfromthem/12.webp';
import img13 from '../assets/hearfromthem/13.webp';
gsap.registerPlugin(ScrollTrigger);

export default function HearFromThem() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const mediaCardsRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation with more dynamic movement
      gsap.fromTo(headerRef.current.children,
        {
          y: -60,
          opacity: 0,
          scale: 0.7,
          rotationX: 20
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced media cards animation with 3D effects
      const mediaCards = mediaCardsRef.current.children;
      gsap.fromTo(mediaCards,
        {
          y: 150,
          opacity: 0,
          rotationX: 25,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mediaCardsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced company logos animation with wave effect
      const logoElements = logosRef.current.querySelectorAll('.logo-card');
      gsap.fromTo(logoElements,
        {
          y: 50,
          opacity: 0,
          scale: 0.6,
          rotation: 10
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.08,
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

  const logoImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div ref={containerRef} id="hear-from-them" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-8 sm:py-12 lg:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
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
        <div ref={mediaCardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
            {logoImages.map((logo, index) => (
              <div key={index} className="logo-card bg-white rounded-xl p-4 shadow-sm w-24 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
                <img 
                  src={logo} 
                  alt={`Company logo ${index + 1}`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}