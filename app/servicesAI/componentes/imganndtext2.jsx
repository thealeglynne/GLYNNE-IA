'use client';

import Image from 'next/image';

export default function TextImageSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white">
      
      {/* Imagen — más protagonista */}
      <div className="flex-1 flex items-center justify-center p-4 order-2 md:order-2">
        <div style={{ width: '90%' }}> {/* 👈 Imagen más grande */}
          <Image
            src="/GTLYSTT.png"
            alt="Interfaz GNDI IA conversacional"
            width={800}
            height={800}
            className="object-contain w-full h-auto select-none"
            unoptimized
          />
        </div>
      </div>

      {/* Texto a la izquierda */}
      <div className="flex-1 flex items-center justify-center text-center md:text-left p-4 order-1 md:order-1">
        <div className="max-w-lg">
          <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
            Conversa, crea y transforma con <strong className="text-black">GNDI</strong>
          </h2>

          <p className="text-black text-base md:text-lg lg:text-xl leading-relaxed">
            Con <strong>GNDI</strong> podrás no solo analizar tu negocio, sino también 
            <strong> conversar y crear ideas</strong> directamente con él.  
            Gracias a nuestro sistema <strong>STT (Speech-to-Text)</strong>, podrás hablarle 
            como si fuera un <strong>asistente real</strong> que entiende tu contexto y propone soluciones.  
          
          </p>
        </div>
      </div>
    </section>
  );
}
