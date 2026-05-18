/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Read from localStorage on first render; default to dark
    try {
      const saved = localStorage.getItem('dtu-theme');
      return saved !== 'light';
    } catch {
      return true;
    }
  });

  const { scrollY } = useScroll();

  // Apply theme class to <html> and persist to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('dtu-theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('dtu-theme', 'light');
    }
  }, [isDark]);

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    isDark
      ? ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.85)']
      : ['rgba(245,245,247,0)', 'rgba(245,245,247,0.90)']
  );

  const navBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(20px)']);

  const navBorderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    /**{ name: 'Our Work', href: '#work' },*/
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const linkColor = isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  const logoTextColor = isDark ? 'text-white' : 'text-gray-900';
  const toggleBorder = isDark ? 'border-white/10 text-white/50 hover:text-white hover:border-white/30' : 'border-black/10 text-black/40 hover:text-black hover:border-black/30';

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: navBackground,
          backdropFilter: navBlur,
        }}
        className={`fixed top-0 left-0 right-0 z-[500] px-6 md:px-12 transition-all duration-300 ${
          scrolled ? 'py-3 md:py-4' : 'py-4 md:py-6'
        }`}
      >
        {/* Bottom border that fades in on scroll */}
        <motion.div
          style={{ opacity: navBorderOpacity }}
          className={`absolute bottom-0 left-0 right-0 h-[1px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-transform group-hover:rotate-90 duration-500 ${isDark ? 'bg-white' : 'bg-gray-900'}`}>
              <div className={`w-4 h-4 rotate-45 ${isDark ? 'bg-black' : 'bg-white'}`}></div>
            </div>
            <span className={`text-lg font-semibold tracking-tighter ${logoTextColor}`}>D_T_U</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium tracking-wide transition-colors ${linkColor}`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 glass-card rounded-full text-xs font-medium tracking-wide transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-black/5'}`}
            >
              LET'S TALK
            </a>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border transition-all cursor-none ${toggleBorder}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open:   { opacity: 1, visibility: 'visible' as const },
          closed: { opacity: 0, visibility: 'hidden' as const }
        }}
        className={`fixed inset-0 z-[450] backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden ${isDark ? 'bg-black/95' : 'bg-white/95'}`}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
            transition={{ delay: i * 0.1 }}
            className={`font-display font-bold text-4xl transition-colors hover:text-premium-blue ${isDark ? 'text-white/60' : 'text-gray-900/60'}`}
          >
            {link.name}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          onClick={() => setIsOpen(false)}
          variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
          transition={{ delay: navLinks.length * 0.1 }}
          className="mt-4 px-10 py-4 bg-premium-blue text-white rounded-full font-bold uppercase tracking-widest"
        >
          Get in Touch
        </motion.a>

        {/* Theme toggle in mobile menu */}
        <motion.button
          onClick={() => setIsDark(!isDark)}
          variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
          transition={{ delay: (navLinks.length + 1) * 0.1 }}
          className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${isDark ? 'border-white/10 text-white/40 hover:text-white' : 'border-black/10 text-black/40 hover:text-black'}`}
        >
          {isDark ? <><Sun size={14} /> Light Mode</> : <><Moon size={14} /> Dark Mode</>}
        </motion.button>
      </motion.div>
    </>
  );
}
