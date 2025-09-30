'use client';
import { useState, useEffect } from 'react';

export default function PopupIntro({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [bgImage, setBgImage] = useState(
    'https://i.pinimg.com/1200x/31/a7/d8/31a7d8a337f73766d58a8033ebc20507.jpg'
  );
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setBgImage('https://i.pinimg.com/736x/47/2c/08/472c08b8cb24c6c1ad453a050fcacda7.jpg');
        setIsMobile(true);
      } else {
        setBgImage('/intropopup.jpg');
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wakeUpServers = async () => {
    try {
      await Promise.all([
        fetch('https://gly-chat-v1-2.onrender.com', { method: 'GET' }),
        fetch('https://gly-tts-v1.onrender.com/conversar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ texto: 'ping' }),
        }),
        fetch('https://gly-csv-v2.onrender.com', { method: 'GET' }),
      ]);
    } catch (error) {
      console.error('Error al despertar los servicios:', error);
    }
  };

  const handleClose = () => {
    setFadeOut(true);
    wakeUpServers();
    setTimeout(() => {
      setShowPopup(false);
      setFadeOut(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-full">
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-2 transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className={`relative rounded-xl overflow-hidden shadow-2xl border border-white/20`}
            style={{
              width: isMobile ? '100vw' : '65vw',
              height: isMobile ? '100vh' : '65vh',
              maxWidth: isMobile ? '100vw' : '60vw',
              borderRadius: isMobile ? 0 : '1rem', // en móviles sin bordes
            }}
          >
            {/* Imagen de fondo */}
            <img
              src={bgImage}
              alt="Fondo popup"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90 z-0 scale-x-[-1]"
            />

            {/* Capa oscura */}
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

              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl min-h-[4rem]">
                {fullText}
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
