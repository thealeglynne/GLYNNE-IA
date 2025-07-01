'use client';

import { useEffect, useState } from 'react';

export default function VideoBackground() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLogo(true), 1000); // 1 segundo
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

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido encima del video */}
      <div className="relative z-20 flex items-center justify-center h-full mt-[0px]">
        <img
          src="/logo.png"
          alt="Logo"
          className={`w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 transition-opacity transition-transform duration-1000 ease-out
            ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        />
      </div>
    </div>
  );
}
