'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Main1() {
  const router = useRouter();

  const handleRedirect = () => {
    // Puedes usar router.push si el dominio está dentro del mismo host, pero en este caso redireccionamos completamente
    window.location.href = 'https://gly-ai-arq.vercel.app/';
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white">
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-6 p-6 sm:p-10">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          ¿Quieres darte una idea?
        </h2>

        <div className="flex flex-col space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-inter max-w-3xl">
          <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 my-6 mx-auto" />
          <p className="font-semibold">
            Imagina que tu empresa es una ciudad: la arquitectura de software son los edificios, los flujos, las bases. Pero lo que realmente le da vida a todo… es la inteligencia artificial.
          </p>
          <p className="font-semibold">
            <span className="text-black font-bold">GLY-IA</span> es nuestra IA de diagnóstico que analiza tu negocio y te muestra por dónde podrías empezar a automatizar. Gratis, en segundos, sin fricción.
          </p>
          <p className="text-base font-semibold text-black">
            Te damos una visión clara, precisa y personalizada. ¿Listo para ver el potencial oculto de tu operación?
          </p>
        </div>

        <button
          onClick={handleRedirect}
          className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Consulta a GLY-IA</span>
        </button>
      </div>
    </main>
  );
}
