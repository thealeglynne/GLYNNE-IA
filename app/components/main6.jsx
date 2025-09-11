'use client';

import {
  FaRobot,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaProjectDiagram,
  FaBolt,
  FaClipboardCheck,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaRobot size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Automatización',
    description:
      'Hacemos que las tareas repetitivas se hagan solas, para que tu equipo tenga más tiempo en lo que realmente importa.',
  },
  {
    icon: <FaChartLine size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Predicción',
    description:
      'Te ayudamos a anticipar lo que viene: clientes, ventas o posibles problemas antes de que pasen.',
  },
  {
    icon: <FaCogs size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Optimización',
    description:
      'Encontramos formas más rápidas y eficientes de hacer las cosas, reduciendo costos y errores.',
  },
  {
    icon: <FaClipboardCheck size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Auditorías con IA',
    description:
      'Analizamos tus procesos con inteligencia artificial para detectar mejoras, ahorrar tiempo y aumentar productividad.',
  },
  {
    icon: <FaDatabase size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Gestión de Datos',
    description:
      'Organizamos y damos sentido a tus datos para que se conviertan en información útil para tu negocio.',
  },
  {
    icon: <FaBolt size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Respuestas en Tiempo Real',
    description:
      'Creamos sistemas que reaccionan al instante a clientes, cambios o nuevas oportunidades.',
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
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-[100px] bg-white"
      style={{
        backgroundImage: "url('/')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur de fondo */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-10 p-6 sm:p-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Servicios
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-base md:text-lg">
            Lo que hacemos es simple: usamos inteligencia artificial para que tu
            negocio trabaje más rápido, con menos errores y con más claridad en
            la toma de decisiones.
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
