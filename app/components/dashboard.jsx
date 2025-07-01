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

export default function DashboardWithExplanation() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-[100px]"
      style={{
        backgroundImage: "url('/)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-0" />

      {/* Contenedor del dashboard */}
      <motion.div
        className="relative z-10 w-full max-w-7xl bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center space-y-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          El Futuro de la Automatización Inteligente
        </h2>

        {/* Texto explicativo */}
        <p className="text-gray-700 text-base md:text-lg font-medium max-w-3xl">
          Estas gráficas muestran cómo la inteligencia artificial está revolucionando sectores clave. En <strong>GLYNNE</strong>, no solo analizamos estos datos, los convertimos en soluciones reales que automatizan, escalan y transforman empresas.
        </p>

        {/* Gráficas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Radar Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 h-[320px] flex flex-col justify-between">
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
          </div>

          {/* Área Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 h-[320px] flex flex-col justify-between">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
