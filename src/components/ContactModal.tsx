import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', role: '', message: '' });
      }, 1800);
    }, 900);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-[520px] rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <div className="px-8 pt-8 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-3xl tracking-tighter">Let's Partner Together</div>
                  <p className="text-slate-600 mt-1">Tell us how we can collaborate on the Indian pet market.</p>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-700 text-2xl">×</button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold tracking-widest text-slate-500 block mb-1.5">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-[13px] rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-400 bg-white"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest text-slate-500 block mb-1.5">WORK EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-[13px] rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-400"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold tracking-widest text-slate-500 block mb-1.5">COMPANY</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-[13px] rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-400"
                    placeholder="Drools / Company name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest text-slate-500 block mb-1.5">YOUR ROLE</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-[13px] rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-400"
                    placeholder="Marketing / Partnerships"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-widest text-slate-500 block mb-1.5">WHAT ARE YOU INTERESTED IN?</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-400 resize-y"
                  placeholder="We would love to explore co-branded campaigns, pet parent activations, or digital partnerships with Petsfolio..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full bg-teal-800 hover:bg-teal-900 disabled:bg-teal-700 transition text-white font-semibold py-[17px] rounded-2xl text-sm tracking-wider flex items-center justify-center gap-2"
              >
                {loading ? 'SENDING PROPOSAL REQUEST...' : 'SEND PARTNERSHIP INQUIRY'}
              </button>

              <div className="text-center text-[10px] text-slate-400 pt-1">
                We typically respond within 24 hours
              </div>
            </form>
          </>
        ) : (
          <div className="px-8 py-16 text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-9 h-9 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <div className="font-semibold text-2xl tracking-tight text-emerald-900">Thank You!</div>
            <p className="mt-2 text-slate-600">Your partnership inquiry has been received.<br />Our team will reach out shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
