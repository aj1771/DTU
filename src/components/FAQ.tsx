/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Timelines depend on complexity. A premium website redesign usually takes 4-6 weeks, while branding and full digital systems can take 8-12 weeks. We move fast but never compromise on precision."
    },
    {
      q: "What is your pricing structure?",
      a: "We offer value-based pricing tailored to your specific needs. Every project is unique, so we provide custom quotes after a deep discovery phase. We invest heavily in quality, so we don't 'price match' lower-tier agencies."
    },
    {
      q: "Do you handle website maintenance?",
      a: "Yes. We offer long-term partnership plans for performance monitoring, continuous optimization, and technical support to ensure your digital asset stays ahead of the curve."
    },
    {
      q: "What technologies do you specialize in?",
      a: "Our core stack includes Next.js, React, TypeScript, and Tailwind CSS. We use modern, scalable architectures that ensure your platform is fast, secure, and easy to maintain long-term."
    }
  ];

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-premium-blue font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Knowledge
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8" style={{ color: 'var(--text-primary)' }}>
              Frequently <br /> <span style={{ color: 'var(--text-secondary)' }}>Asked.</span>
            </h2>
            <p className="max-w-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Find answers to common questions about our process, pricing, and how we deliver world-class digital solutions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left group cursor-none"
                >
                  <span
                    className={`text-xl font-display font-bold transition-colors ${openIndex === i ? 'text-premium-blue' : 'group-hover:text-premium-violet'}`}
                    style={{ color: openIndex === i ? undefined : 'var(--text-primary)' }}
                  >
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full border transition-all duration-300 ${openIndex === i ? 'bg-premium-blue text-white rotate-45 border-premium-blue' : 'group-hover:border-premium-blue group-hover:text-premium-blue'}`} style={{ borderColor: openIndex === i ? undefined : 'var(--border-color)', color: openIndex === i ? undefined : 'var(--text-secondary)' }}>
                    <Plus size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 leading-relaxed text-sm max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
