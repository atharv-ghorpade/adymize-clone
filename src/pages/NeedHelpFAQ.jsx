import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NeedHelpFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const faqItemsRef = useRef([]);

  const faqs = [
    {
      id: 1,
      question: "Why should I choose Adymize over other agencies?",
      answer: "Adymize offers faster responses, ethical approaches, accurate reporting, and precise resolutions compared to other agencies. Our unique methodology ensures superior results for your business."
    },
    {
      id: 2,
      question: "What sets Adymize apart from the competition?",
      answer: "Our commitment to timely delivery, transparent communication, innovative strategies, and personalized service makes us stand out in the competitive landscape."
    },
    {
      id: 3,
      question: "How can Adymize guarantee accurate reporting?",
      answer: "We use advanced analytics tools, real-time monitoring systems, and rigorous quality checks to ensure all our reports are accurate, comprehensive, and actionable."
    }
  ];

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

      // FAQ items animation
      faqItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              x: index % 2 === 0 ? -50 : 50,
              opacity: 0,
              rotationY: index % 2 === 0 ? -10 : 10
            },
            {
              x: 0,
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div ref={containerRef} id="faqs" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h1 className="text-4xl font-bold text-blue-500">Need Help?</h1>
              <div className="text-4xl">👨‍💼</div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                ref={el => faqItemsRef.current[index] = el}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <span className="text-base font-medium text-gray-700 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="pb-6 -mt-2">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}