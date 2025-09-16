'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-xl md:text-3xl font-bold text-black leading-snug">
            Aprende y domina la IA con experiencias 100% prácticas
          </h1>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            En <strong>GLYNNE COLLEGE</strong> no solo enseñamos teoría: 
            <span className="font-semibold"> ofrecemos herramientas prácticas y proyectos reales</span> 
            que te permiten aprender desde <strong>ciencia de datos, machine learning y deep learning</strong> 
            hasta <strong>MCP, RAG y la creación de agentes IA multimodales</strong>.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Nuestro ecosistema educativo está diseñado para que puedas <span className="font-semibold">dar vida a modelos de IA</span>, 
            desarrollar agentes inteligentes y experimentar con flujos de trabajo reales, 
            preparándote para la industria tecnológica actual y futura.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-sm space-y-1.5">
            <li>
              <strong>Laboratorios prácticos</strong> que te permiten implementar proyectos de IA desde cero.
            </li>
            <li>
              <strong>Proyectos guiados de modelado y agentes IA</strong> para entender cómo se aplican en casos reales.
            </li>
            <li>
              <strong>Aprendizaje de herramientas avanzadas</strong> como pipelines de ML, sistemas RAG y agentes multimodales.
            </li>
            <li>
              <strong>Recursos didácticos interactivos</strong> que combinan teoría, práctica y resultados medibles.
            </li>
          </ul>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
            Todo en un solo lugar: <span className="font-semibold text-black">una plataforma educativa diseñada para formar expertos capaces de crear, probar y desplegar IA de manera real y efectiva.</span>
          </p>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full h-[260px] md:h-[440px] shadow-lg overflow-hidden rounded-2xl">
          <Image
            src="/automatizacion.jpg"
            alt="Aprendizaje práctico en GLYNNE COLLEGE"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
}
