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
Los equipos de ventas suelen perder tiempo en tareas manuales: seguimiento repetitivo de prospectos, leads mal calificados y oportunidades que se enfrían rápido. El resultado: ciclos de venta más largos y menor conversión.

Con GLYNNE transformas tu funnel con **automatización de ventas con IA**, scoring inteligente de leads y bots de seguimiento proactivos. Así tus asesores se enfocan solo en clientes con mayor probabilidad de cierre.

Desde la auditoría de tu proceso hasta la integración con **CRM líderes como HubSpot o Salesforce**, implementamos predicción con modelos LLM y workflows automatizados que han demostrado aumentar la conversión hasta en un **40%**.`,
  },
  {
    key: 'rh',
    name: 'Recursos Humanos',
    icon: FaUsers,
    content: `
El reclutamiento tradicional consume semanas y los procesos inconsistentes aumentan la rotación de personal. Muchas empresas pierden talento por falta de velocidad y trazabilidad.

Con GLYNNE, implementas **reclutamiento inteligente con IA**, onboarding guiado por agentes autónomos y monitoreo de clima laboral en tiempo real. Esto permite detectar riesgos de rotación antes de que impacten.

Desde formularios inteligentes hasta flujos orquestados con LLMs y **n8n**, tu equipo de RR.HH. pasa de ser reactivo a predictivo: reducimos el tiempo de contratación hasta en un **50%** y aumentamos la retención de talento.`,
  },
  {
    key: 'soporte',
    name: 'Soporte',
    icon: FaRobot,
    content: `
Un soporte ineficiente genera tickets acumulados, clientes frustrados y pérdida de confianza. Cada minuto de espera puede costarte una oportunidad.

GLYNNE automatiza la atención al cliente con **clasificación inteligente de tickets**, respuestas contextuales con modelos LLM y dashboards en tiempo real para visibilidad completa.

Integramos con plataformas como **Zendesk o Freshdesk**, eliminamos respuestas repetitivas y damos trazabilidad total al flujo de soporte. El impacto: reducción de tiempos de resolución en un **60%** y mejora sustancial en tu NPS.`,
  },
  {
    key: 'operaciones',
    name: 'Operaciones',
    icon: FaCog,
    content: `
Los procesos operativos fragmentados entre múltiples herramientas y equipos generan errores, sobrecostos y pérdida de eficiencia.

GLYNNE unifica y orquesta tus flujos con tecnologías como **Supabase, LangChain y n8n**, aplicando validaciones automáticas, alertas inteligentes y pipelines resilientes.

El resultado: operaciones escalables y trazables, con menos retrabajo y más control. Lo que antes era caos ahora se convierte en un **sistema eficiente y confiable**.`,
  },
  {
    key: 'finanzas',
    name: 'Finanzas',
    icon: FaMoneyBillWave,
    content: `
El análisis financiero manual es lento y propenso a errores. Los reportes tardíos y las proyecciones imprecisas limitan la capacidad de tomar decisiones estratégicas.

GLYNNE introduce **predicción de flujo de caja con IA**, generación automática de reportes y monitoreo en tiempo real de KPIs financieros clave.

Integramos con ERPs y CRMs para automatizar conciliaciones, detectar anomalías y prever riesgos. Así, tu área financiera deja de ser solo operativa para convertirse en un **motor estratégico del negocio**.`,
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
          Automatización Inteligente por Departamentos
        </motion.h2>

        {/* Botones */}
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
              {current.name}
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
