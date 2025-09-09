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

export default function ArquitecturaPage() {
  return (
    <>
      <Head>
        {/* 🔹 Metadatos principales */}
        <title>Arquitectura de Inteligencia Artificial Empresarial | GLYNNE</title>
        <meta
          name="description"
          content="GLYNNE diseña arquitecturas de software inteligentes, modulares y escalables que integran inteligencia artificial para transformar la operación empresarial."
        />
        <meta
          name="keywords"
          content="arquitectura de software, inteligencia artificial empresarial, automatización IA, integración de sistemas, escalabilidad, GLYNNE AI"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Arquitectura de IA Empresarial | GLYNNE AI Systems"
        />
        <meta
          property="og:description"
          content="Explora cómo GLYNNE construye arquitecturas empresariales inteligentes, seguras y escalables con inteligencia artificial."
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

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arquitectura de IA Empresarial | GLYNNE"
        />
        <meta
          name="twitter:description"
          content="Integra y orquesta tu empresa con inteligencia artificial modular y escalable."
        />
        <meta
          name="twitter:image"
          content="https://glynne-ia-6rjd.vercel.app/meta-architecture.jpg"
        />

        {/* 🔹 SEO técnico */}
        <link
          rel="canonical"
          href="https://glynne-ia-6rjd.vercel.app/arquitectura"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* 🔹 Schema JSON-LD enriquecido */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Arquitectura de Inteligencia Artificial Empresarial",
              description:
                "GLYNNE construye arquitecturas modulares y escalables para integrar inteligencia artificial en empresas.",
              url: "https://glynne-ia-6rjd.vercel.app/arquitectura",
              publisher: {
                "@type": "Organization",
                name: "GLYNNE AI Systems",
                url: "https://glynne-ia-6rjd.vercel.app",
                logo: "https://glynne-ia-6rjd.vercel.app/logo.png",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: "https://glynne-ia-6rjd.vercel.app/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Arquitectura",
                    item: "https://glynne-ia-6rjd.vercel.app/arquitectura",
                  },
                ],
              },
              mainEntity: {
                "@type": "Service",
                name: "Arquitectura de IA Empresarial",
                provider: {
                  "@type": "Organization",
                  name: "GLYNNE AI Systems",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Global",
                },
                serviceType: "Arquitectura de Software con Inteligencia Artificial",
              },
            }),
          }}
        />
      </Head>

      <div className="w-full text-black bg-white overflow-y-auto scroll-smooth">
        {/* Header fijo */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Secciones */}
        <Main1 />
        <Main2 />
        <GLY />
        <Logos />
        <Main4 />
        <Main3 />
        <Main5 />
        <Main6 />
      </div>
    </>
  );
}
