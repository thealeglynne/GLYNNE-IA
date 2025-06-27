'use client';

import Image from 'next/image';

export default function MainCodeShowcase() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      
      {/* Imagen centrada - 30% más grande */}
      <div className="relative w-full max-w-[100%] h-[90vh] rounded-xl overflow-hidden flex items-center justify-center">
        <Image
          src="/orqestacionAgentes.png"
          alt="Orquestación de Agentes"
          fill
          className="object-contain"
        />
      </div>

    </main>
  );
}
