'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: 'Corporación Unificada Nacional de Educación Superior CUN',
    company: 'GLYNNE',
    color: 'text-green-600',
    description:
      'GLYNNE transformó la operación académica y administrativa con flujos automatizados e inteligencia artificial. Se diseñaron arquitecturas inteligentes con agentes autónomos, optimizando desde la gestión documental hasta la experiencia del estudiante mediante interfaces predictivas e identidades digitales funcionales.',
    image: '/Logo_CUN_EXTERNOS_Logo_Corporacion_unificada_nacional_color.png',
  },
  {
    title: 'Científico de Datos y Desarrollador de Soluciones Freelance',
    company: 'GLYNNE',
    color: 'text-black',
    description:
      'Desde la visión de GLYNNE, se desarrollaron soluciones personalizadas de automatización basadas en aprendizaje automático, integraciones backend con Node.js y arquitecturas escalables. Cada proyecto fue un laboratorio de IA práctica, llevando desde ETLs hasta dashboards inteligentes que conectan datos con decisiones.',
    image: '/logo2.png',
  },
  {
    title: 'NIDO Construcciones',
    company: 'GLYNNE',
    color: 'text-orange-500',
    description:
      'GLYNNE lideró la automatización de áreas críticas como ventas e inventarios, con modelos predictivos de comportamiento de clientes y optimización de bases de datos masivas. El impacto fue medible: reducción de tiempo de operación y aumento sostenido en la tasa de conversión.',
    image: '/nidoLogo.png',
  },
  {
    title: 'El Sol Neighborhood Educational Center',
    company: 'GLYNNE',
    color: 'text-yellow-400',
    description:
      'GLYNNE diseñó la arquitectura modular completa basada en Redux, modernizando la plataforma con una estructura robusta en React y Node.js. La solución permitió una escalabilidad dinámica y una experiencia de usuario más fluida y consistente.',
    image: '/el-sol.png',
  },
];

export default function CarouselExperience() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % experiences.length);
  const prev = () => setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

  const currentExperience = experiences[current];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-14 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Fondo con blur suave */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[3.5px] z-0" />

      {/* Imagen decorativa */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {currentExperience && (
          <img
            src={currentExperience.image}
            alt="Logo decorativo"
            className="w-[360px] h-[360px] md:w-[440px] md:h-[440px] opacity-30 blur-[0.5px] object-contain transition-all duration-500 ease-in-out"
          />
        )}
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 w-full max-w-6xl h-[70vh] bg-white/40 backdrop-blur-sm ring-1 ring-black/10 shadow-xl rounded-3xl px-6 sm:px-10 py-8 text-center flex flex-col items-center justify-between space-y-5 overflow-y-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Título principal */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Transformaciones Reales con <span className="text-black">GLYNNE</span>
        </h1>

        {/* Contenido dinámico */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full flex flex-col items-center space-y-4"
          >
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight">
              {currentExperience.title} automatizado por{' '}
              <span className={currentExperience.color}>{currentExperience.company}</span>
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-4xl">
              {currentExperience.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navegación */}
        <div className="flex space-x-4 pt-2">
          <button
            onClick={prev}
            className="relative px-6 py-2 text-sm font-semibold bg-black text-white shadow-lg overflow-hidden rounded-xl group transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">← Anterior</span>
          </button>
          <button
            onClick={next}
            className="relative px-6 py-2 text-sm font-semibold bg-black text-white shadow-lg overflow-hidden rounded-xl group transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Siguiente →</span>
          </button>
        </div>

        {/* Botón Ver más (más pequeño) */}
        <button
          onClick={() => console.log('Ver más clickeado')}
          className="relative mt-2 px-6 py-2 text-sm font-medium bg-black text-white shadow-md overflow-hidden rounded-xl group transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Ver más</span>
        </button>
      </motion.div>
    </section>
  );
}
