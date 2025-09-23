import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Footer from '../components/Footer';

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
    <div id="faqs" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h1 className="text-4xl font-bold text-blue-500">Need Help?</h1>
              <div className="text-4xl">👨‍💼</div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="space-y-1">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-100 last:border-b-0">
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
      <Footer />
    </div>
  );
}