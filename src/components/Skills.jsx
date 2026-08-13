import React from 'react';
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
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    text: 'text-blue-600',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    icon: <HiServer />,
    gradient: 'from-emerald-500 to-green-400',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    text: 'text-emerald-600',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    title: 'Languages',
    icon: <FaJs />,
    gradient: 'from-amber-500 to-yellow-400',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    text: 'text-amber-600',
    skills: [
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C#', icon: <TbBrandCSharp /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FaGitAlt />,
    gradient: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    text: 'text-violet-600',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Jupyter', icon: <SiJupyter /> },
    ],
  },
  {
    title: 'AI / ML',
    icon: <BiBrain />,
    gradient: 'from-rose-500 to-pink-400',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    text: 'text-rose-600',
    skills: [
      { name: 'Machine Learning', icon: <BiBrain /> },
      { name: 'Deep Learning', icon: <HiChip /> },
      { name: 'Data Mining', icon: <FaDatabase /> },
      { name: 'Python ML', icon: <FaPython /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding mesh-gradient-2">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto"><HiCode className="text-xs" /> Tech Stack</div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div key={cat.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-100/80 card-lift">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white text-lg shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-800 font-['Space_Grotesk']">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name}
                    className={`skill-chip flex items-center gap-1.5 px-3 py-2 rounded-xl ${cat.bg} ${cat.text} ${cat.border} border text-xs font-semibold cursor-default`}>
                    <span className="text-sm">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
