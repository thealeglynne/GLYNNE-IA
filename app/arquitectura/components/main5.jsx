'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda - Imagen */}
        <div className="relative w-full h-[300px] md:h-[500px] shadow-xl overflow-hidden order-1 md:order-none">
          <Image
            src="/codeArquitectura.png"
            alt="Arquitectura de código GLYNNE"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Columna Derecha - Texto */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Tu IA no puede vivir en ruinas: necesitas construirle una ciudad.
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Una infraestructura de software es como un edificio: sólido, modular, preparado para crecer. Ahí es donde vive tu inteligencia artificial, donde trabaja, colabora y produce valor.
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, construimos esos edificios digitales. Diseñamos arquitecturas donde los sistemas no solo funcionan: se comunican, aprenden y evolucionan. Creamos entornos donde la IA no es un adorno, sino un ciudadano activo, eficiente y contextual.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Fundaciones sólidas con infraestructuras modulares y escalables</li>
            <li>Interiores inteligentes: APIs, pipelines y motores de datos interconectados</li>
            <li>IA empotrada en el núcleo: LLMs, RAG, visión, agentes autónomos</li>
            <li>Entornos seguros, resilientes y orquestados por DevOps + MLOps</li>
            <li>Espacios listos para ser habitados por flujos automáticos y decisiones inteligentes</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
