import React, { useState, useEffect } from 'react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 text-xl font-bold font-['Space_Grotesk']">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <HiSparkles className="text-white text-sm" />
            </div>
            <span className="gradient-text">Kamruzzaman</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`nav-link px-4 py-2 rounded-lg text-[0.82rem] font-medium tracking-wide transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-indigo-600 bg-indigo-50/60'
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/40'
                }`}>
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-indigo-50 transition-all"
            onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-400 ease-out ${
          isOpen ? 'max-h-[28rem] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="glass-card rounded-2xl p-3 space-y-0.5 shadow-xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-200'
                    : 'text-slate-600 hover:bg-indigo-50'
                }`}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
