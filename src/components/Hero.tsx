/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let rafId: number;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; opacity: number }[] = [];
    const particleCount = 80;

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const isLight = () => document.documentElement.classList.contains('light');

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const light = isLight();
      const dotColor = light ? '80, 80, 220' : '62, 62, 255';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width)  p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${light ? p.opacity * 0.4 : p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${dotColor}, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // TASK 1: Reduced pt from pt-40 md:pt-56 → pt-28 md:pt-40
    // Keeps cinematic breathing room without the excessive gap below the navbar
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start pt-28 md:pt-40 overflow-hidden text-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Ambient Glow Blobs */}
      <div className="glow-blob w-[500px] h-[500px] -top-48 -right-48 bg-premium-violet" />
      <div className="glow-blob w-[400px] h-[400px] -bottom-24 -left-24 bg-premium-blue/50" />

      <div className="relative z-[10] text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-premium-violet/20 bg-premium-violet/5 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-premium-violet animate-pulse" />
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-premium-violet">
            Digital Presence Modernization
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-semibold leading-[0.9] tracking-tight mb-6 uppercase"
          style={{ color: 'var(--text-primary)' }}
        >
          Crafting <span className="italic" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>cinematic</span>{' '}
          <br />digital eminence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We redefine how elite brands move and feel in the digital space through high-fidelity UI design and luxury technical execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#services"
            className="group flex items-center gap-3 bg-premium-blue hover:bg-premium-blue/90 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 shadow-[0_0_40px_rgba(62,62,255,0.4)] hover:shadow-[0_0_60px_rgba(62,62,255,0.6)]"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="px-8 py-4 border rounded-md font-medium transition-all duration-300"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)',
              backgroundColor: 'rgba(128,128,128,0.05)',
            }}
          >
            Creative Showcase
          </a>
        </motion.div>
      </div>
    </section>
  );
}
