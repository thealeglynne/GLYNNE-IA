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
import GLY from './components/GLY-IA';
import Logos from './components/mainLogos';
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
        <title>GLYNNE | Arquitectura de Inteligencia Artificial Empresarial</title>
        <meta
          name="description"
          content="Construimos arquitecturas escalables que permiten integrar inteligencia artificial en empresas. Desde microservicios hasta agentes inteligentes y orquestación de procesos en tiempo real."
        />
        <meta
          name="keywords"
          content="arquitectura de software, inteligencia artificial, automatización, agentes inteligentes, orquestación, microservicios, nodos IA, integración APIs, GLYNNE, LangChain, Supabase, Next.js, IA empresarial"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para compartir en redes */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – Arquitectura de IA Empresarial" />
        <meta
          property="og:description"
          content="Integra IA de forma estructurada y escalable. Diseñamos sistemas inteligentes que automatizan y orquestan procesos de negocio en tiempo real."
        />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/arquitectura" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – Arquitectura IA Empresarial" />
        <meta
          name="twitter:description"
          content="Orquesta tu empresa con inteligencia artificial. Arquitecturas modulares, nodos inteligentes y escalabilidad nativa."
        />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/arquitectura" />

        {/* Favicon */}
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
    </>
  );
}
