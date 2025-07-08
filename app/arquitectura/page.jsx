'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Head from 'next/head';

import Header from './components/header';
import Main1 from './components/main1';
import Main2 from './components/main2';
import Main3 from './components/main3';
import Main4 from './components/main4';
import Main5 from './components/main5';
import Main6 from './components/GLY-IA';
import Main7 from '../components/main5';

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
      className={`w-full min-h-[100vh] md:min-h-screen ${className}`} // ← eliminado snap-start
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <>
      <Head>
        <title>Arquitectura Inteligente – GLYNNE IA Empresarial</title>
        <meta name="description" content="Descubre cómo diseñamos arquitecturas inteligentes..." />
        <meta name="keywords" content="arquitectura de software, inteligencia artificial..." />
        <meta name="author" content="GLYNNE Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arquitectura Inteligente – GLYNNE IA Empresarial" />
        <meta property="og:description" content="Explora la arquitectura modular y escalable..." />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <meta property="og:site_name" content="GLYNNE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arquitectura Inteligente – GLYNNE" />
        <meta name="twitter:description" content="Orquesta tus sistemas con IA..." />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-full max-h-screen overflow-y-auto scroll-smooth text-white no-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch',
          // scrollSnapType: 'y mandatory', ← eliminado
        }}
      >
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur">
          <Header />
        </div>

<Main1 />
<Main2 />
<Main5 />
<Main6 />
<Main7 />
      </div>
    </>
  );
}
