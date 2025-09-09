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
      className={`w-full min-h-[100vh] md:min-h-screen ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function ArquitecturaPage() {
  return (
    <>
      <Head>
        {/* SEO Core */}
        <title>Arquitectura de Software con Inteligencia Artificial | GLYNNE</title>
        <meta
          name="description"
          content="GLYNNE diseña arquitecturas de software inteligentes, escalables y seguras, integrando inteligencia artificial para optimizar procesos empresariales, automatizar flujos y garantizar la escalabilidad de tu organización."
        />
        <meta
          name="keywords"
          content="arquitectura de software con inteligencia artificial, automatización empresarial, integración de sistemas, escalabilidad, microservicios, IA para empresas, GLYNNE"
        />
        <meta name="author" content="GLYNNE Tech" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arquitectura de Software con Inteligencia Artificial | GLYNNE" />
        <meta
          property="og:description"
          content="Arquitectura modular, escalable y segura con inteligencia artificial para empresas que buscan optimizar procesos, integrar sistemas y lograr autonomía empresarial."
        />
        <meta property="og:image" content="https://www.glynneai.com/meta-architecture.jpg" />
        <meta property="og:url" content="https://www.glynneai.com/arquitectura" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arquitectura de Software con Inteligencia Artificial | GLYNNE" />
        <meta
          name="twitter:description"
          content="Orquesta tus sistemas empresariales con inteligencia artificial y escalabilidad avanzada con GLYNNE."
        />
        <meta name="twitter:image" content="https://www.glynneai.com/meta-architecture.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.glynneai.com/arquitectura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-full max-h-screen overflow-y-auto scroll-smooth text-white no-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur">
          <Header />
        </div>

        {/* Aquí adentro asegúrate de que uno de los componentes (ej. Main1) tenga el <h1> */}
        <Main1 />
        <Main2 />
        <Main6 />
        <Main3 />
        <Main4 />
        <Main5 />
        <Main7 />
      </div>
    </>
  );
}
