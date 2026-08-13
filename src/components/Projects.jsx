import React from 'react';
import { motion } from 'framer-motion';
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
    delay: 0.1,
  },
  {
    name: 'E-Commerce Client',
    description: 'Feature-rich e-commerce frontend with product filtering, cart functionality, and responsive design.',
    tech: ['React', 'JavaScript', 'Tailwind', 'Vercel'],
    github: 'https://github.com/Kamruzzaman2200/E-comarce-Client',
    live: 'https://e-comarce-client-ebon.vercel.app',
    emoji: '🛒',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-400',
    delay: 0.2,
  },
  {
    name: 'Gadget Shop',
    description: 'Interactive gadget shopping app with product categories, detailed views, and polished user experience.',
    tech: ['React', 'JavaScript', 'CSS', 'REST API'],
    github: 'https://github.com/Kamruzzaman2200/Gadget-shop-client',
    live: null,
    emoji: '📱',
    gradient: 'from-emerald-500 via-green-500 to-teal-400',
    delay: 0.3,
  },
  {
    name: 'Book Vibe',
    description: 'Book review and reading tracker to manage reading lists and share recommendations with others.',
    tech: ['React', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/Kamruzzaman2200/Book-Vibe',
    live: null,
    emoji: '📚',
    gradient: 'from-amber-500 via-orange-500 to-yellow-400',
    delay: 0.4,
  },
  {
    name: 'Social Media Platform',
    description: 'Java-based social media app with user posts, interactions, and community features.',
    tech: ['Java', 'OOP', 'Desktop App'],
    github: 'https://github.com/Kamruzzaman2200/SDP3_Social_Media',
    live: null,
    emoji: '💬',
    gradient: 'from-rose-500 via-pink-500 to-red-400',
    delay: 0.5,
  },
  {
    name: 'BUBT Forum',
    description: 'University forum for BUBT students to discuss topics, share resources, and connect with peers.',
    tech: ['Java', 'OOP', 'Database'],
    github: 'https://github.com/Kamruzzaman2200/BUBT-Forum',
    live: null,
    emoji: '🎓',
    gradient: 'from-sky-500 via-blue-500 to-indigo-400',
    delay: 0.6,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
            <HiOutlineLightningBolt className="text-indigo-400 text-base" /> Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Space_Grotesk'] tracking-tight">
            Featured <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A selection of projects built to solve real problems, explore modern technologies, and push creative boundaries.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p) => (
            <motion.div 
              key={p.name} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 transition-all duration-500"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50 mix-blend-overlay"></div>
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl relative z-10 drop-shadow-2xl"
                >
                  {p.emoji}
                </motion.span>
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition-all duration-700"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-black/20 blur-2xl group-hover:bg-black/0 transition-all duration-700"></div>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl glass bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-lg">
                  {p.tech[0]}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-indigo-400 transition-colors duration-300">{p.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/5 text-slate-300 rounded-lg text-xs font-semibold border border-white/10 group-hover:border-indigo-500/30 transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 text-xs font-bold tracking-wide">
                    <FaGithub size={16} /> Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl btn-primary text-xs font-bold tracking-wide shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                      <FaExternalLinkAlt size={12} /> Live Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a href="https://github.com/Kamruzzaman2200?tab=repositories" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-card border border-white/10 text-slate-300 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] group"
          >
            <FaGithub size={18} className="group-hover:text-indigo-400 transition-colors" /> 
            View Full Archive on GitHub 
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
