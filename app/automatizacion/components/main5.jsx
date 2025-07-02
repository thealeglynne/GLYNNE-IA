'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-xl md:text-4xl font-bold text-black leading-snug">
            Automatización Inteligente. Procesos que Aprenden. Empresas que Escalan.
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, no solo automatizamos tareas: rediseñamos cómo opera tu empresa desde adentro. Analizamos cada proceso —desde ventas hasta soporte— para identificar puntos críticos, y luego los reconstruimos con inteligencia artificial, modelos LLM y flujos autónomos.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Auditoría de procesos clave en cada departamento</li>
            <li>Automatización basada en IA adaptativa y contextual</li>
            <li>Bots inteligentes, integraciones con CRMs y ERPs</li>
            <li>Workflows que conectan datos, decisiones y personas</li>
            <li>Incremento de eficiencia operativa sin perder control</li>
          </ul>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full max-w-[640px] mx-auto">
          <Image
            src="/automatizacion.jpg"
            alt="Visualización de Automatización con IA"
            width={800}
            height={534} // proporción 3:2
            layout="responsive"
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
