'use client';

import Image from 'next/image';
import './mainlogos.css';

export default function TechShowcaseContainer() {
  const techLogos = [
    { src: '/langchain-text.png', alt: 'LangChain' },
    { src: '/n8n-color.png', alt: 'n8n' },
    { src: '/icons8-next.js-48.png', alt: 'Next.js' },
    { src: '/icons8-nodejs-480.png', alt: 'Node.js' },
    { src: '/icons8-supabase-480.png', alt: 'Supabase' },
    { src: '/icons8-python-480.png', alt: 'Python' },
    { src: '/icons8-chatear-500.png', alt: 'OpenAI' },
    { src: '/vercel.png', alt: 'Vercel' },
    { src: '/icons8-estibador-240.png', alt: 'Docker' },
    { src: '/scikit-learn.png', alt: 'Scikit-learn' },
    { src: '/TensorFlow.png', alt: 'TensorFlow' },
  ];

  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur de fondo */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-8 bg-white/70 backdrop-blur-xl p-6 md:p-10 ring-1 ring-black/10 shadow-xl rounded-3xl">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug tracking-tight">
          Potencia tu arquitectura con lo mejor en tecnología
        </h2>

        <p className="max-w-3xl text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
          Trabajamos con un stack moderno, robusto y validado por la industria. Estas herramientas nos permiten construir soluciones escalables, eficientes y listas para evolucionar con tu negocio.
        </p>

        {/* Carrusel de logos */}
        <div className="w-full overflow-hidden scrollbar-hide">
          <div className="flex space-x-8 min-w-max py-2 px-2 animate-slide-infinite">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-14 relative opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
