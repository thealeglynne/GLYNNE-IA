'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  const handleRedirect = () => {
    window.open('https://glynne-sst-ai-hsiy.vercel.app/', '_blank');
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Columna Izquierda - Texto GLY-AI */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
            Potencia tu empresa con <span className="text-black font-bold">GLY-AI</span>
          </h2>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            No se trata solo de automatizar procesos, sino de transformar la manera 
            en que tu negocio crece, aprende y se adapta.  
            GLY-AI analiza, gestiona y optimiza cada área de tu empresa, 
            impulsando decisiones más inteligentes y resultados reales.
          </p>

          {/* Botón con efecto de barrido */}
          <button
            onClick={handleRedirect}
            className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Comienza con GLY-AI</span>
          </button>
        </div>

        {/* Columna Derecha - Imagen intacta */}
        <div className="relative w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] bg-white">
          <Image
            src="/codeAgent.png"
            alt="Arquitectura de Software con Inteligencia Artificial – GLYNNE"
            fill
            className="object-cover object-top rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}
