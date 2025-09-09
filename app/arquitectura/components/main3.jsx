'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Arquitectura de Software para Automatización Empresarial con IA
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-700">
            Automatizar sin estructura es construir sobre arena. ¿Estás listo para escalar?
          </h2>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Una empresa que intenta <strong>automatizar sin una arquitectura sólida</strong> se enfrenta a bloqueos constantes: 
            procesos lentos, fallos en la integración y un uso ineficaz de la inteligencia artificial. 
            Sin una base bien diseñada, la IA puede volverse un riesgo para la operación en lugar de una ventaja.
          </p>

          <p className="text-black font-semibold text-base md:text-lg">
            En <strong>GLYNNE</strong>, diseñamos arquitecturas empresariales escalables que convierten la automatización en una ventaja competitiva real.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Sistemas desacoplados listos para integrar IA con estabilidad</li>
            <li>Infraestructura con observabilidad, trazabilidad y control total</li>
            <li>Automatizaciones inteligentes que entienden contexto y responden en tiempo real</li>
            <li>Procesos orquestados con lógica distribuida y resiliente</li>
            <li>Capas bien definidas: dominio, servicio, integración y agentes de IA</li>
          </ul>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            <strong>Automatizar sin una base sólida</strong> es como poner un motor de avión en una bicicleta: la potencia existe, 
            pero el sistema no soporta el vuelo. Nuestra misión es que tu empresa no solo tenga alas, sino una infraestructura diseñada para volar.
          </p>

          <p className="text-black font-semibold text-base md:text-lg">
            GLYNNE construye <strong>software que piensa</strong>: infraestructura preparada para el presente y diseñada para el futuro.
          </p>
        </div>

        {/* Columna Derecha - Imagen totalmente responsive */}
        <div className="relative w-full aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] bg-white">
          <Image
            src="/mano.png"
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
