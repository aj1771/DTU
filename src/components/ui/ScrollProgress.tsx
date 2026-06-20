/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress h-1"
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'linear-gradient(90deg, var(--color-premium-violet), var(--color-premium-blue))',
        boxShadow:
          '0 0 8px var(--color-premium-blue), 0 0 18px var(--color-premium-violet), 0 0 32px rgba(139, 92, 246, 0.6)',
        willChange: 'transform',
      }}
    />
  );
}