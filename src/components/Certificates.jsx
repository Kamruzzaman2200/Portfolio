import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

// Import all certificates from the certificates folder
import cert_hp from '../assets/certificates/1733156118489.png';
import cert_board from '../assets/certificates/1733323978631.jpg';
import cert_ph from '../assets/certificates/1734613936082 (1).jpg';
import cert_meta from '../assets/certificates/1734801925744 (1).jpg';
import cert_hr_react from '../assets/certificates/1734884627694.jpg';
import cert_hr_js from '../assets/certificates/1734885056667.jpg';
import cert_ibm from '../assets/certificates/1735155787536 (1).jpg';
import cert_stanford1 from '../assets/certificates/1761904781016.jpg';
import cert_stanford2 from '../assets/certificates/1762026919703.jpg';

const certificates = [
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford',
    platform: 'Coursera',
    date: 'Oct 2025',
    image: cert_stanford1,
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Supervised ML: Regression & Classification',
    issuer: 'DeepLearning.AI & Stanford',
    platform: 'Coursera',
    date: 'Oct 2025',
    image: cert_stanford2,
    verifyUrl: 'https://coursera.org/verify/MC03UH6QZ0U6',
    color: 'from-red-400 to-pink-500',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    platform: 'Coursera',
    date: 'Dec 2024',
    image: cert_meta,
    verifyUrl: 'https://coursera.org/verify/44W9X5S5CYLX',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Web Development with HTML, CSS, JS',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'Dec 2024',
    image: cert_ibm,
    verifyUrl: 'https://coursera.org/verify/B1KO6FZVH8EA',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'C# for .NET Developers',
    issuer: 'Board Infinity',
    platform: 'Coursera',
    date: 'Dec 2024',
    image: cert_board,
    verifyUrl: 'https://coursera.org/verify/47G1YV6JJL4F',
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    platform: 'Certification',
    date: 'Dec 2024',
    image: cert_hr_react,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    platform: 'Certification',
    date: 'Dec 2024',
    image: cert_hr_js,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Complete Web Development',
    issuer: 'Programming Hero',
    platform: 'Batch 9',
    date: '2024',
    image: cert_ph,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Effective Leadership',
    issuer: 'HP LIFE',
    platform: 'HP Foundation',
    date: 'Aug 2023',
    image: cert_hp,
    color: 'from-sky-500 to-blue-500',
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
            <FaAward className="text-indigo-400 text-base" /> Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Space_Grotesk'] tracking-tight">
            My <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Professional certifications from industry leaders demonstrating continuous learning and dedication to the craft.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-indigo-500/30 transition-all duration-300"
              onClick={() => setSelected(cert)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent opacity-80 z-20"></div>
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <FaExternalLinkAlt size={12} /> View Details
                  </span>
                </div>
              </div>
              
              <div className="p-5 relative z-30 -mt-16">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                    <FaAward className="text-white text-xl" />
                  </div>
                  <div className="min-w-0 pt-1">
                    <h4 className="font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors">{cert.title}</h4>
                    <p className="text-slate-400 text-xs mt-1.5 font-medium flex items-center gap-2">
                      <span className="text-indigo-400">{cert.issuer}</span> 
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span> 
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full glass-card bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-500/80 hover:border-red-500 transition-all hover:scale-110"
                aria-label="Close">
                <FaTimes size={16} />
              </button>
              
              <div className="relative max-h-[70vh] overflow-hidden bg-black/50 flex items-center justify-center p-4">
                <img src={selected.image} alt={selected.title} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
              </div>
              
              <div className="p-6 md:p-8 border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
                <h3 className="font-black text-white text-2xl font-['Space_Grotesk'] mb-2">{selected.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-slate-300 text-sm mb-6">
                  <span className="font-bold text-indigo-400">{selected.issuer}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="font-medium">{selected.platform}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="font-medium text-slate-400">{selected.date}</span>
                </div>
                
                {selected.verifyUrl && (
                  <a href={selected.verifyUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl btn-primary text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    <FaExternalLinkAlt size={14} /> Verify Credential
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
