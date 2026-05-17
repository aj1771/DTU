/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Loader from './components/ui/Loader';

export default function App() {
  useEffect(() => {
    // Custom cursor hover detection
    const handleMouseEnter = () => document.body.classList.add('cursor-hover');
    const handleMouseLeave = () => document.body.classList.remove('cursor-hover');

    const refreshListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, .group'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial run
    refreshListeners();

    // Use a MutationObserver to watch for dynamic content changes
    const observer = new MutationObserver(refreshListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, .group'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="relative min-h-screen selection:bg-premium-blue/30 overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

