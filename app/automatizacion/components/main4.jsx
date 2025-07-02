'use client';

import Link from 'next/link';

export default function ServiceCardsWhite() {
  return (
    <section className="w-full min-h-screen text-black bg-white flex items-center justify-center px-4 sm:px-8 py-16">
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          Arquitectura de Software con IA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Card 1 - Arquitectura */}
          <Link href="/arquitectura" className="md:col-span-3">
            <div
              className="relative text-white h-[260px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/6e/6d/f2/6e6df20425ea3c6229b9e095782a3432.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-1">Arquitectura Escalable</h3>
                <p className="text-sm mb-2">Diseño de sistemas robustos listos para integrar automatización e IA desde su núcleo.</p>
                <span className="text-xs font-medium underline">Ver más →</span>
              </div>
            </div>
          </Link>

          {/* Card 2 - Autonomía */}
          <Link href="/autonomia" className="md:col-span-3">
            <div
              className="relative text-white h-[260px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('https://i.pinimg.com/originals/0b/51/b9/0b51b94dff9846dbdef9c388f701e14e.gif')" }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-1">Sistemas Autónomos</h3>
                <p className="text-sm mb-2">Plataformas capaces de operar y adaptarse con mínima intervención humana.</p>
                <span className="text-xs font-medium underline">Ver más →</span>
              </div>
            </div>
          </Link>

          {/* Card 3 - Integración */}
          <Link href="/integracion" className="md:col-span-4">
            <div
              className="relative text-white h-[220px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('https://i.pinimg.com/736x/7e/37/fb/7e37fb2cb6470f1c3051b881ab231801.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold mb-1">Integración de Modelos</h3>
                <p className="text-sm mb-2">Conectamos modelos de IA con tus sistemas para decisiones automáticas.</p>
                <span className="text-xs font-medium underline">Ver más →</span>
              </div>
            </div>
          </Link>

          {/* Card 4 - Mensaje Central */}
          <div
            className="relative md:col-span-2 text-white h-[220px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center text-center"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/7c/fa/31/7cfa31a5a4fe61388086bc996fa6273b.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
              <h3 className="text-lg font-bold leading-tight">Automatiza todo con IA</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
