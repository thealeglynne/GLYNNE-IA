'use client';

import Image from 'next/image';
import '../../components/mainlogos.css';

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
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur de fondo */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[3.7px] z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center space-y-10 bg-white/70 backdrop-blur-xl p-6 sm:p-12 ring-1 ring-black/10 shadow-xl rounded-3xl">

        {/* Carrusel de logos más pequeños */}
        <div className="w-full overflow-hidden">
          <div className="flex space-x-6 min-w-max py-3 px-2 animate-slide-infinite">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 relative opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 60px, 72px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Aquí se construye el hogar de tu inteligencia artificial
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
            Cada herramienta que ves aquí es una columna en la arquitectura digital que sustenta los sistemas inteligentes más avanzados del mercado. No se trata solo de APIs o frameworks: hablamos de una <strong>infraestructura pensante</strong> lista para escalar, adaptarse y evolucionar con cada necesidad del negocio.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
            En <strong>GLYNNE</strong>, orquestamos lo mejor del desarrollo moderno (Next.js, Node, Python, Supabase, Docker) con motores de IA y automatización (OpenAI, LangChain, TensorFlow, n8n) para construir software que no solo resuelve tareas, sino que entiende procesos y se adapta al contexto empresarial.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
            El resultado: plataformas inteligentes que automatizan decisiones, integran datos en tiempo real y aprenden con cada interacción. Todo sobre una arquitectura diseñada para sostener la revolución empresarial que viene.
          </p>
        </div>
      </div>
    </section>
  );
}
