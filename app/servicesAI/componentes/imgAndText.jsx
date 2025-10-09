'use client';

import Image from 'next/image';

export default function TextImageSection() {
  const handleRedirect = () => {
    window.open('https://glynne-sst-ai-hsiy.vercel.app/', '_blank');
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white">
      
      {/* Imagen a la izquierda */}
      <div className="flex-1 flex items-center justify-center p-4 order-1 md:order-1">
        <div style={{ width: '50%' }}>
          <Image
            src="/mano.png"
            alt="Código QR GLY-AI"
            width={300}
            height={300}
            className="object-contain w-full h-auto select-none"
            unoptimized
          />
        </div>
      </div>

      {/* Texto a la derecha */}
      <div className="flex-1 flex items-center justify-center text-center md:text-left p-4 order-2 md:order-2">
        <div className="max-w-xl">
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Potencia tu empresa con <span className="text-black font-bold">GLY-AI</span>
          </h2>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
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
      </div>
    </section>
  );
}
