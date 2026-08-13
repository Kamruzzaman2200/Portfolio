import React from 'react';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBrain, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const stats = [
  { icon: <FaCode className="text-lg" />, value: '50+', label: 'Repositories', color: 'from-indigo-500 to-blue-500' },
  { icon: <FaLaptopCode className="text-lg" />, value: '6+', label: 'Projects', color: 'from-violet-500 to-purple-500' },
  { icon: <FaGraduationCap className="text-lg" />, value: '9+', label: 'Certificates', color: 'from-pink-500 to-rose-500' },
  { icon: <FaBrain className="text-lg" />, value: '3+', label: 'Focus Areas', color: 'from-amber-500 to-orange-500' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto"><FaBrain className="text-xs" /> About Me</div>
          <h2 className="section-title">Passionate about <span className="gradient-text">Building</span> & <span className="gradient-text">Learning</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                <FaMapMarkerAlt className="text-[10px]" /> Bangladesh
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 text-xs font-semibold border border-violet-100">
                <FaUniversity className="text-[10px]" /> BUBT
              </span>
            </div>

            <p className="text-slate-500 leading-[1.8] text-[0.95rem]">
              I'm <strong className="text-slate-800 font-semibold">MD. Kamruzzaman</strong> — a Computer Science 
              student at <strong className="text-indigo-600 font-semibold">Bangladesh University of Business & Technology</strong>, 
              passionate about crafting modern web applications and exploring the frontiers of artificial intelligence.
            </p>
            
            <p className="text-slate-500 leading-[1.8] text-[0.95rem]">
              I specialize in the <strong className="text-indigo-600 font-semibold">MERN stack</strong> (MongoDB, Express, React, Node.js)
              for building full-stack applications, while also pursuing active research in 
              <strong className="text-violet-600 font-semibold"> Machine Learning & Deep Learning</strong>.
            </p>

            <p className="text-slate-500 leading-[1.8] text-[0.95rem]">
              My mission is to build impactful projects, contribute to open source, and grow into a 
              versatile full-stack / AI engineer who bridges the gap between web technology and intelligent systems.
            </p>

            <div className="flex flex-wrap gap-2 pt-3">
              {['MERN Stack', 'Machine Learning', 'Deep Learning', 'Open Source', 'Problem Solving', 'Web Development'].map(tag => (
                <span key={tag} className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 text-slate-600 text-xs font-medium border border-slate-200/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-card group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-extrabold gradient-text mb-1 font-['Space_Grotesk']">{stat.value}</h4>
                <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
