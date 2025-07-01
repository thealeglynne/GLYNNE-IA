'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Si tu software no piensa, tu empresa no escala.
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            El mundo cambió. Los negocios que aún operan con sistemas rígidos, manuales o desconectados están destinados a perder velocidad frente a quienes construyen <strong>arquitecturas inteligentes</strong>, flexibles y potenciadas por IA.
          </p>

          <p className="text-black font-semibold text-base md:text-lg">
            En <strong>GLYNNE</strong>, diseñamos la base tecnológica que tu empresa necesita para competir en la era del dato y la automatización. Creamos ecosistemas que piensan, responden y aprenden con cada proceso.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Infraestructura modular lista para escalar a lo grande</li>
            <li>Integración profunda de IA generativa, visión y RAG</li>
            <li>Sistemas que automatizan, entienden contexto y toman decisiones</li>
            <li>Arquitecturas resilientes, seguras y preparadas para el futuro</li>
            <li>Del diseño al despliegue: DevOps + MLOps sin fricción</li>
          </ul>
        </div>

        {/* Columna Derecha - Imagen totalmente responsive */}
        <div className="relative w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] bg-white">
  <Image
    src="/mano.png"
    alt="GLYNNE AI Code Architecture"
    fill
    className="object-cover object-top"
    priority
  />
</div>
      </div>
    </main>
  );
}
