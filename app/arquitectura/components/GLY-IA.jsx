'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function MainGlyIACompleto() {
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
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white">
      
      {/* Contenido */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-6 p-6 sm:p-10">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          ¿Quieres darte una idea?
        </h2>

        <div className="flex flex-col space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-inter max-w-3xl">
          <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 my-6 mx-auto" />
          <p className="font-semibold">
            Imagina que tu empresa es una ciudad: la arquitectura de software son los edificios, los flujos, las bases. Pero lo que realmente le da vida a todo… es la inteligencia artificial.
          </p>
          <p className="font-semibold">
            <span className="text-black font-bold">GLY-IA</span> es nuestra IA de diagnóstico que analiza tu negocio y te muestra por dónde podrías empezar a automatizar. Gratis, en segundos, sin fricción.
          </p>
          <p className="text-base font-semibold text-black">
            Te damos una visión clara, precisa y personalizada. ¿Listo para ver el potencial oculto de tu operación?
          </p>
        </div>

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
      </div>

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
