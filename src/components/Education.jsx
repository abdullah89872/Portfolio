import React from 'react';
import { education } from '../data/portfolioData';

const EducationItem = ({ degree, institution, duration, icon, aosDelay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="relative flex gap-6 group"
  >
    {/* Timeline dot */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[#ff2a2a]/20 border-2 border-[#ff2a2a]/40 flex items-center justify-center text-xl group-hover:bg-[#ff2a2a]/40 group-hover:border-[#ff2a2a] transition-all duration-400 shrink-0">
        {icon}
      </div>
      <div className="w-0.5 h-full bg-gradient-to-b from-[#ff2a2a]/30 to-transparent mt-2" />
    </div>

    {/* Content */}
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 flex-1 hover:border-red-500/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.1)] transition-all duration-500">
      <p className="text-red-400 text-xs font-bold font-mono tracking-widest uppercase mb-2">{duration}</p>
      <h3 className="text-white text-xl font-black tracking-tight mb-1 group-hover:text-[#ff2a2a] transition-colors">{degree}</h3>
      <p className="text-white/60 text-sm font-medium">{institution}</p>
    </div>
  </div>
);

const Education = () => {
  const items = [
    {
      degree: education.degree,
      institution: `${education.institution} · Expected ${education.graduation}`,
      duration: '2023 – 2027',
      icon: '🎓',
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Punjab College, Lahore',
      duration: '2021 – 2023',
      icon: '📚',
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'Punjab Public School, Lahore',
      duration: '2019 – 2021',
      icon: '🏫',
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-red-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            My academic journey in software engineering and computer science.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="flex flex-col">
          {items.map((item, i) => (
            <EducationItem
              key={item.degree}
              {...item}
              aosDelay={String(i * 150)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
