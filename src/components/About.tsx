/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';

export default function About() {
  const codeSnippet = `// D_T_U Operating Model
const agency = {
  vision: "Digital Purity",
  focus: ["Web Design", "Modernization", "Branding"],
  security: "Zero Trust Architecture",
  performance: "Benchmark Grade",
  deliver: () => "Elite Experiences"
};`;

  const stats = [
    { label: 'Design Precision', value: 'Pixel Perfect' },
    { label: 'Engineering',      value: 'Modern Stack' },
    { label: 'User Focus',       value: 'Intuitive' },
    { label: 'Global Reach',     value: 'Remote-First' },
  ];

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column: code card + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            /* TASK 4: pb-16 gives room below the card for the absolutely-positioned badge.
               overflow-visible so the badge is never clipped by this wrapper. */
            className="relative pb-16"
          >
            {/* Code card — overflow-hidden only on the card itself, not the wrapper */}
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-premium-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <pre className="font-mono text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i}>
                    <span className="mr-4 select-none" style={{ opacity: 0.2, color: 'var(--text-secondary)' }}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    {line.includes('const') && <span className="text-premium-blue">const </span>}
                    {line.includes('agency') && <span style={{ color: 'var(--text-primary)' }}>agency </span>}
                    {line.includes('"') ? (
                      <>
                        {line.split('"')[0]}
                        <span className="text-premium-violet">"{line.split('"')[1]}"</span>
                        {line.split('"')[2]}
                      </>
                    ) : line}
                  </div>
                ))}
              </pre>
            </div>

            {/* TASK 4: Badge outside the overflow-hidden card — no more clipping.
                Positioned at bottom of the padded wrapper area. */}
            <div
              className="absolute bottom-0 right-0 md:-right-8 z-20 shadow-2xl backdrop-blur-xl border border-premium-violet/30 p-5 rounded-xl animate-bounce"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-premium-violet/20 flex items-center justify-center text-premium-violet flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <p className="font-medium text-sm whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                    Innovation First
                  </p>
                  <p className="text-[10px] uppercase tracking-tighter" style={{ color: 'var(--text-secondary)' }}>
                    Leading Tech Standards
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-premium-blue font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block">
                The Studio
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>
                Redefining the{' '}
                <span className="text-premium-blue/80">Interface</span> of Business.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                D_T_U is a modern digital community and innovation studio. We don't just build websites; we craft digital ecosystems that bridge the gap between human intuition and technical excellence.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <p className="font-display font-bold text-2xl mb-1" style={{ color: 'var(--text-primary)' }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
/** <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'TypeScript', 'UI/UX', 'Brand Design', 'Modernization'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-mono uppercase tracking-wider"
                    style={{
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'rgba(128,128,128,0.05)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div> */
            