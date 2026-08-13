import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/5 rounded-full blur-[100px]"></div>

      <div className="relative max-w-6xl mx-auto px-5 py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-center">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-1">
              Kamruzzaman
            </h3>
            <p className="text-slate-500 text-xs">Full-Stack Developer & ML Enthusiast</p>
          </div>

          <div className="flex justify-center gap-5">
            {['Home', 'About', 'Projects', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-slate-500 hover:text-indigo-400 transition-colors text-xs font-medium">
                {l}
              </a>
            ))}
          </div>

          <div className="flex justify-center sm:justify-end gap-2.5">
            {[
              { icon: <FaGithub size={16} />, url: 'https://github.com/Kamruzzaman2200', hover: 'hover:bg-indigo-500' },
              { icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/kamruzzaman-sohel/', hover: 'hover:bg-blue-600' },
              { icon: <FaFacebook size={16} />, url: 'https://www.facebook.com/kamruzzaman.sohel2200', hover: 'hover:bg-blue-500' },
            ].map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                className={`w-9 h-9 rounded-xl bg-slate-800/80 ${s.hover} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800/60 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} MD. Kamruzzaman. All rights reserved.</p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <FaHeart className="text-rose-400 animate-pulse" size={10} /> & React
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button onClick={scrollToTop}
        className="absolute -top-5 right-8 w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Back to top">
        <FaArrowUp size={13} />
      </button>
    </footer>
  );
};

export default Footer;
