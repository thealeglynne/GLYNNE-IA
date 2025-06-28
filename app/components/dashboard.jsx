'use client';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { motion } from 'framer-motion';

const growthData = [
  { year: '2024', BPA: 13, Enterprise: 49.25, RPA: 22.8, AaaS: 8.32, EnterpriseAI: 23.95 },
  { year: '2029', BPA: 23.9, Enterprise: 118.18, RPA: 96.4, AaaS: 38, EnterpriseAI: 100 },
  { year: '2034', BPA: 34.2, Enterprise: 189.5, RPA: 211.06, AaaS: 67.82, EnterpriseAI: 155.21 },
];

const radarData = [
  { sector: 'BPA (%)', value: 74 },
  { sector: 'AI en BPA (%)', value: 74 },
  { sector: 'RPA CAGR (%)', value: 25 },
  { sector: 'Enterprise AI CAGR (%)', value: 37.6 },
  { sector: 'AaaS CAGR (%)', value: 26.3 },
];

export default function Dashboard() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur de fondo */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center gap-16 bg-white/70 backdrop-blur-xl p-6 sm:p-10 ring-1 ring-black/10 shadow-xl rounded-3xl">
        {/* Título */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-black">
            Automatización & Inteligencia Artificial Empresarial
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Análisis visual del crecimiento del mercado y evolución proyectada por sector.
          </p>
        </motion.div>

        {/* Gráficas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Radar Chart */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 h-[320px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Indicadores de Crecimiento (%)</h3>
              <p className="text-xs text-gray-500">Proyección anual compuesta (CAGR) por sector.</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="sector" />
                <PolarRadiusAxis />
                <Radar name="Proyección" dataKey="value" stroke="#EA580C" fill="#FDBA74" fillOpacity={0.4} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Área Chart */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 h-[320px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Crecimiento del Mercado (B USD)</h3>
              <p className="text-xs text-gray-500">Comparativo 2024 - 2029 - 2034 por sector.</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="BPA" stroke="#EA580C" fill="#FFF7ED" />
                <Area type="monotone" dataKey="Enterprise" stroke="#4B5563" fill="#E5E7EB" />
                <Area type="monotone" dataKey="RPA" stroke="#EA580C" fill="#FECACA" />
                <Area type="monotone" dataKey="AaaS" stroke="#000" fill="#D1D5DB" />
                <Area type="monotone" dataKey="EnterpriseAI" stroke="#EA580C" fill="#FFEDD5" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}