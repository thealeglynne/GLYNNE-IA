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
            style={{ backgroundImage: "url('https://i.pinimg.com/originals/ff/73/c2/ff73c2e4fd87b09f16104599744b558a.gif')" }}
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
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/84/d5/80/84d5809ad29ebb0151c59875fde2b350.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">Automatización Inteligente</h3>
              <p className="text-sm mb-3">Optimizamos procesos empresariales mediante soluciones automatizadas impulsadas por IA.</p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Card 3 - Integración */}
        <Link href="/integracion" className="md:col-span-2">
          <div
            className="relative text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/7e/37/fb/7e37fb2cb6470f1c3051b881ab231801.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">Integración de Modelos</h3>
              <p className="text-sm mb-3">Conectamos modelos de IA con tus sistemas para decisiones automáticas en tiempo real.</p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Center block (no redirecciona) */}
        <div
          className="relative md:col-span-2 text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center text-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/736x/d2/68/a4/d268a442106ebcecbe822b91278e06d2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
            <h3 className="text-xl font-bold">Automatiza todo con IA</h3>
          </div>
        </div>

        {/* Card 4 - Autonomía */}
        <Link href="/autonomia" className="md:col-span-2">
          <div
            className="relative text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{ backgroundImage: "url('https://i.pinimg.com/originals/b1/51/cc/b151ccde97115d63665ef5b1362e7c41.gif')" }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">Sistemas Autónomos</h3>
              <p className="text-sm mb-3">Desarrollamos plataformas capaces de operar y adaptarse con mínima intervención humana.</p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
