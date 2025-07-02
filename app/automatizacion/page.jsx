'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import Header from './components/header';
import Main1 from './components/main1';
import Main2 from './components/main2';
import Main3 from './components/main3';
import Main4 from './components/main4';
import Main5 from './components/main5';
import GLY from './components/GLY-IA';
import Logos from './components/mainLogos';
import Main6 from '../components/main5'
function AnimatedSection({ children, className = 'min-h-screen' }) {
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
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <div className="w-full text-black bg-white">
      {/* Header fijo */}
      <div className="sticky top-0 z-50">
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
        <GLY />
      </AnimatedSection>
      <AnimatedSection>
        <Logos />
      </AnimatedSection>
      <AnimatedSection>
        <Main4 />
      </AnimatedSection>
      <AnimatedSection>
        <Main3 />
      </AnimatedSection>
      <AnimatedSection>
        <Main5 />
      </AnimatedSection>
      <AnimatedSection>
        <Main6 />
      </AnimatedSection>
    </div>
  );
}
