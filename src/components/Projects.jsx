import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { HiOutlineLightningBolt } from 'react-icons/hi';

const projects = [
  {
    name: 'Moho',
    description: 'Full-stack gadget e-commerce platform with authentication, product browsing, and a sleek modern interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Kamruzzaman2200/Moho',
    live: 'https://gadgetshop-client.vercel.app',
    emoji: '🛍️',
    gradient: 'from-indigo-500 via-blue-500 to-cyan-400',
  },
  {
    name: 'E-Commerce Client',
    description: 'Feature-rich e-commerce frontend with product filtering, cart functionality, and responsive design.',
    tech: ['React', 'JavaScript', 'Tailwind', 'Vercel'],
    github: 'https://github.com/Kamruzzaman2200/E-comarce-Client',
    live: 'https://e-comarce-client-ebon.vercel.app',
    emoji: '🛒',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-400',
  },
  {
    name: 'Gadget Shop',
    description: 'Interactive gadget shopping app with product categories, detailed views, and polished user experience.',
    tech: ['React', 'JavaScript', 'CSS', 'REST API'],
    github: 'https://github.com/Kamruzzaman2200/Gadget-shop-client',
    live: null,
    emoji: '📱',
    gradient: 'from-emerald-500 via-green-500 to-teal-400',
  },
  {
    name: 'Book Vibe',
    description: 'Book review and reading tracker to manage reading lists and share recommendations with others.',
    tech: ['React', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/Kamruzzaman2200/Book-Vibe',
    live: null,
    emoji: '📚',
    gradient: 'from-amber-500 via-orange-500 to-yellow-400',
  },
  {
    name: 'Social Media Platform',
    description: 'Java-based social media app with user posts, interactions, and community features.',
    tech: ['Java', 'OOP', 'Desktop App'],
    github: 'https://github.com/Kamruzzaman2200/SDP3_Social_Media',
    live: null,
    emoji: '💬',
    gradient: 'from-rose-500 via-pink-500 to-red-400',
  },
  {
    name: 'BUBT Forum',
    description: 'University forum for BUBT students to discuss topics, share resources, and connect with peers.',
    tech: ['Java', 'OOP', 'Database'],
    github: 'https://github.com/Kamruzzaman2200/BUBT-Forum',
    live: null,
    emoji: '🎓',
    gradient: 'from-sky-500 via-blue-500 to-indigo-400',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto"><HiOutlineLightningBolt className="text-xs" /> Portfolio</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider"></div>
          <p className="text-slate-400 mt-5 max-w-lg mx-auto text-sm">
            Projects built to solve real problems, learn technologies, and push creative boundaries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden card-lift">
              {/* Gradient Header */}
              <div className={`h-40 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/0 transition-all duration-500"></div>
                <span className="text-5xl relative z-10 drop-shadow-lg group-hover:scale-125 transition-transform duration-500">{p.emoji}</span>
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/5"></div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                  {p.tech[0]}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-800 mb-2 font-['Space_Grotesk'] group-hover:text-indigo-600 transition-colors">{p.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-semibold border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2.5">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 text-xs font-semibold">
                    <FaGithub size={14} /> Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl btn-primary text-xs font-semibold">
                      <span className="flex items-center gap-2"><FaExternalLinkAlt size={10} /> Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="https://github.com/Kamruzzaman2200?tab=repositories" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border-2 border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50/50 font-semibold text-sm transition-all duration-300">
            <FaGithub /> View All on GitHub <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
