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

  

export default function Home() {
  return (
    <>
      <Head>
        <title>GLYNNE – Automatización Empresarial con IA y Arquitectura Escalable</title>
        <meta name="description" content="GLYNNE es una plataforma empresarial que permite integrar inteligencia artificial y automatización avanzada en cada proceso operativo." />
        <meta name="keywords" content="GLYNNE, automatización empresarial, inteligencia artificial, RPA, BPA, integración, agentes IA, LangChain, Next.js, arquitectura escalable, orquestación, low-code, no-code, procesos empresariales, eficiencia operativa, Supabase, n8n" />
        <meta name="author" content="GLYNNE Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – IA para Automatizar tu Empresa" />
        <meta property="og:description" content="Orquesta procesos empresariales con IA: arquitecturas inteligentes, integración de APIs, agentes personalizados y diagnósticos inteligentes." />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/" />
        <meta property="og:site_name" content="GLYNNE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – IA para Automatizar tu Empresa" />
        <meta name="twitter:description" content="Orquestación de procesos empresariales con inteligencia artificial y automatización avanzada." />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopupIntro>
        <div className="w-full min-h-screen overflow-y-auto scroll-smooth bg-white text-black">
          {/* Header fijo */}
          <div className="sticky top-0 z-50">
            <Header />
          </div>

            <Main1 />



            <Presentacion />



            <MainCards />



            <MainLogos />



            <Main4 />



            <Experiencia />



            <Main6 />



            <AutomationDashboard />


            <Main5 />



            <Footer />

        </div>
      </PopupIntro>
    </>
  );
}
