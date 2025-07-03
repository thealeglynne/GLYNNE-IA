'use client';

import Link from 'next/link';

export default function ServiceCardsWhite() {
  return (
    <section className="w-full min-h-screen text-black px-4 py-20 bg-white">
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 tracking-tight">
        Arquitectura de Software con IA
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 max-w-7xl mx-auto">
        {/* Card 1 - Arquitectura */}
        <Link href="/arquitectura" className="md:col-span-3">
          <div
            className="relative text-white h-[350px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/17/42/9a/17429a0ce1a99f308cafc775e103892a.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">Arquitectura Escalable</h3>
              <p className="text-sm mb-3">Diseño de sistemas robustos listos para integrar automatización e IA desde su núcleo.</p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Card 2 - Automatización */}
        <Link href="/automatizacion" className="md:col-span-3">
          <div
            className="relative text-white h-[350px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/d8/fe/a9/d8fea9019dca5fb238936b8b23bb44f9.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">Automatización Inteligente</h3>
              <p className="text-sm mb-3">Optimizamos procesos empresariales mediante soluciones automatizadas impulsadas por IA.</p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Card 3 - Integración */}
        <Link href="/integracion" className="md:col-span-3">
          <div
            className="relative text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/28/86/b3/2886b300132e53cb084667598d494306.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">Integración de Modelos</h3>
              <p className="text-sm mb-3">Conectamos modelos de IA con tus sistemas para decisiones automáticas en tiempo real.</p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Center block - Texto motivador */}
        <div
          className="relative md:col-span-3 text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center text-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/736x/d2/68/a4/d268a442106ebcecbe822b91278e06d2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
            <h3 className="text-xl font-bold">Automatiza todo con IA</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
