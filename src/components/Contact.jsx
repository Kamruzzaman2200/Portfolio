import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { name: 'GitHub', icon: <FaGithub size={20} />, url: 'https://github.com/Kamruzzaman2200', handle: '@Kamruzzaman2200', gradient: 'from-slate-700 to-slate-900' },
  { name: 'LinkedIn', icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/kamruzzaman-sohel/', handle: 'kamruzzaman-sohel', gradient: 'from-blue-500 to-blue-700' },
  { name: 'Facebook', icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/kamruzzaman.sohel2200', handle: 'kamruzzaman.sohel', gradient: 'from-blue-400 to-blue-600' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:kamruzzaman2200@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto"><HiOutlineMail className="text-xs" /> Contact</div>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <div className="section-divider"></div>
          <p className="text-slate-400 mt-5 max-w-lg mx-auto text-sm">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-gradient-to-br from-indigo-50 via-violet-50 to-pink-50 rounded-2xl p-5 border border-indigo-100/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <p className="text-sm text-slate-700 font-semibold">kamruzzaman2200@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm text-slate-700 font-semibold">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Follow Me</p>
              {socials.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-gradient-to-r hover:border-transparent text-slate-600 hover:text-white transition-all duration-300 group"
                  style={{ '--tw-gradient-from': '', '--tw-gradient-to': '' }}
                  onMouseEnter={(e) => e.currentTarget.classList.add(`bg-gradient-to-r`, s.gradient.split(' ').join(''))}
                  onMouseLeave={(e) => e.currentTarget.classList.remove(`bg-gradient-to-r`, s.gradient.split(' ').join(''))}>
                  <span className="text-lg">{s.icon}</span>
                  <div>
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="text-[10px] opacity-60">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject</label>
                <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 outline-none transition-all text-sm resize-none"></textarea>
              </div>
              <button type="submit"
                className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-indigo-200/50">
                <span className="flex items-center justify-center gap-2.5">
                  {sent ? '✓ Opening Email...' : <><FaPaperPlane size={13} /> Send Message</>}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
