'use client';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
} from 'recharts';
import { motion } from 'framer-motion';

const COLORS = ['#EA580C', '#F59E0B', '#10B981', '#6366F1', '#EF4444'];

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

const roiData = [
  { name: 'IA Operativa', ROI: 35 },
  { name: 'IA Estratégica', ROI: 52 },
  { name: 'Automatización Tradicional', ROI: 18 },
];

const adoptionData = [
  { name: 'Manufactura', value: 22 },
  { name: 'Finanzas', value: 25 },
  { name: 'Salud', value: 18 },
  { name: 'Retail', value: 20 },
  { name: 'Tecnología', value: 15 },
];

const efficiencyData = [
  { year: '2020', eficiencia: 12 },
  { year: '2022', eficiencia: 28 },
  { year: '2024', eficiencia: 47 },
  { year: '2026', eficiencia: 63 },
  { year: '2028', eficiencia: 80 },
];

export default function DashboardWithExplanation() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-[80px] pb-10"
      style={{ backgroundColor: 'white' }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-0" />

      <motion.div
        className="relative z-10 w-full max-w-7xl bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-12 text-center flex flex-col items-center space-y-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Autonomía Empresarial con Inteligencia Artificial
        </h2>

        <p className="text-gray-700 text-base md:text-lg font-medium max-w-4xl">
          Este tablero presenta un análisis profundo del impacto de la IA en la transformación empresarial. Exploramos cómo las tecnologías de automatización escalan, qué sectores lideran su adopción y el retorno sobre la inversión de cada enfoque. A través de estos gráficos, entenderás por qué la autonomía con IA ya no es opcional, sino estratégica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full auto-rows-[340px]">
          <div className="bg-white border rounded-2xl shadow p-4 md:col-span-2">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Crecimiento de Automatización (2024-2034)</h3>
            <p className="text-xs text-gray-500 mb-2">El mercado de soluciones empresariales inteligentes, incluyendo BPA, RPA y AaaS, proyecta un crecimiento acelerado en la próxima década.</p>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={growthData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="EnterpriseAI" stroke="#EA580C" fill="#FFEDD5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border rounded-2xl shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Proyecciones y Tendencias (%)</h3>
            <p className="text-xs text-gray-500 mb-2">Comparativo de crecimiento compuesto anual (CAGR) y adopción relativa por tecnologías y sectores clave.</p>
            <ResponsiveContainer width="100%" height="85%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="sector" />
                <PolarRadiusAxis />
                <Radar dataKey="value" stroke="#EA580C" fill="#FDBA74" fillOpacity={0.4} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border rounded-2xl shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Retorno sobre la Inversión (ROI)</h3>
            <p className="text-xs text-gray-500 mb-2">El retorno de la IA Estratégica supera ampliamente a modelos tradicionales.</p>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={roiData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ROI" fill="#EA580C" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border rounded-2xl shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Adopción Sectorial (%)</h3>
            <p className="text-xs text-gray-500 mb-2">Sectores que están liderando la adopción de soluciones IA para mejorar sus operaciones y toma de decisiones.</p>
            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie
                  data={adoptionData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {adoptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border rounded-2xl shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Escalabilidad de la Eficiencia (%)</h3>
            <p className="text-xs text-gray-500 mb-2">La eficiencia operativa incrementa conforme las empresas integran automatización e inteligencia adaptativa.</p>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={efficiencyData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="eficiencia" stroke="#EA580C" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}