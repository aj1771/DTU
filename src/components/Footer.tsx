/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Web Design',   href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Modernization',href: '#services' },
      { name: 'Branding',     href: '#services' },
      { name: 'Strategy',     href: '#services' },
    ],
    company: [
      { name: 'Studio',   href: '#about' },
      /**{ name: 'Showcase', href: '#work' },*/
      { name: 'Reviews',  href: '#testimonials' },
      { name: 'Contact',  href: '#contact' },
      { name: 'Legal',    href: '#' },
    ],
  };

  return (
    <footer
      className="pt-20 pb-10"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="font-display font-extrabold text-2xl tracking-tighter mb-6 block" style={{ color: 'var(--text-primary)' }}>
              D<span className="text-premium-blue">_</span>T<span className="text-premium-blue">_</span>U
            </a>
            <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              A premium digital studio building modern interfaces and cinematic experiences for companies who lead.
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-premium-violet font-bold">Founder</p>
              <p className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>AJ. Nkosi</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase text-xs tracking-[0.25em] mb-8" style={{ color: 'var(--text-primary)' }}>
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition-colors hover:text-premium-blue" style={{ color: 'var(--text-secondary)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase text-xs tracking-[0.25em] mb-8" style={{ color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition-colors hover:text-premium-blue" style={{ color: 'var(--text-secondary)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>
            © {currentYear} D_T_U Studio. Built for Excellence.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map((t) => (
              <a key={t} href="#" className="text-[10px] uppercase font-mono tracking-widest transition-colors hover:text-premium-blue" style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
/** <div>
            <h4 className="font-display font-bold uppercase text-xs tracking-[0.25em] mb-8" style={{ color: 'var(--text-primary)' }}>
              Newsletter
            </h4>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Stay updated with the latest digital insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="text-sm px-4 py-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-premium-blue transition-all"
                style={{
                  backgroundColor: 'var(--input-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
              <button className="bg-premium-blue text-white p-2 rounded-md hover:bg-premium-blue/80 transition-colors flex-shrink-0">
                →
              </button>
            </div>
          </div> */