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
        <title>GLYNNE | Software a la medida y automatización empresarial</title>
        <meta
          name="description"
          content="En GLYNNE ayudamos a empresas a transformar su operación con software a la medida, automatización inteligente e integración de IA en sus sistemas actuales."
        />
        <meta
          name="keywords"
          content="software a la medida, automatización empresarial, inteligencia artificial, integración de sistemas, modernización tecnológica, eficiencia operativa, GLYNNE"
        />
        <meta name="author" content="GLYNNE" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLYNNE – Software y automatización para empresas" />
        <meta
          property="og:description"
          content="Modernizamos la operación de tu empresa con soluciones de software personalizadas, integración de IA y automatización de procesos."
        />
        <meta property="og:image" content="https://glynne-ia-6rjd.vercel.app/meta-banner.jpg" />
        <meta property="og:url" content="https://glynne-ia-6rjd.vercel.app/" />
        <meta property="og:site_name" content="GLYNNE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLYNNE – Software y automatización para empresas" />
        <meta
          name="twitter:description"
          content="Transforma tu negocio con software a la medida, integración de IA y automatización de procesos."
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
            <section id="beneficios">
              <Main4 />
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
