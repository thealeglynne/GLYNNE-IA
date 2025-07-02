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

const departments = [
  {
    key: 'ventas',
    name: 'Ventas',
    icon: FaBriefcase,
    content: `
El área de ventas presenta nodos clave para la calificación de leads, seguimiento y cierre. Muchos de estos procesos se ejecutan de forma manual, lo cual genera fugas en el embudo comercial.

GLYNNE crea una orquestación basada en nodos inteligentes: conectamos formularios de captación con LLMs que realizan lead scoring automatizado, activamos agentes que nutren prospectos en tiempo real y desplegamos bots conectados a tu CRM (HubSpot, Salesforce, etc.) que gestionan el flujo de ventas.

El resultado es una arquitectura donde los datos fluyen sin fricción, los equipos se enfocan en las oportunidades correctas y la IA trabaja 24/7 para maximizar conversiones.`,
  },
  {
    key: 'rh',
    name: 'Recursos Humanos',
    icon: FaUsers,
    content: `
Recursos Humanos puede ser rediseñado como un sistema modular de nodos conectados: uno para atracción, otro para selección, onboarding y clima organizacional.

GLYNNE integra agentes LLM que filtran hojas de vida, evalúan compatibilidad con IA conversacional y activan procesos de contratación desde plataformas como LinkedIn, Greenhouse o Personio. Cada nodo ejecuta una tarea específica y se comunica con el siguiente mediante eventos orquestados.

Además, se incluye un nodo de clima laboral conectado a canales como Slack o WhatsApp, donde se ejecuta escucha activa con modelos de lenguaje para anticipar renuncias y mejorar retención.`,
  },
  {
    key: 'soporte',
    name: 'Soporte',
    icon: FaRobot,
    content: `
Soporte técnico se puede dividir en nodos como recepción, clasificación, resolución y escalamiento. Muchos de estos pasos se hacen hoy de forma desordenada o redundante.

Con GLYNNE, cada nodo se automatiza e interconecta: los tickets entran vía Zendesk o Freshdesk y son categorizados con IA. Se responde automáticamente con un LLM o se enruta al agente correcto según el nivel de prioridad, todo supervisado por un nodo de trazabilidad.

Esto reduce drásticamente los tiempos de atención, incrementa la satisfacción y convierte el soporte en un flujo inteligente y autoajustable.`,
  },
  {
    key: 'operaciones',
    name: 'Operaciones',
    icon: FaCog,
    content: `
Operaciones es el núcleo ideal para una arquitectura de nodos: órdenes, inventario, logística, calidad y reportes son procesos que pueden desacoplarse, automatizarse y orquestarse.

Usamos tecnologías como Supabase, n8n y LangChain para crear nodos que validan datos, disparan alertas, sincronizan inventarios o ejecutan acciones en tiempo real. Cada nodo es independiente pero trabaja en red, adaptándose al contexto y necesidades de tu operación.

Esto convierte tu sistema operativo en un entorno flexible, resiliente y altamente trazable donde cada evento puede ser auditado y optimizado.`,
  },
  {
    key: 'finanzas',
    name: 'Finanzas',
    icon: FaMoneyBillWave,
    content: `
Finanzas tradicionalmente depende de hojas de cálculo aisladas y procesos manuales. GLYNNE lo transforma en una malla de nodos inteligentes interconectados: conciliación, facturación, predicción y auditoría.

Cada nodo actúa sobre una función crítica. Conectamos tu ERP o CRM a modelos LLM que generan reportes automáticos, detectan anomalías en flujos de caja y emiten alertas inteligentes cuando hay desviaciones presupuestales.

Esta estructura modular permite a finanzas operar en tiempo real, con predicción proactiva y toma de decisiones basada en datos precisos y actualizados.`,
  },
];

export default function MainAutomationShowcase() {
  const [activeDept, setActiveDept] = useState('ventas');
  const current = departments.find(dep => dep.key === activeDept);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-16">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center px-4"
        >
          Integración Inteligente por Departamentos
        </motion.h2>

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
