/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter text-white">
              D<span className="text-premium-blue">_</span>T<span className="text-premium-blue">_</span>U
            </div>
            
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-premium-blue to-premium-violet"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/30"
            >
              Initializing Excellence
            </motion.p>
          </motion.div>

          <div className="absolute bottom-10 left-10 overflow-hidden">
             <motion.div
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-[10px] font-mono text-white/10 uppercase tracking-widest"
             >
               Loading System Assets...
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
