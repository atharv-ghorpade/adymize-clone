import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import solutionLogo from '../assets/solution.png';
import admarkLogo from '../assets/admarklogo.png';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const philosophyRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
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

      // Solution logo animation
      gsap.fromTo(logoRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Philosophy section animation
      gsap.fromTo(philosophyRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // List items animation
      gsap.fromTo(listItemsRef.current,
        {
          x: -50,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToListRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-8 sm:py-12 lg:py-16 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/15 via-blue-100/15 to-purple-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* About Us Section */}
      <main className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div ref={headerRef} className="text-center relative mb-16">
            {/* Special Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-3 rounded-full">
                <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                  ABOUT • ABOUT • ABOUT
                </span>
              </div>
            </div>
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-2">
                  <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent relative">
                    About Us
                  {/* Underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-1">
                    <svg viewBox="0 0 300 10" className="w-full h-full">
                      <path
                        d="M5 5 Q150 0 295 5"
                        stroke="url(#aboutGradient)"
                        strokeWidth="3"
                        fill="none"
                        className="opacity-70"
                      />
                      <defs>
                        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#0891b2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    </div>
                  </span>
                </h2>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed px-2">
                At ADMark Tech, we are passionate about transforming ideas into compelling digital experiences. 
                With <span className="font-bold text-green-600">4+ years of dedicated experience</span> in delivering high-quality digital solutions, we partner 
                with businesses to elevate their online presence, amplify reach, and achieve measurable outcomes.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="max-w-6xl mx-auto">
            <div ref={philosophyRef} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border border-white/20">
              <div className="flex flex-row gap-8 items-start">
                {/* Left Content */}
                <div className="flex-1 md:flex-[2]">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <img 
                        ref={logoRef}
                        src={solutionLogo} 
                        alt="Philosophy Icon" 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">Our Philosophy</h3>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <div ref={addToListRefs} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg font-bold">We listen first: no one-size-fits-all.</p>
                    </div>
                    
                    <div ref={addToListRefs} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg font-bold">We customize solutions that align with your goals.</p>
                    </div>
                    
                    <div ref={addToListRefs} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg font-bold">We prioritize measurable impact — every campaign, design,<br />or code we deliver is meant to drive growth.</p>
                    </div>
                    
                    <div ref={addToListRefs} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg font-bold">We aim for long-term relationships, not just projects.</p>
                    </div>
                </div>
                
                {/* Right Side - Logo */}
                <div className="flex-1 flex items-start justify-center pt-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-xs">
                    <div className="flex items-center justify-center">
                      <img 
                        src={admarkLogo} 
                        alt="AD Mark Logo" 
                        className="w-36 h-18 object-contain"
                      />
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

export default AboutUs;