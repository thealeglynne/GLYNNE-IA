'use client';

import Head from 'next/head';

import Header from './components/header';
import PopupIntro from './components/PopupIntro';
import Main1 from './components/main1';
import Presentacion from './components/precentacion';
import AutomationDashboard from './components/dashboard';
import Main4 from './components/main4';
import MainCards from './components/mainCards';
import MainLogos from './components/mainlogos';
import Main5 from './components/main5';
import Main6 from './components/main6';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO Básico */}
        <title>GLYNNE | Inteligencia Artificial y Automatización Empresarial</title>
        <meta
          name="description"
          content="GLYNNE impulsa la autonomía empresarial mediante inteligencia artificial, automatización de procesos, arquitecturas escalables y agentes inteligentes diseñados para crecer con tu empresa."
        />
        <meta
          name="keywords"
          content="GLYNNE, automatización empresarial, inteligencia artificial, arquitectura escalable, integración de APIs, agentes autónomos, orquestación de procesos, LangChain, Supabase, Next.js, RPA, BPA, low-code, no-code, eficiencia operativa"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – IA y Automatización Empresarial" />
        <meta
          property="og:description"
          content="Integra IA y automatización en cada área de tu empresa con arquitecturas modulares, nodos inteligentes y agentes personalizados."
        />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – IA y Automatización Empresarial" />
        <meta
          name="twitter:description"
          content="Transforma tu empresa con IA: orquestación de procesos, agentes inteligentes y automatización escalable."
        />
        <meta name="twitter:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://glynne-ia-6rjd.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PopupIntro>
        <div className="w-full min-h-screen overflow-y-auto scroll-smooth bg-white text-black">
          {/* Header fijo */}
          <div className="sticky top-0 z-50">
            <Header />
          </div>

          <main>
            <section id="hero">
              <Main1 />
            </section>

            <section id="cards">
              <MainCards />
            </section>

            <section id="presentacion">
              <Presentacion />
            </section>

            <section id="logos">
              <MainLogos />
            </section>

            <section id="beneficios">
              <Main4 />
            </section>

            <section id="casos-uso">
              <Main6 />
            </section>

            <section id="dashboard">
              <AutomationDashboard />
            </section>

            <section id="cta">
              <Main5 />
            </section>
          </main>

          <Footer />
        </div>
      </PopupIntro>
    </>
  );
}
