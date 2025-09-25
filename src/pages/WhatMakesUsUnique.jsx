import React, { useEffect, useRef } from 'react';
import { Minus, Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatMakesUsUnique() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const othersColumnRef = useRef(null);
  const advmizeColumnRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
        {
          y: -30,
          opacity: 0,
          scale: 0.9
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

      // Others column animation
      gsap.fromTo(othersColumnRef.current,
        {
          x: -100,
          opacity: 0,
          rotationY: -20
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: othersColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Others list items
      gsap.fromTo(othersColumnRef.current.querySelectorAll('li'),
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: othersColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Advmize column animation
      gsap.fromTo(advmizeColumnRef.current,
        {
          x: 100,
          opacity: 0,
          rotationY: 20
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: advmizeColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Advmize badge
      gsap.fromTo(advmizeColumnRef.current.querySelector('.advmize-badge'),
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: advmizeColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Advmize list items
      gsap.fromTo(advmizeColumnRef.current.querySelectorAll('li'),
        {
          x: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: advmizeColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA animation
      gsap.fromTo(ctaRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
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

  return (
    <div ref={containerRef} id="reviews" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
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
                What makes us unique?
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-500 font-medium">
                Advmize V/S Others
              </p>
            </div>
          </div>
          
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8 items-start">
            {/* Others Column */}
            <div ref={othersColumnRef} className="text-left">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-8 pb-3 border-b-2 border-gray-200">
                OTHERS
              </div>
              <ul className="space-y-6">
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">Longer turnaround time</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">Mediocre methods</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">Lack of timely reporting</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">No prompt answers</span>
                </li>
              </ul>
            </div>
            
            {/* Advmize Column */}
            <div ref={advmizeColumnRef} className="text-left">
              <div className="mb-8">
                <span className="advmize-badge bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  ADVMIZE
                </span>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Faster and quick responses</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Ethical Approach</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Accurate Reporting</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Precise Resolutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div ref={ctaRef} className="text-center">
            <div className="inline-block bg-gray-50 border border-gray-300 rounded-md px-5 py-3 mt-8">
              <span className="text-gray-500 text-sm">
                Still have a question?{' '}
                <a 
                  href="#" 
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Chat with our experts
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}