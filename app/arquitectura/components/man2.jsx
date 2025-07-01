'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaProjectDiagram,
  FaUnlink,
  FaTachometerAlt,
  FaEyeSlash,
} from 'react-icons/fa';

const sintomas = [
  {
    label: 'Flujos rotos',
    icon: <FaProjectDiagram className="text-orange-500 text-xl" />,
    descripcion: `Los procesos internos se interrumpen con frecuencia debido a una mala secuencia lógica o falta de coordinación entre sistemas. La automatización sin una arquitectura definida lleva a fallos impredecibles y a una sobrecarga operativa.

El resultado es que cada intervención humana se vuelve una solución temporal que impide escalar y mantener el control del sistema.`,
  },
  {
    label: 'Integraciones frágiles',
    icon: <FaUnlink className="text-orange-500 text-xl" />,
    descripcion: `Cuando los sistemas están conectados sin una capa robusta de orquestación, cualquier cambio en una API o evento inesperado puede romper el flujo.

Esto hace que el mantenimiento sea costoso y las soluciones poco confiables en entornos empresariales dinámicos.`,
  },
  {
    label: 'APIs lentas',
    icon: <FaTachometerAlt className="text-orange-500 text-xl" />,
    descripcion: `Si no se diseña una arquitectura que contemple colas, cachés o desacoplamientos, el sistema se verá afectado por cuellos de botella.

Esto afecta directamente la experiencia del usuario, ralentiza la toma de decisiones y hace que la automatización pierda valor.`,
  },
  {
    label: 'Automatizaciones sin trazabilidad',
    icon: <FaEyeSlash className="text-orange-500 text-xl" />,
    descripcion: `Una automatización sin registro ni observabilidad es una caja negra. No saber qué falló, cuándo ni por qué, genera desconfianza e impide escalar.

La IA necesita contexto para aprender. Sin trazabilidad, no hay mejora continua.`,
  },
];

export default function Main2Arquitectura() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur de fondo */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-8 sm:space-y-10 bg-white/70 backdrop-blur-xl p-6 sm:p-10 ring-1 ring-black/10 shadow-xl rounded-3xl text-black">

        {/* Título */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-2 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="relative inline-block glitch-text" data-text="La IA no puede operar sobre caos.">
            La IA no puede operar sobre caos.
          </span>
          <br />
          <span className="text-neutral-600 text-sm sm:text-base md:text-lg">Necesita estructura.</span>
        </motion.h2>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/logo2.png"
            alt="Logo GLYNNE"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {sintomas.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-neutral-300 rounded-xl p-5 sm:p-6 text-left shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-base sm:text-lg font-semibold flex items-center gap-2 text-black">
                {item.icon} {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
            onClick={() => setActiveIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black max-w-lg w-full rounded-xl p-4 sm:p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4">{sintomas[activeIndex].label}</h3>
              <p className="text-sm sm:text-base whitespace-pre-line">{sintomas[activeIndex].descripcion}</p>
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-2 right-3 text-lg font-bold text-gray-400 hover:text-black"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glitch CSS */}
      <style jsx>{`
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          opacity: 0.6;
          clip: rect(0, 0, 0, 0);
        }
        .glitch-text::before {
          animation: glitchTop 2s infinite linear;
          color: #ff0055;
        }
        .glitch-text::after {
          animation: glitchBottom 2s infinite linear;
          color: #00ffff;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          5% { clip: rect(0, 9999px, 10px, 0); }
          10% { clip: rect(0, 9999px, 0, 0); }
          15% { clip: rect(5px, 9999px, 15px, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          5% { clip: rect(10px, 9999px, 20px, 0); }
          10% { clip: rect(0, 9999px, 0, 0); }
          15% { clip: rect(5px, 9999px, 12px, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
        }
        .glitch-text {
          position: relative;
        }
      `}</style>
    </section>
  );
}
