'use client';

import { useEffect, useState } from 'react';

export default function VideoBackground() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[60px]">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/auttomatizacion.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido centrado */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Texto Banner - reducido */}
        <h1
          className={`text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-wide transition-all duration-1000 ease-out
            ${showContent ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-sm'}`}
        >
          Automatiacion
        </h1>

        {/* Logo pequeño */}
        <img
          src="/logo.png"
          alt="Logo"
          className={`mt-4 w-16 sm:w-20 md:w-24 lg:w-28 transition-all duration-1000 ease-out
            ${showContent ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-2 blur-sm'}`}
        />
      </div>
    </div>
  );
}
