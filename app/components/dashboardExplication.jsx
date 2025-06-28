'use client';

import { motion } from 'framer-motion';

export default function DashboardExplanation() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      <motion.div
        className="relative z-10 w-full max-w-5xl bg-white/70 backdrop-blur-xl ring-1 ring-black/10 shadow-xl rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
          ¿Qué significan estas métricas y por qué importan?
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          El crecimiento exponencial en la adopción de inteligencia artificial en sectores como salud, finanzas y manufactura refleja una necesidad real de eficiencia, predicción y escalabilidad. Empresas de todos los tamaños están invirtiendo en automatización inteligente para optimizar operaciones, reducir costos y adaptarse a un mercado dinámico. Estas gráficas no son solo números: son la señal de una transformación global que ya está en marcha.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          En <strong>GLYNNE</strong>, convertimos estas métricas en soluciones accionables. A través de arquitecturas IA modulares, pipelines de automatización inteligentes y análisis predictivo personalizado, hacemos que las cifras se conviertan en crecimiento real para tu empresa. No vendemos promesas: implementamos impacto. Desde un flujo automatizado hasta un ecosistema autosustentable, creamos la tecnología que anticipa tus retos... y los resuelve.
        </p>
      </motion.div>
    </section>
  );
}
