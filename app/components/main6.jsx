'use client';

import {
  FaRobot,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaProjectDiagram,
  FaBolt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaRobot size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'AUTOMATIZACIÓN',
    description:
      'La IA permite automatizar tareas repetitivas, mejorando la eficiencia y reduciendo errores humanos sin importar la industria.',
  },
  {
    icon: <FaChartLine size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'PREDICCIÓN',
    description:
      'Modelos predictivos para anticipar demanda, comportamiento de clientes o mantenimiento preventivo.',
  },
  {
    icon: <FaCogs size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'OPTIMIZACIÓN',
    description:
      'Optimiza procesos logísticos, operativos o financieros con algoritmos inteligentes adaptativos.',
  },
  {
    icon: <FaDatabase size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'GESTIÓN DE DATOS',
    description:
      'Clasifica, analiza y estructura grandes volúmenes de datos automáticamente con NLP y ML.',
  },
  {
    icon: <FaProjectDiagram size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'PROCESOS INTELIGENTES',
    description:
      'Transforma flujos de negocio tradicionales en sistemas autoajustables e inteligentes.',
  },
  {
    icon: <FaBolt size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'RESPUESTAS EN TIEMPO REAL',
    description:
      'Implementa sistemas con IA que responden en tiempo real a clientes, procesos o cambios de contexto.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Main6() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white"
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
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-10 bg-white/70 backdrop-blur-xl p-6 sm:p-10 ring-1 ring-black/10 shadow-xl rounded-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            What We Provide
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-base md:text-lg">
            La inteligencia artificial puede escalar y optimizar cualquier proceso sin importar el sector o industria. Aquí algunas formas de aplicarla.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-bold uppercase text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}