/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Adrian Vale",
      role: "CEO · OmniStream",
      text: "D_T_U didn't just redesign our site; they redefined how we communicate our value. The new brand system is flawless and the performance is unmatched.",
      initials: "AV"
    },
    {
      name: "Elena Cross",
      role: "Founder · Aether Studio",
      text: "Working with D_T_U was the best decision we made this year. Their technical expertise combined with their design intuition is rare to find in an agency.",
      initials: "EC"
    },
    {
      name: "Damien Cole",
      role: "Director of Ops · Flux",
      text: "The website modernization they performed was surgical. Zero downtime, immediate performance gains, and a visual polish that instantly elevated our brand status.",
      initials: "DC"
    }
  ];

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-premium-blue font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Validation
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-center w-full" style={{ color: 'var(--text-primary)' }}>
              Trusted by the <span className="text-premium-blue">Best.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-10 rounded-2xl relative group transition-all duration-500"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(62,62,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--card-border)')}
            >
              <Quote
                className="absolute top-8 right-8 w-12 h-12 transition-colors group-hover:text-premium-blue/20"
                style={{ color: 'var(--border-color)' }}
              />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-premium-blue text-premium-blue" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-10 italic" style={{ color: 'var(--text-secondary)' }}>
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-premium-blue to-premium-violet flex items-center justify-center text-white font-bold font-display flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>{review.name}</h4>
                  <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
