// Solución completa con popup funcional y contenido sobre autonomía e integración IA

'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaRobot, FaNetworkWired, FaCogs, FaBrain, FaTools, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaRobot size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Autonomía Operativa',
    description: 'Procesos que se ejecutan sin intervención humana directa, gracias a arquitecturas inteligentes.',
    detail: 'La autonomía operativa permite que una empresa mantenga procesos críticos funcionando 24/7 con toma de decisiones automatizada. Esto se logra con integraciones de IA que analizan datos, ejecutan acciones y se autoajustan en tiempo real.'
  },
  {
    icon: <FaNetworkWired size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Integración Inteligente',
    description: 'Conectamos sistemas y APIs para que la información fluya, se procese y genere valor al instante.',
    detail: 'Una buena integración no solo conecta, sino que transforma. Al unir CRMs, ERPs y modelos de IA en una arquitectura orquestada, se habilitan flujos empresariales inteligentes, auditables y escalables.'
  },
  {
    icon: <FaCogs size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Orquestación de Procesos',
    description: 'Diseñamos flujos de trabajo adaptativos que responden al negocio en tiempo real.',
    detail: 'Desde flujos de aprobación hasta automatización de operaciones, la orquestación permite modularizar, escalar y optimizar cada engranaje de la empresa con agentes y reglas inteligentes.'
  },
  {
    icon: <FaBrain size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Agentes Cognitivos',
    description: 'Desarrollamos IA capaz de razonar, decidir y actuar según el contexto empresarial.',
    detail: 'Los agentes LLM entrenados con información interna pueden responder consultas, ejecutar acciones automáticas y aprender de la operación para mejorar continuamente.'
  },
  {
    icon: <FaTools size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Arquitectura Modular',
    description: 'Dividimos sistemas en módulos inteligentes, fácilmente integrables y escalables.',
    detail: 'Una arquitectura bien diseñada permite evolucionar tecnológicamente sin romper el sistema. Cada módulo puede ser reemplazado o escalado de forma independiente.'
  },
  {
    icon: <FaBolt size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Tiempo Real',
    description: 'Desde la acción hasta la reacción, automatizamos decisiones con milisegundos de latencia.',
    detail: 'Infraestructura basada en eventos, APIs en tiempo real y respuestas contextuales hacen posible decisiones instantáneas que marcan la diferencia competitiva.'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Main6() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-[100px] bg-white">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-10 p-6 sm:p-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Autonomía Empresarial
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-base md:text-lg">
            Una empresa del futuro no reacciona, se anticipa. Con una arquitectura inteligente e integraciones profundas, puedes lograr verdadera autonomía operativa.
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
              className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(service)}
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

      <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md rounded-xl p-6 shadow-xl border border-gray-200">
            <Dialog.Title className="text-xl font-bold mb-2 text-gray-900">
              {selected?.title}
            </Dialog.Title>
            <Dialog.Description className="text-gray-700 text-sm">
              {selected?.detail}
            </Dialog.Description>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Cerrar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}