import React, { useEffect, useRef } from 'react';
import { Monitor, Smartphone, TrendingUp, Palette, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesLeft = [
  {
    icon: <Monitor />,
    title: 'Web Design & Development',
    desc: "Responsive, user-friendly, visually compelling websites that engage your audience and drive results.",
  },
  {
    icon: <Smartphone />,
    title: 'Mobile App Development',
    desc: "Custom mobile solutions for Android, iOS, and cross-platform development tailored to your business needs.",
  },
  {
    icon: <TrendingUp />,
    title: 'Digital Marketing',
    desc: "SEO, SEM, social media, and paid campaigns designed to maximize your ROI and online presence.",
  },
];

const servicesRight = [
  {
    icon: <Palette />,
    title: 'Branding & Logo Design',
    desc: 'Professional logos, comprehensive brand guides, and striking graphics that create a strong, memorable identity.',
  },
  {
    icon: <Layers />,
    title: 'UI/UX & Graphic Design',
    desc: 'Clean layouts, intuitive interfaces, and compelling visual designs that enhance user experience and appeal.',
  },
];

// Additional service for better layout balance
const additionalService = {
  icon: <Monitor />,
  title: 'Custom Solutions',
  desc: 'Tailored digital solutions designed specifically for your unique business requirements and goals.',
};

export default function ServicesPage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leftServicesRef = useRef(null);
  const rightServicesRef = useRef(null);
  const ctaRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with smooth entrance
      gsap.fromTo(titleRef.current, 
        {
          y: 80,
          opacity: 0,
          scale: 0.7,
          rotationX: 30
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Left services with enhanced smooth animation
      gsap.fromTo(leftServicesRef.current.children,
        {
          x: -120,
          opacity: 0,
          rotation: -10,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftServicesRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Right services with enhanced smooth animation
      gsap.fromTo(rightServicesRef.current.children,
        {
          x: 120,
          opacity: 0,
          rotation: 10,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightServicesRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Icon animations with smooth scaling
      iconRefs.current.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(icon,
            {
              scale: 0,
              rotation: 180,
              opacity: 0
            },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: index * 0.1 + 0.5,
              scrollTrigger: {
                trigger: icon.closest('.service-item'),
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // CTA with smooth bounce animation
      gsap.fromTo(ctaRef.current,
        {
          y: 60,
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

  const addToIconRefs = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} id="services" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-8 sm:py-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">
          <div ref={titleRef} className="text-center mb-12 sm:mb-16 pt-4">
            {/* Special Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-3 rounded-full">
                <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                  SERVICES • SERVICES • SERVICES
                </span>
              </div>
            </div>
            <div className="inline-block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Our Services
              </h1>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-200 opacity-60 blur-3xl transform scale-100"></div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div ref={leftServicesRef} className="space-y-6 sm:space-y-8">
                {servicesLeft.map((s, i) => (
                  <div key={i} className="service-item flex items-start gap-3 sm:gap-4">
                    <div ref={addToIconRefs} className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(s.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-purple-600' })}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div ref={rightServicesRef} className="space-y-6 sm:space-y-8">
                {servicesRight.map((s, i) => (
                  <div key={i} className="service-item flex items-start gap-3 sm:gap-4">
                    <div ref={addToIconRefs} className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(s.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-purple-600' })}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="service-item flex items-start gap-3 sm:gap-4">
                  <div ref={addToIconRefs} className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(additionalService.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-purple-600' })}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{additionalService.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{additionalService.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={ctaRef} className="mt-8 sm:mt-10 flex justify-center px-4">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow text-gray-800 text-sm sm:text-base text-center">
              Want to discuss <a href="#" className="underline font-semibold ml-1 sm:ml-2">Let's Schedule a Call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}