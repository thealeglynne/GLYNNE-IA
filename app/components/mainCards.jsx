'use client';

import Link from 'next/link';

export default function ServiceCardsWhite() {
  return (
    <section className="w-full min-h-screen text-black px-4 py-20 bg-white">
      {/* Hero con propuesta de valor */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Automatización e Inteligencia que escalan con tu negocio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Diseñamos arquitecturas de software con IA que eliminan tareas
          repetitivas, integran tus sistemas y preparan a tu empresa para crecer
          sin límites.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 max-w-7xl mx-auto">
        {/* Card 1 - Arquitectura */}
        <Link href="/arquitectura" className="md:col-span-3">
          <div
            className="relative text-white h-[350px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/1200x/89/b6/6c/89b66c6afcb8cc04a2a63eb8dd6f0ad7.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">Arquitectura Escalable</h3>
              <p className="text-sm mb-3">
                Creamos la base tecnológica que tu empresa necesita para crecer
                sin límites.
              </p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Card 2 - Automatización */}
        <Link href="/automatizacion" className="md:col-span-3">
          <div
            className="relative text-white h-[350px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/ce/8c/0a/ce8c0add25a68923e53d26379442f58b.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">Automatización Inteligente</h3>
              <p className="text-sm mb-3">
                Elimina tareas repetitivas y gana tiempo para enfocarte en lo que
                importa.
              </p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Card 3 - Integración */}
        <Link href="/integracion" className="md:col-span-2">
          <div
            className="relative text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/bc/dc/03/bcdc0384ce2b49e18553f82b7b03eb2c.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">Integración de Modelos</h3>
              <p className="text-sm mb-3">
                Conectamos la IA con tus sistemas para que todo funcione de forma
                automática y en tiempo real.
              </p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>

        {/* Center block */}
        <div
          className="relative md:col-span-2 text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center text-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/72/da/e2/72dae2a06cc027c2588798d78a9560f4.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
            <h3 className="text-xl font-bold">Automatiza todo con IA</h3>
          </div>
        </div>

        {/* Card 4 - Autonomía */}
        <Link href="/autonomia" className="md:col-span-2">
          <div
            className="relative text-white h-[300px] bg-cover bg-center shadow-md hover:scale-[1.01] transition-all duration-300"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/1200x/18/dc/26/18dc26a2d817f311fd2b4e0f432da6b4.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">Sistemas Autónomos</h3>
              <p className="text-sm mb-3">
                Creamos plataformas capaces de tomar decisiones y adaptarse sin
                necesidad de intervención constante.
              </p>
              <span className="text-sm font-medium underline">Ver más →</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
