/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock } from 'lucide-react';
import { useState, type FormEvent } from 'react';

// TASK 5: Formspree integration
// 1. Go to https://formspree.io → create free account → New Form
// 2. Copy your form endpoint (e.g. https://formspree.io/f/xpzgwqab)
// 3. Add to .env:  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
// 4. Redeploy on Vercel — add the same env var in Vercel dashboard → Settings → Environment Variables
// The key is never exposed as a secret (it's a public form ID), but using an env var
// keeps it out of source control and easy to rotate.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      // Fallback when env var not set — shows success for demo purposes
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        const data = await res.json();
        setErrorMessage(data?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const inputStyle = {
    backgroundColor: 'var(--input-bg)',
    borderColor: 'var(--border-color)',
    color: 'var(--text-primary)',
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="section-padding relative"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(62,62,255,0.2), transparent)' }}
      />

      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-premium-blue font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Inquiry
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>
              Let's Start a <span className="text-premium-violet">Conversation.</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Ready to elevate your digital presence? We're taking on new projects this quarter. Reach out today.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-premium-blue/10 border border-premium-blue/20 rounded-xl text-premium-blue flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>Email Us</p>
                <p className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>hello@dtu.studio</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-4 bg-premium-violet/10 border border-premium-violet/20 rounded-xl text-premium-violet flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>Response Time</p>
                <p className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>Within 12 Hours</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>Location</p>
                <p className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>Global · Virtual Studio</p>
              </div>
            </div>

            <div className="mt-10 p-8 rounded-2xl" style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)' }}>
              <p className="text-sm italic" style={{ color: 'var(--text-secondary)' }}>
                "D_T_U moved faster than any agency we've ever worked with. Their process is elite."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: 'var(--border-color)' }} />
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
                  AJ. Nkosi · Founder, Hyperion
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl backdrop-blur-3xl shadow-2xl"
            style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter first name"
                    className="rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-premium-blue transition-all cursor-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter last name"
                    className="rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-premium-blue transition-all cursor-none"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  className="rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-premium-blue transition-all cursor-none"
                  style={inputStyle}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-mono ml-1" style={{ color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-premium-blue transition-all resize-none cursor-none"
                  style={inputStyle}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`mt-4 py-4 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-500 text-white'
                    : status === 'submitting'
                    ? 'bg-premium-blue/60 text-white cursor-wait'
                    : 'bg-premium-blue hover:bg-premium-blue/90 text-white shadow-[0_0_30px_rgba(62,62,255,0.3)]'
                }`}
              >
                {status === 'success'
                  ? 'Message Sent Successfully ✓'
                  : status === 'submitting'
                  ? 'Sending...'
                  : <><span>Send Inquiry</span><Send size={16} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
