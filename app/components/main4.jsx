'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Columna Izquierda */}
        <div className="space-y-5 md:space-y-7 max-w-xl mx-auto text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Transformamos la manera en que tu empresa trabaja
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            En <strong>GLYNNE</strong>, ayudamos a las empresas a operar de forma más ágil, inteligente y sin fricciones.  
            No vendemos herramientas genéricas: diseñamos y adaptamos soluciones de software que encajan con tu realidad y evolucionan contigo.  
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Nuestro propósito es simple: que tu negocio gane tiempo, reduzca costos y libere el verdadero potencial de sus equipos. 
            Mientras tu empresa se concentra en crecer, nosotros nos encargamos de que la tecnología trabaje en segundo plano, anticipando y resolviendo los retos del día a día.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1 text-left">
            <li>Eliminamos tareas repetitivas que consumen recursos.</li>
            <li>Conectamos y hacemos dialogar tus sistemas actuales.</li>
            <li>Convertimos tus procesos en motores de eficiencia.</li>
            <li>Preparamos tu empresa para escalar sin limitaciones.</li>
            <li>Creamos soluciones que se adaptan a ti, no al revés.</li>
          </ul>
        </div>

        {/* Columna Derecha (oculta en móviles) */}
        <div className="relative w-full h-[300px] md:h-[500px] shadow-xl overflow-hidden hidden md:block">
          <Image
            src="/codeArquitectura.png"
            alt="Presentación de GLYNNE"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
}
