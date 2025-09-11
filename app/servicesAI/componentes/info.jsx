'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Un resumen claro de lo que nuestra IA puede hacer por tu empresa
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, no solo mostramos inteligencia artificial: 
            te damos una visión clara de cómo estas tecnologías pueden ayudarte a 
            <span className="font-semibold"> entender tus procesos, detectar fallas y prepararte para la era de la IA</span>.
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Nuestro ecosistema de agentes inteligentes está diseñado para 
            analizar tu negocio desde distintos ángulos, rescatar la información clave 
            y entregarte un <span className="font-semibold">mapa preciso del estado actual de tu empresa</span>, 
            listo para transformarse en una operación más ágil y escalable.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-2">
            <li>
              <strong>Agente TTS especializado</strong> en entender tu negocio: 
              escucha, interpreta y convierte tus necesidades en acciones claras.
            </li>
            <li>
              <strong>Agente auditor</strong> que rescata toda la información de tus procesos 
              y realiza un diagnóstico inicial de tu estado actual para adaptarte a la IA.
            </li>
            <li>
              <strong>Análisis de base de datos con IA</strong> que detecta y describe patrones ocultos, 
              revelando oportunidades de mejora y riesgos que no ves a simple vista.
            </li>
            <li>
              <strong>Resúmenes densos y accionables</strong> que estructuran los datos de tu empresa 
              en insights prácticos y fáciles de entender.
            </li>
          </ul>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-medium">
            Todo esto en un solo lugar: <span className="font-semibold text-black">una suite de IA diseñada para 
            auditar, optimizar y acompañar a tu empresa en el salto hacia el futuro.</span>
          </p>
        </div>

        {/* Columna Derecha */}
        <div className="relative w-full h-[300px] md:h-[500px] shadow-xl overflow-hidden rounded-2xl">
          <Image
            src="/langimg.png"
            alt="Resumen de servicios GLYNNE IA"
            fill
            className="object-cover object-center"s
          />
        </div>
      </div>
    </main>
  );
}
