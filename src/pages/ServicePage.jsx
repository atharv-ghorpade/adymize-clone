import React from 'react';
import { BarChart3, Palette, Users, MonitorSpeaker, Search, Zap } from 'lucide-react';

const servicesLeft = [
  {
    icon: <BarChart3 />,
    title: 'Strategic Marketing',
    desc: "Catapult your brand into the spotlight with our genius strategies - it's like magic, but for marketing.",
  },
  {
    icon: <Users />,
    title: 'Social Media Management',
    desc: "Hands-free social success! While you focus on your cat videos, we'll make sure your brand shines across all social platforms.",
  },
  {
    icon: <Search />,
    title: 'Search Engine Optimization (SEO)',
    desc: "Boost your online swagger! We'll spruce up your website so Google has no choice but to be your biggest fan.",
  },
];

const servicesRight = [
  {
    icon: <Palette />,
    title: 'Creative Design',
    desc: 'Picture-perfect branding and graphics - we make your competitors jealous, and your audience adore you.',
  },
  {
    icon: <MonitorSpeaker />,
    title: 'Technical Solutions',
    desc: 'From tech wizardry to seamless online experiences, we turn digital hiccups into high-fives for your users.',
  },
  {
    icon: <Zap />,
    title: 'Automation Services',
    desc: 'Automagically enhance efficiency! Our automation tricks make your processes smoother than a freshly buttered slide.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-block relative">
              {/* NEW Badge */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg transform rotate-12">
                  NEW!
                </div>
              </div>
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Our Services
              </h1>
            </div>
          </div>

          {/* Services layout */}
          <div className="relative">
            {/* central radial glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-200 opacity-60 blur-3xl transform scale-100"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {servicesLeft.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(s.icon, { className: 'w-6 h-6 text-purple-600' })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                {servicesRight.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(s.icon, { className: 'w-6 h-6 text-purple-600' })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow text-gray-800">Want to discuss <a href="#" className="underline font-semibold ml-2">Let's Schedule a Call</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}