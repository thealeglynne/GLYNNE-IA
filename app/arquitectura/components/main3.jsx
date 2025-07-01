'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
          Automatizar sin estructura es construir sobre arena. ¿Estás listo para escalar?
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            ¿Sabes cuáles son los principales bloqueos de una empresa que intenta automatizar sin una arquitectura sólida? Sin una base bien diseñada, la IA se vuelve ineficaz, lenta o incluso peligrosa para la operación.
          </p>

          <p className="text-black font-semibold text-base md:text-lg">
            En <strong>GLYNNE</strong>, construimos la arquitectura de software que permite a tu empresa integrar automatización inteligente sin caos ni cuellos de botella.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Sistemas desacoplados listos para integrar IA de forma estable</li>
            <li>Infraestructura con observabilidad, trazabilidad y control</li>
            <li>Automatizaciones que entienden el contexto y responden en tiempo real</li>
            <li>Procesos orquestados con lógica distribuida y resiliente</li>
            <li>Capas bien definidas para escalar: dominio, servicio, integración, IA</li>
          </ul>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Automatizar sin una base sólida es como poner un motor de avión en una bicicleta. Nuestra misión es que tu sistema pueda volar... y que no se caiga.
          </p>

          <p className="text-black font-semibold text-base md:text-lg">
            GLYNNE crea software que piensa. Infraestructura lista para el presente y diseñada para el futuro.
          </p>
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
