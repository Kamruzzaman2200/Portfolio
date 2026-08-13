import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-[100] transition-all duration-500 mx-auto w-[95%] max-w-5xl rounded-[2rem] ${
      scrolled 
        ? 'glass border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3 px-6' 
        : 'bg-transparent py-4 px-6 border border-transparent'
    }`}>
      <div className="flex items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, '#home')}
          className="flex items-center gap-3 text-xl font-black font-['Space_Grotesk'] group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform duration-300">
            <HiSparkles className="text-white text-lg" />
          </div>
          <span className="text-white tracking-wide group-hover:text-indigo-300 transition-colors">Kamruzzaman</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-colors text-slate-300 hover:text-white group">
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl shadow-inner mix-blend-screen"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        <button className="md:hidden p-2.5 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/20"
          onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden origin-top"
          >
            <div className="glass-card mt-4 rounded-2xl p-4 space-y-2 shadow-2xl border border-white/10">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block py-3.5 px-5 rounded-xl text-sm font-bold transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-inner'
                      : 'text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
