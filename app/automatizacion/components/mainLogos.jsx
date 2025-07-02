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
    key: 'langchain',
    name: 'LangChain',
    icon: FaProjectDiagram,
    content: `
LangChain permite construir cadenas de pensamiento automatizadas basadas en lenguaje natural. Con GLYNNE, usamos LangChain para orquestar flujos de decisión complejos, integrando datos empresariales, documentos y APIs en arquitecturas LLM escalables.

Implementamos agentes cognitivos capaces de entender contexto, recuperar información de múltiples fuentes y tomar decisiones inteligentes en tiempo real.`,
  },
  {
    key: 'python',
    name: 'Python',
    icon: FaCodeBranch,
    content: `
Python es el motor de nuestra lógica empresarial. Desde procesamiento de datos, inferencia de modelos, hasta conectividad con APIs empresariales, es la columna vertebral de muchas soluciones inteligentes.

Usamos frameworks como FastAPI, pandas, y scikit-learn para construir pipelines robustos y modelos listos para producción.`,
  },
  {
    key: 'supabase',
    name: 'Supabase',
    icon: FaDatabase,
    content: `
Toda inteligencia necesita memoria. Con Supabase diseñamos bases de datos relacionales seguras, integradas con autenticación y funciones en tiempo real.

Automatizamos flujos de datos, auditamos procesos y gestionamos usuarios con escalabilidad y trazabilidad empresarial.`,
  },
  {
    key: 'openai',
    name: 'Modelos LLM',
    icon: FaBrain,
    content: `
Los modelos de lenguaje como GPT-4 son la interfaz de pensamiento de nuestras plataformas. Desde generación de contenido personalizado, clasificación semántica, hasta análisis de sentimiento o predicción contextual.

GLYNNE entrena, ajusta e integra modelos LLM adaptados a tus datos y dominio.`,
  },
  {
    key: 'n8n',
    name: 'Automatización n8n',
    icon: FaCogs,
    content: `
n8n es nuestro sistema nervioso de automatización. Orquestamos integraciones complejas entre sistemas (ERP, CRM, correos, WhatsApp) sin código innecesario.

Construimos flujos de trabajo que responden al negocio en tiempo real, desde triggers inteligentes hasta validaciones automáticas.`,
  },
];

export default function TechShowcaseContainer() {
  const [activeKey, setActiveKey] = useState('langchain');
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

        {/* Botones de tecnología */}
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
