'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-100vh flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-6">
          <h1 className="text-lg md:text-3xl font-bold text-black leading-snug">
            Integración Inteligente con IA • Orquestación Autónoma • Resultados Reales
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, diseñamos <strong>arquitecturas de software impulsadas por inteligencia artificial</strong> que permiten que procesos, sistemas y equipos trabajen como un solo ecosistema digital. Más que <em>automatizar</em>, nuestro objetivo es <strong>crear operaciones conectadas, escalables y sin fricción</strong>.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Con el poder de <strong>agentes LLM</strong>, flujos orquestados y conectores API, construimos una infraestructura viva: un <em>cerebro digital</em> que analiza, decide y ejecuta acciones en tiempo real. Así, tu empresa opera con <strong>autonomía inteligente</strong> y responde al mercado 24/7.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-base md:text-lg space-y-1">
            <li>Orquestación de procesos mediante <strong>nodos dinámicos</strong></li>
            <li>Automatización contextual guiada por <strong>inteligencia artificial</strong></li>
            <li>Integración fluida con <strong>CRMs, ERPs y sistemas legacy</strong></li>
            <li>Agentes autónomos que <strong>entienden, deciden y actúan</strong></li>
            <li><strong>Escalabilidad ilimitada</strong>: desde una tarea hasta la operación completa</li>
          </ul>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full max-w-[500px] mx-auto">
          <Image
            src="/pngPerson.png"
            alt="Visualización de integración y automatización empresarial con IA"
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
