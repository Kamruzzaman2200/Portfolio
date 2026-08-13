import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg';
import cvFile from '../assets/CV.pdf';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-1">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-indigo-400/10 rounded-full blur-[80px] animate-float"></div>
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-purple-400/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/5 rounded-full blur-[120px]"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-6">
              <HiOutlineSparkles className="text-base" />
              Available for hire
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-5 text-slate-900 font-['Space_Grotesk']">
              Hi, I'm{' '}
              <span className="gradient-text">Kamruzzaman</span>
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-600 mb-6 min-h-[2rem] font-['JetBrains_Mono'] tracking-tight">
              <span className="text-indigo-400">{'> '}</span>
              <Typewriter
                words={['Full-Stack Developer', 'MERN Stack Specialist', 'ML & DL Researcher', 'Open Source Contributor']}
                loop cursor cursorStyle="_" cursorBlinking
                typeSpeed={60} deleteSpeed={40} delaySpeed={2000}
              />
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Computer Science student from Bangladesh building modern web apps
              with the MERN stack & exploring AI/ML research.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href={cvFile} download
                className="btn-primary px-7 py-3.5 rounded-2xl font-semibold flex items-center gap-2.5 text-sm shadow-lg shadow-indigo-200/50">
                <span className="flex items-center gap-2.5"><FaDownload size={14} /> Download CV</span>
              </a>
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-7 py-3.5 rounded-2xl font-semibold border-2 border-slate-200 text-slate-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300 flex items-center gap-2.5 text-sm">
                Let's Talk <FaArrowRight size={12} />
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { icon: <FaGithub size={18} />, url: 'https://github.com/Kamruzzaman2200', hover: 'hover:bg-slate-800 hover:border-slate-800' },
                { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/kamruzzaman-sohel/', hover: 'hover:bg-blue-600 hover:border-blue-600' },
                { icon: <FaFacebook size={18} />, url: 'https://www.facebook.com/kamruzzaman.sohel2200', hover: 'hover:bg-blue-500 hover:border-blue-500' },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl border-2 border-slate-200 flex items-center justify-center text-slate-500 ${s.hover} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-right">
            <div className="profile-blob">
              <div className="blob-bg"></div>
              <img src={profileImg} alt="MD. Kamruzzaman" />
              {/* Floating badges */}
              <div className="absolute -right-4 top-12 bg-white rounded-2xl px-4 py-2.5 shadow-xl shadow-indigo-100/50 border border-slate-100 animate-float z-10" style={{ animationDelay: '1s' }}>
                <span className="text-xs font-bold text-slate-700">💻 MERN Stack</span>
              </div>
              <div className="absolute -left-4 bottom-16 bg-white rounded-2xl px-4 py-2.5 shadow-xl shadow-purple-100/50 border border-slate-100 animate-float z-10" style={{ animationDelay: '2s' }}>
                <span className="text-xs font-bold text-slate-700">🧠 ML / DL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] text-slate-400 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-indigo-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
