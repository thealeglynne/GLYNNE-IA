'use client';

import { useEffect, useState } from 'react';

export default function MainGlyIAIntro() {
  const [bgImage, setBgImage] = useState('/main-3.jpg'); // imagen por defecto (pantallas grandes)

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth <= 600) {
        setBgImage('https://i.pinimg.com/1200x/b8/a2/b4/b8a2b42d39419df812156ee163c592ae.jpg');
      } else {
        setBgImage('/main-3.jpg');
      }
    };

    updateBg();
    window.addEventListener('resize', updateBg);
    return () => window.removeEventListener('resize', updateBg);
  }, []);

  const handleRedirect = () => {
    window.open('https://glynne-sst-ai-hsiy.vercel.app/', '_blank');
  };

  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay oscuro sobre toda la imagen */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Contenedor del texto */}
      <div className="relative z-10 w-full max-w-5xl min-h-[70vh] rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center justify-center space-y-6 bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        <div className="relative z-10">
          <h2 className="text-lg md:text-2xl font-bold tracking-tight text-white">
            Descubre el poder de la IA aplicada a tu negocio
          </h2>

          <img
            src="/logo.png"
            alt="Logo GLY-IA"
            className="w-20 mt-4 mb-2 mx-auto brightness-200"
          />

          <p className="text-sm md:text-base font-semibold text-gray-200">
            Haz clic y prueba nuestras <u>IA de diagnóstico</u>.  
            <span> ¡Gratis y sin compromiso!</span>
          </p>

          <button
            onClick={handleRedirect}
            className="mt-6 px-10 py-4 text-base font-semibold bg-white text-black rounded-xl transition-all duration-300 hover:bg-gray-200 shadow-md hover:shadow-xl"
          >
            Probar ahora las IA
          </button>
        </div>
      </div>
    </main>
  );
}
