'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Head from 'next/head';

import Header from './componentes/header';
import Main1 from './componentes/main1';
import Main2 from './componentes/main2';
import Main3 from './componentes/main3';
import GLY from './componentes/GLY-IA';
import Main4 from './componentes/main4';
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
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <>
      <Head>
        <title>GLYNNE | Arquitectura Inteligente para Empresas</title>
        <meta
          name="description"
          content="Diseñamos arquitecturas escalables que integran inteligencia artificial, microservicios, nodos inteligentes y orquestación de procesos para empresas modernas."
        />
        <meta
          name="keywords"
          content="arquitectura de software, inteligencia artificial, automatización, orquestación, microservicios, IA empresarial, nodos inteligentes, GLYNNE, LangChain, Supabase, Next.js"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – Arquitectura Inteligente para Empresas" />
        <meta
          property="og:description"
          content="Transforma tu empresa con arquitecturas modulares y agentes inteligentes. Integra IA de forma escalable y orquesta procesos de negocio con GLYNNE."
        />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – Arquitectura IA para Empresas" />
        <meta
          name="twitter:description"
          content="Orquesta y automatiza tu negocio con inteligencia artificial. GLYNNE crea arquitectura IA empresarial con nodos inteligentes y agentes autónomos."
        />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />

        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Main4 />
        </AnimatedSection>
        <AnimatedSection>
          <Main3 />
        </AnimatedSection>
        <AnimatedSection>
          <Main6 />
        </AnimatedSection>
      </div>
    </>
  );
}
