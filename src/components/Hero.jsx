import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import profileImg from '../assets/profile.jpg';
import cvFile from '../assets/CV.pdf';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Immersive Animated Auroras */}
      <div className="absolute top-[10%] right-[20%] w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[35rem] h-[35rem] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Subtle Dark Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-xl"
            >
              <HiOutlineSparkles className="text-base text-indigo-400" />
              Available for hire
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-white font-['Space_Grotesk'] tracking-tight"
            >
              Hi, I'm <br className="hidden lg:block"/>
              <span className="gradient-text drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">Kamruzzaman</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-8 min-h-[2.5rem] font-['JetBrains_Mono']"
            >
              <span className="text-indigo-400 mr-3">{'>'}</span>
              <Typewriter
                words={['Full-Stack Developer', 'MERN Specialist', 'AI/ML Enthusiast']}
                loop cursor cursorStyle="|" cursorBlinking
                typeSpeed={60} deleteSpeed={40} delaySpeed={2500}
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              Computer Science student building modern, high-performance web applications with the MERN stack while exploring the frontiers of AI/ML research.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start mb-14"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cvFile} download
                className="btn-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                <FaDownload size={16} /> Download CV
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-4 rounded-2xl font-bold glass-card border border-white/10 text-white shadow-lg flex items-center gap-3 text-sm transition-colors"
              >
                Let's Talk <FaArrowRight size={14} className="text-indigo-400" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <FaGithub size={20} />, url: 'https://github.com/Kamruzzaman2200', color: 'group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' },
                { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/kamruzzaman-sohel/', color: 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]' },
                { icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/kamruzzaman.sohel2200', color: 'group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]' },
              ].map((s, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={s.url} target="_blank" rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 border border-white/10 hover:border-white/30 transition-colors"
                >
                  <span className={`transition-all duration-300 ${s.color}`}>{s.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - 3D Glass Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 relative perspective-1000"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[350px] sm:w-[350px] sm:h-[420px] rounded-[2rem] glass-card border border-white/20 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[inherit] opacity-50 blur-xl"></div>
              <img src={profileImg} alt="MD. Kamruzzaman" className="w-full h-full object-cover rounded-[1.5rem] relative z-10" />
              
              {/* Floating Glass Badges */}
              <motion.div 
                animate={{ y: [-5, 5, -5], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-16 glass backdrop-blur-2xl rounded-2xl px-5 py-3 border border-white/20 z-20 shadow-xl"
              >
                <span className="text-sm font-bold text-white tracking-wide">💻 MERN Stack</span>
              </motion.div>
              <motion.div 
                animate={{ y: [5, -5, 5], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-6 bottom-20 glass backdrop-blur-2xl rounded-2xl px-5 py-3 border border-white/20 z-20 shadow-xl"
              >
                <span className="text-sm font-bold text-white tracking-wide">🧠 ML / DL</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] text-slate-500 font-bold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center pt-1.5 glass-card">
          <div className="w-1 h-2.5 bg-indigo-400 rounded-full animate-bounce shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
