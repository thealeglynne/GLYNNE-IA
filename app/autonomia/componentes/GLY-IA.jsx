'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MainGlyIACompleto() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleRedirect = () => {
    window.location.href = 'https://gly-ai-arq.vercel.app/';
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white">
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-6 p-6 sm:p-10">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900">
          ¿Qué nivel de autonomía puede alcanzar tu empresa?
        </h2>

        <div className="flex flex-col space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-inter max-w-3xl">
          <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 my-6 mx-auto" />
          <p className="font-medium">
            Las empresas que automatizan no solo ahorran tiempo, sino que ganan autonomía. Con IA puedes eliminar tareas repetitivas, mejorar la toma de decisiones y escalar sin fricciones.
          </p>
          <p className="font-semibold">
            <span className="text-black font-bold">GLY-IA</span> es tu copiloto para detectar, diseñar y desplegar inteligencia artificial en los procesos claves de tu negocio.
            Descubre cómo pasar de la automatización puntual a la <span className="text-orange-600">autonomía empresarial</span>.
          </p>
          <p className="text-base font-semibold text-black">
            Consulta ahora y recibe un diagnóstico con IA sobre cómo convertir tu operación en una máquina inteligente.
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem('glyiaChatClosed');
            setShowLoginModal(true);
          }}
          className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Solicita tu diagnóstico con GLY-IA</span>
        </button>
      </div>

      {/* Modal de redirección */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative bg-white p-6 shadow-2xl w-[90vw] max-w-md rounded-xl"
            >
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">Antes de empezar</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Serás redirigido al entorno de diagnóstico inteligente.
              </p>

              <button
                onClick={handleRedirect}
                className="relative w-full py-3 px-6 rounded-xl bg-neutral-900 text-white font-semibold shadow-lg overflow-hidden transition group flex items-center justify-center"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="z-10">Ir al Diagnóstico</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
