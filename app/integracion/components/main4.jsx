'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-100vh flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-6">
          <h1 className="text-lg md:text-3xl font-bold text-black leading-snug">
            Integración Inteligente. Orquestación Autónoma. Resultados Reales.
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, construimos infraestructuras digitales donde cada proceso, sistema y equipo puede hablar entre sí a través de nodos inteligentes. No se trata solo de automatizar tareas: se trata de transformar tu operación en un ecosistema conectado, ágil y escalable.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Utilizando agentes LLM, flujos orquestados y conectores API, diseñamos arquitecturas vivas donde la IA toma decisiones, ejecuta acciones y coordina tareas entre departamentos. Como un cerebro digital que nunca se detiene.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-base md:text-lg space-y-1">
            <li>Orquestación de procesos mediante nodos dinámicos</li>
            <li>Automatización contextual guiada por inteligencia artificial</li>
            <li>Integración con CRMs, ERPs y sistemas legacy</li>
            <li>Agentes autónomos que entienden, deciden y actúan</li>
            <li>Escalabilidad sin fricción: de una tarea a una empresa entera</li>
          </ul>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full max-w-[500px] mx-auto">
  <Image
    src="/pngPerson.png"
    alt="Visualización de Automatización con IA"
    width={700}
    height={570}
    layout="responsive"
    className="object-contain -scale-x-100"
  />
</div>

      </div>
    </main>
  );
}
