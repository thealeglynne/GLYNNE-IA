'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaProjectDiagram,
  FaUnlink,
  FaTachometerAlt,
  FaEyeSlash,
  FaExpandAlt,
  FaClone,
} from 'react-icons/fa';

const sintomas = [
  {
    label: 'Flujos rotos en procesos internos',
    icon: <FaProjectDiagram className="text-orange-500 text-xl" />,
    descripcion: `Los procesos internos se interrumpen con frecuencia por falta de una arquitectura clara. 
    La automatización sin estructura se convierte en una cadena de parches temporales que impide escalar, controlar y mejorar el sistema.`,
  },
  {
    label: 'Integraciones frágiles entre sistemas',
    icon: <FaUnlink className="text-orange-500 text-xl" />,
    descripcion: `Cuando los sistemas están conectados sin una capa de orquestación modular, 
    cualquier cambio externo puede romper todo. Esto incrementa costos y genera frustración constante.`,
  },
  {
    label: 'APIs lentas y cuellos de botella',
    icon: <FaTachometerAlt className="text-orange-500 text-xl" />,
    descripcion: `Sin colas, cachés ni separación de responsabilidades, las APIs se convierten en cuellos de botella. 
    Esto afecta la experiencia del usuario y bloquea la automatización inteligente.`,
  },
  {
    label: 'Automatizaciones sin trazabilidad',
    icon: <FaEyeSlash className="text-orange-500 text-xl" />,
    descripcion: `Cuando no hay registros ni monitoreo, los errores se vuelven invisibles. 
    Una IA necesita contexto para aprender y optimizar. Sin trazabilidad, no puedes mejorar.`,
  },
  {
    label: 'Escalabilidad limitada',
    icon: <FaExpandAlt className="text-orange-500 text-xl" />,
    descripcion: `Si tu sistema no fue diseñado para crecer, cada nueva función es un reto. 
    Una arquitectura no escalable frena la innovación y aumenta los costos operativos.`,
  },
  {
    label: 'Duplicación de datos',
    icon: <FaClone className="text-orange-500 text-xl" />,
    descripcion: `La falta de una fuente única de verdad genera datos redundantes en múltiples sistemas. 
    Esto complica reportes, decisiones y entrenamientos de modelos de IA.`,
  },
];

export default function Main2Arquitectura() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className="relative w-full flex items-center justify-center p-6 sm:p-10 md:p-16 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-8 sm:space-y-10 bg-white/70 backdrop-blur-xl p-6 sm:p-10 ring-1 ring-black/10 shadow-xl rounded-3xl text-black">
        
        {/* Título */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-2 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Arquitectura empresarial: ¿tu empresa podría ir mejor?
        </motion.h2>

        <p className="text-neutral-700 text-sm sm:text-base md:text-lg max-w-3xl">
          Estos son los <strong>síntomas más comunes</strong> de una empresa con una arquitectura mal integrada tecnológicamente. 
          Identificarlos es el primer paso para escalar con inteligencia artificial y automatización confiable.
        </p>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/logo2.png"
            alt="Logo GLYNNE - Arquitectura de Software y Automatización Empresarial"
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
              role="button"
              aria-label={`Abrir detalle sobre ${item.label}`}
            >
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-black">
                {item.icon} {item.label}
              </h3>
              {/* Texto oculto para SEO (visible al abrir el popup) */}
              <p className="sr-only">{item.descripcion}</p>
            </motion.div>
          ))}
        </div>

        {/* Mensaje de cierre */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-xl pt-4">
          Una <strong>arquitectura de software robusta</strong> no es un lujo, 
          es la base para que la <strong>inteligencia artificial</strong> funcione con propósito, velocidad y escala.
        </p>
      </div>

      {/* Popup detalle */}
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
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                {sintomas[activeIndex].label}
              </h3>
              <p className="text-sm sm:text-base whitespace-pre-line">
                {sintomas[activeIndex].descripcion}
              </p>
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-2 right-3 text-lg font-bold text-gray-400 hover:text-black"
                aria-label="Cerrar detalle"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
