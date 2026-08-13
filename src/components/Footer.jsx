import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#09090b] text-slate-400 overflow-hidden pt-20 border-t border-white/5 mt-10">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-5 pb-10">
        <div className="grid sm:grid-cols-3 gap-10 items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl font-black text-white font-['Space_Grotesk'] mb-2 tracking-wide">
              Kamruzzaman
            </h3>
            <p className="text-slate-500 text-sm font-medium">Full-Stack Developer & ML Enthusiast</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-6"
          >
            {['Home', 'About', 'Projects', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-slate-500 hover:text-white transition-colors text-sm font-semibold">
                {l}
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center sm:justify-end gap-4"
          >
            {[
              { icon: <FaGithub size={18} />, url: 'https://github.com/Kamruzzaman2200', hoverGlow: 'hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:border-white/40' },
              { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/kamruzzaman-sohel/', hoverGlow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500/50' },
              { icon: <FaFacebook size={18} />, url: 'https://www.facebook.com/kamruzzaman.sohel2200', hoverGlow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500/50' },
            ].map((s, i) => (
              <motion.a 
                key={i} 
                whileHover={{ y: -5 }}
                href={s.url} target="_blank" rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 ${s.hoverGlow}`}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} MD. Kamruzzaman. All rights reserved.</p>
          <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
            Built with <FaHeart className="text-rose-500 animate-pulse drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" size={12} /> & React
          </p>
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.button 
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute top-10 right-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/20 z-50"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </motion.button>
    </footer>
  );
};

export default Footer;
