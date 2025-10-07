'use client';

import { useEffect, useState } from 'react';

export default function Main1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 500);
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // URLs de los videos
  const desktopVideo =
    'https://res.cloudinary.com/dpdyco5po/video/upload/f_auto,q_auto/1006_1_3_xdell8.mp4';
  const mobileVideo =
    'https://res.cloudinary.com/dpdyco5po/video/upload/movilGLY_s2ihya.mp4';

  const desktopPoster =
    'https://res.cloudinary.com/dpdyco5po/video/upload/1006_1_3_xdell8.jpg';
  const mobilePoster =
    'https://res.cloudinary.com/dpdyco5po/video/upload/movilGLY_s2ihya.mp4.jpg';

  return (
    <main className="w-[100vw] h-[100vh] overflow-hidden font-inter flex items-center justify-center bg-white">
      <video
        src={isMobile ? mobileVideo : desktopVideo}
        poster={isMobile ? mobilePoster : desktopPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover transition-all duration-500"
      >
        Tu navegador no soporta videos HTML5.
      </video>
    </main>
  );
}
