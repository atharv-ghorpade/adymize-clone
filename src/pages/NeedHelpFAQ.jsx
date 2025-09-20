import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function NeedHelpFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

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

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-12 max-w-4xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h1 className="text-5xl font-bold text-indigo-400">Need Help?</h1>
              <div className="w-16 h-16 flex items-center justify-center">
                <span className="text-5xl">👨‍💼</span>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === faq.id ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 py-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Adymize Logo */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-12">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <span className="text-3xl font-bold text-gray-800">Adymize</span>
            </div>
          </div>
          
          {/* Footer Content */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              © 2025 Adymize Private Limited | 
              <span className="text-blue-500 hover:underline cursor-pointer ml-1">Privacy Policy</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                <span className="text-white font-bold text-sm">📷</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">🐦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}