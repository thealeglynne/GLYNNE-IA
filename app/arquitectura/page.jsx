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
      className={`w-full min-h-[100vh] md:min-h-screen snap-start ${className}`}
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
        <meta
          name="description"
          content="Descubre cómo diseñamos arquitecturas inteligentes para integrar IA en procesos empresariales. Microservicios, orquestación con agentes, nodos dinámicos y escalabilidad total."
        />
        <meta
          name="keywords"
          content="arquitectura de software, inteligencia artificial, GLYNNE, automatización, orquestación, microservicios, integración de APIs, agentes IA, escalabilidad, LangChain, Supabase, Next.js, n8n"
        />
        <meta name="author" content="GLYNNE Tech" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (SEO social) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arquitectura Inteligente – GLYNNE IA Empresarial" />
        <meta property="og:description" content="Explora la arquitectura modular y escalable que hace posible la automatización empresarial con IA avanzada." />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arquitectura Inteligente – GLYNNE" />
        <meta name="twitter:description" content="Orquesta tus sistemas con IA. Arquitecturas robustas, nodos autónomos y procesos empresariales inteligentes." />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/arquitectura" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        <AnimatedSection>
          <Main4 />
        </AnimatedSection>
        <AnimatedSection>
          <Main5 />
        </AnimatedSection>
        <AnimatedSection>
          <Main6 />
        </AnimatedSection>
        <AnimatedSection>
          <Main7 />
        </AnimatedSection>
      </div>
    </>
  );
}
