/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Layers,
  Palette,
  RefreshCw,
  Search,
  Zap,
  RotateCcw
} from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Web Design',
    desc: 'Premium, cinematic websites designed to capture attention and convert visitors into loyal advocates.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'UI/UX Design',
    desc: 'Intuitive digital interfaces that prioritize human experience and seamless interaction patterns.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Branding',
    desc: 'Bold digital identities and brand systems engineered for modern luxury and technical authority.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Modernization',
    desc: 'Transforming legacy web platforms into high-performance, future-ready digital experiences.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Digital Presence',
    desc: 'Comprehensive strategies to amplify your online reach through performance SEO and content authority.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance',
    desc: 'Extreme optimization for sub-second load times and flawless execution across all device tiers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
];

function ServiceCard({
  service,
  index,
  isFlipped,
  onToggle,
}: {
  service: typeof services[0];
  index: number;
  isFlipped: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[340px] cursor-pointer group"
      style={{ perspective: '1200px' }}
      onClick={onToggle}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 glass-card rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } as React.CSSProperties}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-45 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105 service-card-img"
            />
            <div className="absolute inset-0 service-img-overlay" />
          </div>

          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-violet/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[5]"
            style={{ boxShadow: 'inset 0 0 40px rgba(139, 92, 246, 0.08)' }}
          />

          <div className="relative z-20 p-10 h-full flex flex-col">
            <div className="text-premium-violet mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
              {service.icon}
            </div>

            <h3
              className="text-xl font-display font-bold mb-auto group-hover:text-premium-blue transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              {service.title}
            </h3>

            <div
              className="mt-auto pt-8 border-t flex items-center gap-2 text-[10px] font-mono text-premium-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest"
              style={{ borderColor: 'var(--border-color)' }}
            >
              Click Card <RotateCcw className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 glass-card rounded-xl overflow-hidden flex flex-col justify-center p-10"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          } as React.CSSProperties}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-premium-violet to-transparent" />

          <div className="text-premium-violet mb-6">{service.icon}</div>

          <h3 className="text-xl font-display font-bold mb-4 text-premium-blue">
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {service.desc}
          </p>

          <div
            className="mt-8 pt-6 border-t text-[10px] font-mono text-premium-violet uppercase tracking-widest"
            style={{ borderColor: 'var(--border-color)' }}
          >
            Click to Flip Back ↩
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="section-padding relative"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-premium-blue font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold" style={{ color: 'var(--text-primary)' }}>
              Services for the <span className="text-premium-violet">Bold.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-left md:text-right"
            style={{ color: 'var(--text-secondary)' }}
          >
            We deploy a multidisciplinary approach to solve complex digital challenges through design excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isFlipped={flippedIndex === i}
              onToggle={() => setFlippedIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
{/* Ready to Start — moved up from removed Work section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          
            <a
            href="#contact"
            className="inline-flex items-center gap-4 font-display font-bold text-xl group"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
          >
            Ready to start your project?
            <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-premium-blue group-hover:text-premium-blue transition-all duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}