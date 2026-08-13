import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiVite, SiCplusplus, SiJupyter, SiFirebase,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { HiCode, HiServer, HiChip } from 'react-icons/hi';
import { BiBrain } from 'react-icons/bi';

const categories = [
  {
    title: 'Frontend',
    icon: <HiCode />,
    gradient: 'from-blue-500 to-cyan-400',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: 'group-hover:text-orange-500' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: 'group-hover:text-blue-500' },
      { name: 'JavaScript', icon: <FaJs />, color: 'group-hover:text-yellow-400' },
      { name: 'React', icon: <FaReact />, color: 'group-hover:text-cyan-400' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: 'group-hover:text-teal-400' },
    ],
  },
  {
    title: 'Backend',
    icon: <HiServer />,
    gradient: 'from-emerald-500 to-green-400',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-500/50',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: 'group-hover:text-green-500' },
      { name: 'Express', icon: <SiExpress />, color: 'group-hover:text-slate-300' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'group-hover:text-green-600' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'group-hover:text-yellow-500' },
    ],
  },
  {
    title: 'Languages',
    icon: <FaJs />,
    gradient: 'from-amber-500 to-yellow-400',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:border-amber-500/50',
    skills: [
      { name: 'JavaScript', icon: <FaJs />, color: 'group-hover:text-yellow-400' },
      { name: 'Python', icon: <FaPython />, color: 'group-hover:text-blue-500' },
      { name: 'Java', icon: <FaJava />, color: 'group-hover:text-red-500' },
      { name: 'C#', icon: <TbBrandCSharp />, color: 'group-hover:text-purple-500' },
      { name: 'C++', icon: <SiCplusplus />, color: 'group-hover:text-blue-600' },
    ],
  },
  {
    title: 'Tools',
    icon: <FaGitAlt />,
    gradient: 'from-violet-500 to-purple-400',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-violet-500/50',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: 'group-hover:text-orange-600' },
      { name: 'GitHub', icon: <FaGithub />, color: 'group-hover:text-white' },
      { name: 'Vite', icon: <SiVite />, color: 'group-hover:text-purple-400' },
      { name: 'Jupyter', icon: <SiJupyter />, color: 'group-hover:text-orange-500' },
    ],
  },
  {
    title: 'AI / ML',
    icon: <BiBrain />,
    gradient: 'from-rose-500 to-pink-400',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:border-rose-500/50',
    skills: [
      { name: 'Machine Learning', icon: <BiBrain />, color: 'group-hover:text-rose-400' },
      { name: 'Deep Learning', icon: <HiChip />, color: 'group-hover:text-pink-400' },
      { name: 'Data Mining', icon: <FaDatabase />, color: 'group-hover:text-slate-300' },
      { name: 'Python ML', icon: <FaPython />, color: 'group-hover:text-blue-400' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
            <HiCode className="text-indigo-400" /> Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Space_Grotesk'] tracking-tight">
            Skills & <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`glass-card rounded-[2rem] p-7 transition-all duration-500 ${cat.hoverGlow}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-wide">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-medium cursor-default transition-colors hover:bg-white/10"
                  >
                    <span className={`text-base text-slate-400 transition-colors duration-300 ${skill.color}`}>{skill.icon}</span>
                    <span className="group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
