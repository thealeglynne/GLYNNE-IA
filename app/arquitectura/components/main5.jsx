'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white"
      role="region"
      aria-label="Arquitectura de software con inteligencia artificial"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda - Imagen con SEO (oculta en móviles) */}
        <figure className="relative w-full h-[300px] md:h-[500px] shadow-xl overflow-hidden order-1 md:order-none hidden md:block">
          <Image
            src="/codeArquitectura.png"
            alt="Representación visual de arquitectura de código empresarial con inteligencia artificial de GLYNNE"
            fill
            className="object-cover object-top"
            priority
          />
          <figcaption className="sr-only">
            Ejemplo visual de arquitectura de software diseñada para escalar con inteligencia artificial en empresas modernas.
          </figcaption>
        </figure>

        {/* Columna Derecha - Texto SEO */}
        <article className="space-y-5 md:space-y-7 max-w-xl mx-auto text-center md:text-left">
          <header>
            <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
              Tu IA no puede vivir en ruinas: necesita una arquitectura sólida para crecer.
            </h1>
          </header>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            La <strong>arquitectura de software</strong> es la ciudad donde habita tu inteligencia artificial. 
            Si los cimientos no son sólidos, la IA se convierte en un riesgo. Con una infraestructura modular y escalable, 
            tu empresa obtiene un entorno estable para la <strong>automatización empresarial</strong> y la toma de decisiones inteligentes.
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, diseñamos arquitecturas digitales donde los sistemas se comunican, 
            aprenden y evolucionan. Creamos entornos resilientes donde la <strong>IA empresarial</strong> no 
            es un accesorio, sino un ciudadano activo que aporta valor en cada flujo de trabajo.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Principios de nuestra arquitectura de software inteligente
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1 text-left">
            <li>Fundaciones sólidas con <strong>infraestructuras modulares y escalables</strong></li>
            <li>Interiores inteligentes: APIs, pipelines y motores de datos interconectados</li>
            <li>IA en el núcleo: LLMs, RAG, visión computacional y agentes autónomos</li>
            <li>Entornos seguros, resilientes y orquestados con DevOps + MLOps</li>
            <li>Espacios preparados para flujos automáticos y decisiones inteligentes</li>
          </ul>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Construir sin arquitectura es como poner un motor de avión en una bicicleta. 
            Nuestra misión es que tu infraestructura esté lista para despegar, 
            <strong>con escalabilidad, seguridad y rendimiento empresarial</strong>.
          </p>
        </article>
      </div>
    </section>
  );
}
