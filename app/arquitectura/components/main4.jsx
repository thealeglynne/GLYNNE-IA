'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaNetworkWired,
  FaBrain,
  FaLayerGroup,
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';

import '../../components/mainlogos.css';

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

const architecturePhases = [
  {
    key: 'capa-inteligente',
    name: 'Capa Inteligente',
    icon: FaBrain,
    content: `
Donde vive la IA. Aquí diseñamos agentes autónomos con LLMs, prompts dinámicos y flujos de pensamiento orquestados. Esta capa permite que el sistema analice, razone y actúe con autonomía contextual sobre los procesos del negocio.
`,
  },
  {
    key: 'orquestacion',
    name: 'Orquestación de Procesos',
    icon: FaCogs,
    content: `
La inteligencia no sirve sin acción. Por eso conectamos la IA a flujos automatizados que ejecutan tareas: desde enviar correos y responder chats hasta integrarse con CRMs, ERPs o plataformas internas. Todo esto se coordina en tiempo real.
`,
  },
  {
    key: 'capa-datos',
    name: 'Capa de Datos',
    icon: FaLayerGroup,
    content: `
Una IA que no accede a datos, está ciega. Aquí organizamos la arquitectura de bases de datos, RAGs, embeddings y capas semánticas. Esta estructura permite consultar, aprender y adaptarse a información actualizada del negocio.
`,
  },
  {
    key: 'seguridad',
    name: 'Seguridad & Gobernanza',
    icon: FaShieldAlt,
    content: `
Cada decisión de IA debe estar auditada y protegida. Implementamos RLS, trazabilidad de decisiones y control de acceso por contexto. Así, tus datos y procesos están seguros sin limitar la autonomía del sistema.
`,
  },
  {
    key: 'infraestructura',
    name: 'Infraestructura Modular',
    icon: FaNetworkWired,
    content: `
Toda la arquitectura corre sobre infraestructura cloud escalable y modular: Vercel, Docker, Supabase y más. Esto permite desplegar nuevas funcionalidades, escalar por demanda y mantener entornos consistentes para entrenar, probar y operar IA sin fricción.
`,
  },
];

export default function TechShowcaseContainer() {
  const [activeTab, setActiveTab] = useState('capa-inteligente');
  const current = architecturePhases.find(tab => tab.key === activeTab);

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
      {/* Fondo difuminado */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[3.7px] z-0" />

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center space-y-10 bg-white/70 backdrop-blur-xl p-6 sm:p-12 ring-1 ring-black/10 shadow-xl rounded-3xl">

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

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center px-4"
        >
          Arquitectura Viva para Inteligencia Artificial
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {architecturePhases.map(phase => {
            const Icon = phase.icon;
            const isActive = activeTab === phase.key;
            return (
              <button
                key={phase.key}
                onClick={() => setActiveTab(phase.key)}
                className={`relative group overflow-hidden px-4 py-2 rounded-full border transition-all flex items-center gap-2
                  ${isActive
                    ? 'bg-orange-500 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`text-xl sm:text-2xl transition-colors ${isActive ? 'text-white' : 'text-orange-500'}`} />
                  <span className="font-medium">{phase.name}</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            );
          })}
        </div>

        {/* Contenido dinámico */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200 text-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-black text-center mb-6">{current.name}</h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
              {current.content.trim()}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
