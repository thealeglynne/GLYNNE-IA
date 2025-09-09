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

export default function ArquitecturaPage() {
  return (
    <>
      <Head>
        {/* 🔹 Metadatos principales */}
        <title>Arquitectura Inteligente de Software Empresarial | GLYNNE</title>
        <meta
          name="description"
          content="GLYNNE crea arquitecturas inteligentes y escalables con microservicios, nodos autónomos e inteligencia artificial para empresas modernas."
        />
        <meta
          name="keywords"
          content="arquitectura inteligente, inteligencia artificial empresarial, microservicios, orquestación, automatización, nodos inteligentes, agentes autónomos, GLYNNE AI"
        />
        <meta name="author" content="GLYNNE AI Systems" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Arquitectura Inteligente Empresarial | GLYNNE AI Systems"
        />
        <meta
          property="og:description"
          content="Transforma tu empresa con arquitecturas modulares, nodos inteligentes y agentes autónomos. GLYNNE integra IA de forma escalable."
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

        {/* 🔹 Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arquitectura Inteligente para Empresas | GLYNNE"
        />
        <meta
          name="twitter:description"
          content="Arquitecturas IA empresariales con nodos inteligentes y orquestación de procesos para escalar tu negocio."
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
              name: "Arquitectura Inteligente de Software Empresarial",
              description:
                "GLYNNE desarrolla arquitecturas modulares y escalables con inteligencia artificial, microservicios y agentes inteligentes para empresas.",
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
                name: "Arquitectura Inteligente Empresarial",
                provider: {
                  "@type": "Organization",
                  name: "GLYNNE AI Systems",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Global",
                },
                serviceType:
                  "Arquitectura de Software con Inteligencia Artificial y Microservicios",
              },
            }),
          }}
        />
      </Head>

      <div className="w-full text-black bg-white">
        {/* Header fijo */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Secciones */}
        <Main1 />
        <Main2 />
        <GLY />
        <Main4 />
        <Main3 />
        <Main6 />
      </div>
    </>
  );
}
