'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function MainGlyIAIntro() {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/chat`,
      },
    });
    if (error) console.error('Error al iniciar sesión con Google:', error.message);
  };

  useEffect(() => {
    const checkAndInsertUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        setEmail(user.email);
        const { data, error } = await supabase
          .from('GLNNEacces')
          .select('*')
          .eq('email', user.email)
          .single();

        if (!data && !error) {
          await supabase.from('GLNNEacces').insert([{ email: user.email }]);
        }

        router.push('/chat');
      }
    };

    checkAndInsertUser();
  }, []);

  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      <motion.div
        className="relative z-10 w-full max-w-5xl bg-white/70 backdrop-blur-xl ring-1 ring-black/10 shadow-xl rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight">
          Bienvenido a GLYNNE: Donde la automatización se convierte en inteligencia
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          No solo automatizamos. Repensamos la arquitectura de tu operación con tecnología que piensa, decide y actúa. En GLYNNE construimos ecosistemas de inteligencia artificial y automatización que anticipan los retos de tu empresa... y los resuelven.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          Desde diagnósticos asistidos por IA hasta arquitecturas full-stack autoescalables, transformamos tus procesos en una orquesta de eficiencia, escalabilidad y toma de decisiones autónoma. ¿La diferencia? GLYNNE no reacciona: predice, ejecuta y optimiza.
        </p>

        <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 mt-4 mb-2 mx-auto" />

        <p className="text-sm md:text-base text-gray-800 font-semibold">
          ¿No sabes por dónde empezar? Usa <span className="text-black font-bold">GLY-IA</span>, nuestra inteligencia artificial de diagnóstico que realiza una <u>preconsulta gratuita</u> de tu negocio. ¡Sin compromiso!
        </p>

        <button
          onClick={() => {
            localStorage.removeItem('glyiaChatClosed');
            setShowLoginModal(true);
          }}
          className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Consulta a GLY-IA</span>
        </button>
      </motion.div>

      {/* Modal de Login */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative bg-white p-6 shadow-2xl w-[90vw] max-w-md rounded-xl"
            >
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">Antes de comenzar</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Déjanos tu correo o inicia sesión con Google para recomendaciones personalizadas.
              </p>

              <button
                onClick={handleGoogleLogin}
                className="relative w-full py-3 px-6 rounded-xl bg-neutral-900 text-white font-semibold shadow-lg overflow-hidden transition group flex items-center justify-center gap-2"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <img src="/google.png" alt="Google" className="w-5 h-5 z-10" />
                <span className="z-10">Continuar con Google</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}