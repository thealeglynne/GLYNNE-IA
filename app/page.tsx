'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Head from 'next/head';

import Header from './components/header';
import PopupIntro from './components/PopupIntro';
import Main1 from './components/main1';
import Presentacion from './components/precentacion';
import AutomationDashboard from './components/dashboard';
import Main4 from './components/main4';
import Experiencia from './components/experienncia';
import MainCards from './components/mainCards';
import MainLogos from './components/mainlogos';
import Main5 from './components/main5';
import Main6 from './components/main6';
import Footer from './components/footer';

function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
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
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>GLYNNE – Automatización Empresarial con IA y Arquitectura Escalable</title>
        <meta name="description" content="GLYNNE es una plataforma empresarial que permite integrar inteligencia artificial y automatización avanzada en cada proceso operativo..." />
        <meta name="keywords" content="GLYNNE, automatización empresarial, inteligencia artificial..." />
        <meta name="author" content="GLYNNE Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – IA para Automatizar tu Empresa" />
        <meta property="og:description" content="Orquesta procesos empresariales con IA..." />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/" />
        <meta property="og:site_name" content="GLYNNE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – IA para Automatizar tu Empresa" />
        <meta name="twitter:description" content="Orquestación de procesos empresariales con IA..." />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopupIntro>
        <div className="h-auto w-full overflow-y-auto scroll-smooth bg-white text-black">
          {/* Header fijo */}
          <div className="sticky top-0 z-50">
            <Header />
          </div>

          {/* Secciones animadas */}
          <AnimatedSection>
            <Main1 />
          </AnimatedSection>

          <AnimatedSection>
            <Presentacion />
          </AnimatedSection>

          <AnimatedSection className="min-h-screen">
            <MainCards />
          </AnimatedSection>

          <AnimatedSection>
            <MainLogos />
          </AnimatedSection>

          <AnimatedSection>
            <Main4 />
          </AnimatedSection>

          <AnimatedSection>
            <Experiencia />
          </AnimatedSection>

          <AnimatedSection className="min-h-screen">
            <Main6 />
          </AnimatedSection>

          <AnimatedSection className="min-h-screen bg-white text-black">
            <AutomationDashboard />
          </AnimatedSection>

          <AnimatedSection>
            <Main5 />
          </AnimatedSection>

          <AnimatedSection className="h-[50vh]">
            <Footer />
          </AnimatedSection>
        </div>
      </PopupIntro>
    </>
  );
}
