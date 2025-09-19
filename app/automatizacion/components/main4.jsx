'use client';

import Link from 'next/link';

export default function ServiceCardsWhite() {
  return (
    <section className="w-full min-h-screen text-black bg-white flex items-center justify-center px-4 sm:px-8 py-16">
      <div className="w-full max-w-6xl">
        {/* Encabezado principal con keyword */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          Arquitectura de Software e Inteligencia Artificial para Empresas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Card 1 - Arquitectura */}
          <Link href="/arquitectura" className="md:col-span-3">
            <div
              className="relative text-white h-[260px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/fc/42/32/fc4232fc0d50ba7cf0d683e8cd482c75.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-1">Arquitectura Escalable con IA</h3>
                <p className="text-sm mb-2">
                  Diseñamos sistemas modulares y resilientes preparados para integrar automatización e inteligencia artificial desde su núcleo.
                </p>
                <span className="text-xs font-medium underline">Explorar arquitectura →</span>
              </div>
            </div>
          </Link>

          {/* Card 2 - Autonomía */}
          <Link href="/autonomia" className="md:col-span-3">
            <div
              className="relative text-white h-[260px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('https://i.pinimg.com/1200x/18/dc/26/18dc26a2d817f311fd2b4e0f432da6b4.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-1">Sistemas Autónomos Inteligentes</h3>
                <p className="text-sm mb-2">
                  Creamos plataformas que aprenden, se adaptan y toman decisiones con mínima intervención humana.
                </p>
                <span className="text-xs font-medium underline">Descubrir autonomía →</span>
              </div>
            </div>
          </Link>

          {/* Card 3 - Integración */}
          <Link href="/integracion" className="md:col-span-4">
            <div
              className="relative text-white h-[220px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('https://i.pinimg.com/1200x/77/0a/52/770a52c09426fdfacb58cd15a6a7a3e5.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold mb-1">Integración de Modelos de IA</h3>
                <p className="text-sm mb-2">
                  Conectamos modelos de inteligencia artificial con tus sistemas existentes para decisiones automáticas y escalables.
                </p>
                <span className="text-xs font-medium underline">Ver integración →</span>
              </div>
            </div>
          </Link>

          {/* Card 4 - Mensaje Central */}
          <div
            className="relative md:col-span-2 text-white h-[220px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center text-center"
            style={{ backgroundImage: "url('https://i.pinimg.com/1200x/98/6c/6d/986c6d78ad19430423c00a93aa3a98af.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
              <h3 className="text-lg font-bold leading-tight">
                Automatiza y Escala tu Empresa con IA
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
