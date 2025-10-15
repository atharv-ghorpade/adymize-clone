import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Smartphone, TrendingUp, Palette, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Monitor />,
    title: 'Web Design & Development',
    desc: "Responsive, user-friendly websites that engage your audience and drive results.",
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    mockupImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    glowColor: 'shadow-purple-500/25',
    link: '/services/web-design-development'
  },
  {
    icon: <Smartphone />,
    title: 'Mobile App Development',
    desc: "Custom mobile solutions for Android, iOS, and cross-platform development.",
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    mockupImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
    glowColor: 'shadow-blue-500/25',
    link: '/services/mobile-app-development'
  },
  {
    icon: <TrendingUp />,
    title: 'Digital Marketing',
    desc: "SEO, SEM, social media, and paid campaigns designed to maximize your ROI.",
    gradient: 'from-green-500 via-emerald-500 to-cyan-500',
    mockupImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    glowColor: 'shadow-green-500/25',
    link: '/services/digital-marketing'
  },
  {
    icon: <Palette />,
    title: 'Branding & Design',
    desc: 'Professional logos, brand guides, and compelling visual designs that create memorable identity.',
    gradient: 'from-orange-500 via-pink-500 to-purple-500',
    mockupImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center',
    glowColor: 'shadow-orange-500/25',
    link: '/services/branding-design'
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // New refs for enhanced animations
  const section1Ref = useRef(null);
  const gif1Ref = useRef(null);
  const content1Ref = useRef(null);
  const section2Ref = useRef(null);
  const gif2Ref = useRef(null);
  const content2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        {
          y: 80,
          opacity: 0,
          scale: 0.7,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation
      gsap.fromTo(cardsRef.current.children,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 20
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 1 animations
      gsap.fromTo(gif1Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content1Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 2 animations
      gsap.fromTo(gif2Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content2Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA animation
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

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  };

  const handleScheduleCall = () => {
    // Direct phone dial
    const phoneNumber = "+1234567890"; // Replace with actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div ref={containerRef} id="services" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-8 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Services Cards - Horizontal Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 lg:hidden"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 lg:hidden"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div ref={cardsRef} className="flex gap-6 sm:gap-8 px-4 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:px-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative w-80 lg:w-auto flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                  onClick={() => navigate(service.link)}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${service.glowColor}`}></div>
                  
                  <div className="relative bg-white rounded-3xl p-6 sm:p-8 h-full flex flex-col">
                    {/* Mockup Image */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <img 
                        src={service.mockupImage} 
                        alt={service.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      {React.cloneElement(service.icon, { className: 'w-7 h-7 text-white' })}
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      
                      {/* Learn More Button */}
                      <div className="flex items-center text-purple-600 group-hover:text-pink-600 transition-colors duration-300">
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Scroll Indicators */}
          <div className="lg:hidden flex justify-center mt-6">
            <div className="flex space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollContainerRef.current.scrollTo({
                      left: index * 320,
                      behavior: 'smooth'
                    });
                  }}
                  className="w-3 h-3 rounded-full bg-purple-200 hover:bg-purple-400 transition-colors duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        <div ref={ctaRef} className="mt-12 sm:mt-16 flex justify-center px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg border border-white/20 text-gray-800 text-sm sm:text-base text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            Want to discuss your project? 
            <button 
              onClick={handleScheduleCall}
              className="underline font-semibold ml-2 text-purple-600 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
            >
              Let's Schedule a Call
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}