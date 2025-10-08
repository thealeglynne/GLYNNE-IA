'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TextImageSection() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/servicesAI'); // 🔥 redirige en la misma pestaña
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white overflow-hidden">

      {/* Texto a la izquierda con animación */}
      <motion.div
        className="flex-1 flex items-center justify-center text-center md:text-left p-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl">
          <motion.h2
            className="text-black text-3xl md:text-3xl lg:text-5xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            BIENVENIDO A <span className="text-black font-bold">GLYNNE</span>
          </motion.h2>

          <motion.p
            className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
          Potenciamos tu empresa con la misma fuerza que la inteligencia artificial está transformando el mundo.
         
          </motion.p>

          {/* Botón con efecto de barrido + hover suave */}
          <motion.button
            onClick={handleRedirect}
            className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Comienza con GLY-AI</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Imagen a la derecha con animación responsive */}
      <motion.div
        className="flex-1 flex items-center justify-center p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          style={{ width: '50%' }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <Image
            src="/qrGLY.png"
            alt="Código QR GLY-AI"
            width={300}
            height={300}
            className="object-contain w-full h-auto select-none drop-shadow-lg"
            unoptimized
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
