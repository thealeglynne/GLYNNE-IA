'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Desarrollo de Arquitecturas Inteligentes
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            En <b>GLYNNE</b>, construimos soluciones de software que automatizan y escalan procesos empresariales.
            Usamos inteligencia artificial integrada directamente en tus flujos operativos, permitiendo que tu empresa piense y actúe de forma autónoma.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base">
            <li>Modelos LLM integrados</li>
            <li>Automatización con flujos ETL personalizados</li>
            <li>Diseño de arquitecturas robustas y escalables</li>
            <li>Entornos de desarrollo completamente personalizados</li>
          </ul>
        </div>

        {/* Columna Derecha (imagen de VSCode) */}
        <div className="relative w-full h-[400px] md:h-[500px] shadow-xl rounded-xl overflow-hidden">
          <Image
            src="/code.png" // reemplaza esto con la ruta de tu imagen
            alt="Captura de VSCode"
            fill
            className="object-100% object-top"
          />
        </div>
      </div>
    </main>
  );
}
