'use client';
import { useState, useEffect } from 'react';

export default function PopupIntro({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText =
    'GLYNNE transforma industrias creando profesionales expertos con inteligencia artificial para gestionar tus procesos.';

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('popupShown');
    if (!alreadyShown) {
      setShowPopup(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : 'auto';
  }, [showPopup]);

  // Efecto máquina de escribir
  useEffect(() => {
    if (!showPopup) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [showPopup]);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
      setFadeOut(false);
    }, 500); // misma duración que la transición
  };

  return (
    <div className="relative w-full h-full">
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-2 transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="relative w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-white/20">

            {/* Imagen de fondo */}
            <img
              src="/pngPerson2.png"
              alt="Fondo popup"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90 z-0 scale-x-[-1]" 
            />

            {/* Capa oscura encima */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Contenido */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4 py-6 md:px-10 md:py-10 space-y-4 md:space-y-6">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-28 sm:w-36 md:w-44 lg:w-28 mb-2"
              />

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            La competencia ya escala con IA... ¿y tú?
              </p>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl min-h-[3rem]">
                {typedText}
              </p>

              <button
                onClick={handleClose}
                className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-neutral-900 text-white font-semibold shadow-lg group text-sm sm:text-base"
              >
                <span className="relative z-10">Explora la plataforma</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            </div>
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
