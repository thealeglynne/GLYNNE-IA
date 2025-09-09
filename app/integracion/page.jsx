'use client';

import Head from 'next/head';
import Header from './components/header';
import Main1 from './components/main1';
import Main2 from './components/main2';
import Main3 from './components/main3';
import GLY from './components/GLY-IA';
import Main4 from './components/main4';
import MainLogos from './components/mainLogos';
import Main6 from '../components/main5';

export default function AutomatizacionPage() {
  return (
    <>
      <Head>
        {/* SEO Básico */}
        <title>GLYNNE | Arquitectura de Automatización Empresarial con IA</title>
        <meta
          name="description"
          content="GLYNNE construye arquitecturas empresariales inteligentes que integran IA, microservicios y orquestación para lograr autonomía operacional y eficiencia escalable."
        />
        <meta
          name="keywords"
          content="automatización empresarial, inteligencia artificial, arquitectura de software, nodos inteligentes, microservicios, orquestación de procesos, GLYNNE, IA empresarial, LangChain, Supabase, Next.js"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – Arquitectura de Automatización con IA" />
        <meta
          property="og:description"
          content="Automatiza procesos empresariales con arquitecturas inteligentes, agentes autónomos y nodos interconectados. Descubre cómo GLYNNE transforma la autonomía operativa."
        />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/automatizacion" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – Automatización Empresarial con IA" />
        <meta
          name="twitter:description"
          content="Arquitecturas modulares y escalables que permiten a tu empresa orquestar y automatizar procesos con inteligencia artificial."
        />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/automatizacion" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full bg-white text-black">
        {/* Header fijo */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Secciones */}
        <main>
          <section id="intro">
            <Main1 />
          </section>

          <section id="beneficios">
            <Main2 />
          </section>

          <section id="automatizacion">
            <Main3 />
          </section>

          <section id="gly-ai">
            <GLY />
          </section>

          <section id="procesos">
            <Main4 />
          </section>

          <section id="logos">
            <MainLogos />
          </section>

          <section id="conclusion">
            <Main6 />
          </section>
        </main>
      </div>
    </>
  );
}
