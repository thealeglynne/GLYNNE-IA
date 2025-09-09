'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUsers,
  FaBriefcase,
  FaRobot,
  FaCog,
  FaMoneyBillWave,
} from 'react-icons/fa';

// === CONTENIDO OPTIMIZADO PARA SEO ===
const departments = [
  {
    key: 'ventas',
    name: 'Ventas',
    icon: FaBriefcase,
    content: `
El área de ventas suele presentar fugas en el embudo comercial debido a procesos manuales de calificación, seguimiento y cierre.

Con GLYNNE, diseñamos una **arquitectura de ventas inteligente** basada en nodos conectados: los formularios de captación se enlazan con modelos LLM que ejecutan lead scoring automático, agentes que nutren prospectos en tiempo real y bots sincronizados con tu CRM (HubSpot, Salesforce, Zoho, etc.) que gestionan el pipeline.

El resultado: **datos unificados, flujos sin fricción y una IA que trabaja 24/7 para maximizar conversiones**.`,
  },
  {
    key: 'rh',
    name: 'Recursos Humanos',
    icon: FaUsers,
    content: `
Recursos Humanos se transforma en un **sistema modular de nodos conectados**: atracción, selección, onboarding y gestión del clima laboral.

GLYNNE integra agentes LLM que filtran hojas de vida, evalúan compatibilidad cultural con entrevistas conversacionales y activan procesos de contratación en plataformas como LinkedIn, Greenhouse o Personio. Cada nodo cumple una función y se comunica con el siguiente mediante eventos orquestados.

Además, un nodo de clima organizacional escucha en Slack o WhatsApp con modelos de lenguaje, anticipando renuncias y mejorando la retención del talento.`,
  },
  {
    key: 'soporte',
    name: 'Soporte Técnico',
    icon: FaRobot,
    content: `
El soporte tradicional suele ser desordenado y redundante en la recepción, clasificación, resolución y escalamiento de tickets.

Con GLYNNE, cada **nodo de soporte** se automatiza: los tickets entran vía Zendesk o Freshdesk, se categorizan con IA y reciben respuesta inmediata con un LLM o se escalan al agente correcto según prioridad. Todo está supervisado por un nodo de trazabilidad.

El impacto: **tiempos de atención reducidos, mayor satisfacción del cliente y un soporte autoajustable**.`,
  },
  {
    key: 'operaciones',
    name: 'Operaciones',
    icon: FaCog,
    content: `
Operaciones abarca órdenes, inventario, logística, calidad y reportes: un ecosistema perfecto para una **arquitectura de nodos desacoplados y orquestados**.

Usamos Supabase, n8n y LangChain para crear nodos que validan datos, lanzan alertas, sincronizan inventarios y ejecutan acciones en tiempo real. Cada nodo es independiente pero trabaja en red, asegurando resiliencia y trazabilidad.

Así, tu sistema operativo evoluciona hacia un **entorno flexible, auditable y optimizado con IA**.`,
  },
  {
    key: 'finanzas',
    name: 'Finanzas',
    icon: FaMoneyBillWave,
    content: `
Las finanzas suelen depender de hojas de cálculo y procesos manuales. GLYNNE lo redefine en una **malla de nodos financieros inteligentes**: conciliación, facturación, predicción y auditoría.

Cada nodo actúa sobre una función crítica: conectamos tu ERP o CRM con modelos LLM que generan reportes automáticos, detectan anomalías en flujo de caja y emiten alertas proactivas ante desviaciones.

Esto habilita una gestión financiera en tiempo real, con **predicción proactiva y decisiones basadas en datos confiables**.`,
  },
];

export default function MainAutomationShowcase() {
  const [activeDept, setActiveDept] = useState('ventas');
  const current = departments.find(dep => dep.key === activeDept);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-10">
        {/* Título optimizado */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center px-4"
        >
          Automatización e Integración por Departamentos con IA
        </motion.h2>

        {/* Botones de selección */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {departments.map(dep => {
            const Icon = dep.icon;
            const isActive = activeDept === dep.key;
            return (
              <button
                key={dep.key}
                onClick={() => setActiveDept(dep.key)}
                className={`relative group overflow-hidden px-4 py-2 rounded-full border transition-all flex items-center gap-2
                  ${isActive
                    ? 'bg-orange-500 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`text-xl sm:text-2xl transition-colors ${isActive ? 'text-white' : 'text-orange-500'}`} />
                  <span className="font-medium">{dep.name}</span>
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
            <h3 className="text-xl sm:text-2xl font-semibold text-black text-center mb-6">
              {current.name}: Automatización con Inteligencia Artificial
            </h3>
            <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed space-y-5 text-justify">
              {current.content
                .trim()
                .split('\n')
                .filter(p => p.trim())
                .map((para, i) => <p key={i}>{para.trim()}</p>)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}