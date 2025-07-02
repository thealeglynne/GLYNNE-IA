'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCodeBranch,
  FaProjectDiagram,
  FaBrain,
  FaDatabase,
  FaCogs,
} from 'react-icons/fa';
import '../../components/mainlogos.css';

const techSections = [
  {
    key: 'arquitectura',
    name: 'Arquitectura Inteligente',
    icon: FaProjectDiagram,
    content: `
Una buena integración empieza por una arquitectura bien pensada. Elegir tecnologías modernas no es seguir tendencias, es construir sobre cimientos escalables, modulares y orquestables.

En GLYNNE diseñamos sistemas que piensan como el negocio: capaces de adaptarse, crecer y reaccionar en tiempo real con precisión técnica y lógica empresarial unificada.`,
  },
  {
    key: 'logica',
    name: 'Lógica Orquestada',
    icon: FaCodeBranch,
    content: `
Toda integración necesita un núcleo lógico que interprete eventos, gestione condiciones y ejecute procesos de forma coherente. Aquí, la elección de tecnologías define la capacidad del sistema de reaccionar, delegar o escalar decisiones.

No se trata solo de programar, sino de pensar cómo fluyen los datos y cómo se conectan los módulos con inteligencia contextual.`,
  },
  {
    key: 'memoria',
    name: 'Memoria Empresarial',
    icon: FaDatabase,
    content: `
Una integración sin memoria es una máquina sin historia. Persistir el conocimiento, los datos y los eventos es esencial para decisiones precisas y trazabilidad operativa.

Usamos tecnologías que permiten historizar, relacionar y consultar con velocidad, seguridad y flexibilidad en tiempo real.`,
  },
  {
    key: 'ia',
    name: 'Inteligencia Aplicada',
    icon: FaBrain,
    content: `
Incorporar IA no es suficiente. Hay que integrarla de forma que entienda contexto, respete reglas de negocio y entregue valor real.

Usamos modelos adaptados a tu dominio, conectados con datos relevantes y gobernados por flujos orquestados que garantizan confiabilidad, escalabilidad y sentido.`,
  },
  {
    key: 'automatizacion',
    name: 'Flujos Automatizados',
    icon: FaCogs,
    content: `
La automatización es el lenguaje de las integraciones modernas. Elegir la herramienta correcta para cada tipo de conexión (APIs, eventos, tareas programadas) es clave para reducir fricción y aumentar eficiencia.

Conectamos sistemas como si fueran una sola red neuronal: coordinados, conscientes y enfocados en resultados.`,
  },
];

export default function TechShowcaseContainer() {
  const [activeKey, setActiveKey] = useState('arquitectura');
  const current = techSections.find(sec => sec.key === activeKey);

  const techLogos = [
    { src: '/langchain-text.png', alt: 'LangChain' },
    { src: '/n8n-color.png', alt: 'n8n' },
    { src: '/icons8-next.js-48.png', alt: 'Next.js' },
    { src: '/icons8-nodejs-480.png', alt: 'Node.js' },
    { src: '/icons8-supabase-480.png', alt: 'Supabase' },
    { src: '/icons8-python-480.png', alt: 'Python' },
    { src: '/icons8-chatear-500.png', alt: 'OpenAI' },
    { src: '/vercel.png', alt: 'Vercel' },
    { src: '/icons8-estibador-240.png', alt: 'Docker' },
    { src: '/scikit-learn.png', alt: 'Scikit-learn' },
    { src: '/TensorFlow.png', alt: 'TensorFlow' },
  ];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[3.7px] z-0" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center space-y-12 bg-white/70 backdrop-blur-xl p-6 sm:p-12 ring-1 ring-black/10 shadow-xl rounded-3xl">

        {/* Carrusel de logos */}
        <div className="w-full overflow-hidden">
          <div className="flex space-x-6 min-w-max py-3 px-2 animate-slide-infinite">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 relative opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 60px, 72px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-3">
          {techSections.map(({ key, name, icon: Icon }) => {
            const isActive = key === activeKey;
            return (
              <button
                key={key}
                onClick={() => setActiveKey(key)}
                className={`relative group overflow-hidden px-4 py-2 rounded-full border transition-all flex items-center gap-2
                  ${isActive
                    ? 'bg-orange-500 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`text-xl sm:text-2xl ${isActive ? 'text-white' : 'text-orange-500'}`} />
                  <span className="font-medium">{name}</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            );
          })}
        </div>

        {/* Contenido animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-black text-center mb-6">
              {current.name}
            </h3>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed text-justify space-y-5">
              {current.content
                .trim()
                .split('\n')
                .filter(Boolean)
                .map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
