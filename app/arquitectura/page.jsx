'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import Header from './components/header';
import Main1 from './components/main1';
import Main2 from './components/man2';
import Main3 from './components/main3';

// Animación con responsiveness adaptada
function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
      }}
      className={`w-full min-h-[100vh] md:min-h-screen snap-start ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <div
      className="w-full max-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth text-white no-scrollbar"
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollSnapType: 'y mandatory',
      }}
    >
      {/* Header fijo */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur">
        <Header />
      </div>

      {/* Secciones animadas */}
      <AnimatedSection>
        <Main1 />
      </AnimatedSection>
      <AnimatedSection>
        <Main2 />
      </AnimatedSection>
      <AnimatedSection>
        <Main3 />
      </AnimatedSection>
    </div>
  );
}
