'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import Header from './components/header';
import Main1 from './components/main1';

function AnimatedSection({
  children,
  className = 'h-screen',
}) {
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
      className={`snap-start ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <div
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white no-scrollbar"
      style={{ scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch' }}
    >
      {/* Header fijo */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Sección animada */}
      <AnimatedSection>
        <Main1 />
      </AnimatedSection>
    </div>
  );
}
