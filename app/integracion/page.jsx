'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Head from 'next/head';

import Header from './components/header';
import Main1 from './components/main1';

import Main3 from './components/main3';
import GLY from './components/GLY-IA';
import Main4 from './components/main4';
import MainLogos from './components/mainLogos';
import Main6 from '../components/main5';

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
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <>
      <Head>
        <title>GLYNNE | Arquitectura de Automatización con IA</title>
        <meta
          name="description"
          content="Explora cómo GLYNNE construye arquitecturas empresariales que integran inteligencia artificial, microservicios, nodos inteligentes y orquestación de procesos para lograr autonomía operacional."
        />
        <meta
          name="keywords"
          content="GLYNNE, arquitectura de software, inteligencia artificial, automatización empresarial, microservicios, nodos inteligentes, orquestación, LangChain, Supabase, Next.js, IA en empresas"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – Arquitectura Inteligente para Empresas" />
        <meta
          property="og:description"
          content="Arquitectura modular con IA para automatizar procesos empresariales. Construye flujos orquestados con agentes inteligentes y nodos conectados a tus sistemas actuales."
        />
        <meta
          property="og:image"
          content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg"
        />
        <meta
          property="og:url"
          content="https://glynne-ia-6rjd.vercel.app/arquitectura"
        />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – Arquitectura IA Empresarial" />
        <meta
          name="twitter:description"
          content="Diseñamos arquitecturas empresariales con nodos inteligentes, orquestación de procesos y automatización total mediante inteligencia artificial."
        />
        <meta
          name="twitter:image"
          content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg"
        />

        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full overflow-y-auto bg-white text-black">
        {/* Header fijo */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Secciones animadas */}
        <AnimatedSection>
          <Main1 />
        </AnimatedSection>

        <AnimatedSection>
          <Main3 />
        </AnimatedSection>
        <AnimatedSection>
          <GLY />
        </AnimatedSection>
        <AnimatedSection>
          <Main4 />
        </AnimatedSection>
        <AnimatedSection>
          <MainLogos />
        </AnimatedSection>
        <AnimatedSection>
          <Main6 />
        </AnimatedSection>
      </div>
    </>
  );
}
