'use client';

import { useEffect, useState } from 'react';

export default function ImageBackground() {
  const [showLogo, setShowLogo] = useState(false);
  const [bgImage, setBgImage] = useState('/main1.jpg'); // Imagen por defecto

  // Mostrar logo con animación
  useEffect(() => {
    const timeout = setTimeout(() => setShowLogo(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Cambiar imagen según ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setBgImage('https://i.pinimg.com/736x/9e/a9/af/9ea9af19c18e476fb4d7717873ded2a1.jpg'); // Imagen para móviles
      } else {
        setBgImage('/main1.jpg'); // Imagen para escritorio
      }
    };

    handleResize(); // Comprobar al montar
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[60px]">
      {/* Imagen de fondo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido encima de la imagen */}
      <div className="relative z-20 flex items-center justify-center h-full mt-[0px]">
        <img
          src="/logo.png"
          alt="Logo"
          className={`w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 transition-opacity transition-transform duration-1000 ease-out
            ${showLogo ? 'opacity-100 scale-70' : 'opacity-0 scale-75'}`}
        />
      </div>
    </div>
  );
}
