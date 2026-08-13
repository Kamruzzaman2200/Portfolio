import React, { useState } from 'react';
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
    <section id="certificates" className="section-padding mesh-gradient-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto"><FaAward className="text-xs" /> Achievements</div>
          <h2 className="section-title">My <span className="gradient-text">Certificates</span></h2>
          <div className="section-divider"></div>
          <p className="text-slate-400 mt-5 max-w-lg mx-auto text-sm">
            Professional certifications from industry leaders demonstrating continuous learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div key={i} className="cert-card bg-white border border-slate-100 group"
              onClick={() => setSelected(cert)}>
              <div className="relative overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full aspect-[4/3] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium flex items-center gap-1.5">
                    <FaExternalLinkAlt size={10} /> Click to view
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <FaAward className="text-white" size={14} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-800 text-xs leading-snug line-clamp-2">{cert.title}</h4>
                    <p className="text-slate-400 text-[10px] mt-1 font-medium">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setSelected(null)}>
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-slate-500 hover:text-red-500 transition-all hover:scale-110"
              aria-label="Close">
              <FaTimes size={16} />
            </button>
            <img src={selected.image} alt={selected.title} className="w-full h-auto" />
            <div className="p-6 border-t border-slate-100">
              <h3 className="font-bold text-slate-800 text-lg font-['Space_Grotesk']">{selected.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{selected.issuer} • {selected.platform} • {selected.date}</p>
              {selected.verifyUrl && (
                <a href={selected.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl btn-primary text-sm font-semibold">
                  <span className="flex items-center gap-2"><FaExternalLinkAlt size={11} /> Verify</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
