import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { name: 'GitHub', icon: <FaGithub size={20} />, url: 'https://github.com/Kamruzzaman2200', handle: '@Kamruzzaman2200', hoverGlow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-white/40 hover:bg-white/10' },
  { name: 'LinkedIn', icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/kamruzzaman-sohel/', handle: 'kamruzzaman-sohel', hoverGlow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/50 hover:bg-blue-500/10' },
  { name: 'Facebook', icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/kamruzzaman.sohel2200', handle: 'kamruzzaman.sohel', hoverGlow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/50 hover:bg-blue-500/10' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:Sohel.eightb@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg backdrop-blur-md">
            <HiOutlineMail className="text-indigo-400 text-base" /> Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Space_Grotesk'] tracking-tight">
            Let's <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a project idea or want to collaborate? I'm currently open for new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-white/20">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">Email</p>
                  <p className="text-sm text-white font-semibold">Sohel.eightb@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-white/20">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">Location</p>
                  <p className="text-sm text-white font-semibold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Follow Me</p>
              {socials.map((s, i) => (
                <motion.a 
                  key={s.name} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  href={s.url} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-[1.5rem] bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 group ${s.hoverGlow}`}
                >
                  <span className="text-xl group-hover:text-white transition-colors">{s.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{s.name}</p>
                    <p className="text-[11px] font-medium opacity-60 group-hover:opacity-100 transition-opacity">{s.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-8 sm:p-10 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 focus:bg-white/5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm text-white placeholder-slate-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 focus:bg-white/5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm text-white placeholder-slate-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
                <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 focus:bg-white/5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm text-white placeholder-slate-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-black/20 focus:bg-white/5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm resize-none text-white placeholder-slate-600"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full px-8 py-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                <span className="flex items-center justify-center gap-3">
                  {sent ? '✓ Message Prep Ready' : <><FaPaperPlane size={14} /> Send Message</>}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
