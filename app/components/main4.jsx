'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Desarrollamos Software que Piensa. Arquitecturas que Escalan. IA que Ejecuta.
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, combinamos ingeniería de software avanzada con modelos de inteligencia artificial diseñados para transformar cómo las empresas operan, deciden y escalan.
            Creamos soluciones a medida: desde sistemas que automatizan flujos críticos hasta plataformas que entienden lenguaje natural, analizan datos en tiempo real y generan valor desde el primer día.
          </p>

          

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
            <li>Desarrollo de sistemas escalables con enfoque modular</li>
            <li>Integración de modelos LLM, RAG, visión e IA personalizada</li>
            <li>Automatización inteligente con flujos guiados por contexto</li>
            <li>Diseño de arquitecturas ágiles, seguras y listas para escalar</li>
            <li>Procesos de DevOps y MLOps optimizados para iteración rápida</li>
          </ul>

        </div>

        {/* Columna Derecha */}
        <div className="relative w-full h-[300px] md:h-[500px] shadow-xl overflow-hidden">
          <Image
            src="/code.png"
            alt="Captura de VSCode"
            fill
            className="object-100% object-top"
          />
        </div>
      </div>
    </main>
  );
}
