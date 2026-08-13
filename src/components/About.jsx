import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBrain, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const stats = [
  { icon: <FaCode className="text-xl" />, value: '50+', label: 'Repositories', color: 'from-indigo-400 to-cyan-400', delay: 0.1 },
  { icon: <FaLaptopCode className="text-xl" />, value: '6+', label: 'Projects', color: 'from-violet-400 to-purple-400', delay: 0.2 },
  { icon: <FaGraduationCap className="text-xl" />, value: '9+', label: 'Certificates', color: 'from-pink-400 to-rose-400', delay: 0.3 },
  { icon: <FaBrain className="text-xl" />, value: '3+', label: 'Focus Areas', color: 'from-amber-400 to-orange-400', delay: 0.4 },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
            <FaBrain className="text-indigo-400" /> About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Space_Grotesk'] tracking-tight">
            Passionate about <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Building</span> & <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Learning</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text — 3 cols */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6 glass-card p-8 sm:p-10 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Ambient glow inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-wrap gap-3 mb-8 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-indigo-300 text-xs font-bold border border-indigo-500/20 shadow-inner backdrop-blur-md">
                <FaMapMarkerAlt className="text-sm" /> Bangladesh
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-purple-300 text-xs font-bold border border-purple-500/20 shadow-inner backdrop-blur-md">
                <FaUniversity className="text-sm" /> BUBT
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg relative z-10">
              I'm <strong className="text-white font-bold">MD. Kamruzzaman</strong> — a Computer Science 
              student at <strong className="text-indigo-400 font-bold">Bangladesh University of Business & Technology</strong>, 
              passionate about crafting modern web applications and exploring the frontiers of artificial intelligence.
            </p>
            
            <p className="text-slate-300 leading-relaxed text-lg relative z-10">
              I specialize in the <strong className="text-purple-400 font-bold">MERN stack</strong> (MongoDB, Express, React, Node.js)
              for building scalable full-stack applications, while concurrently driving active research in 
              <strong className="text-fuchsia-400 font-bold"> Machine Learning & Deep Learning</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg relative z-10">
              My mission is to engineer impactful platforms, contribute to the open-source ecosystem, and evolve into a 
              versatile engineer capable of bridging the gap between elegant web interfaces and intelligent backend systems.
            </p>

            <div className="flex flex-wrap gap-3 pt-6 relative z-10">
              {['MERN Stack', 'Machine Learning', 'Deep Learning', 'Open Source', 'Problem Solving', 'Web Development'].map((tag, i) => (
                <motion.span 
                  key={tag} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-xs font-semibold border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-5 sm:gap-6">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="stat-card group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5 text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 relative z-10`}>
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-black text-white mb-2 font-['Space_Grotesk'] relative z-10 drop-shadow-md">{stat.value}</h4>
                <p className="text-slate-400 text-xs font-bold tracking-wider uppercase relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
