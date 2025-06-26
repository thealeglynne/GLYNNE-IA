'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

export default function MainGlyIACompleto() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'ai',
      text: 'Hola, soy GLY-IA. Cuéntame brevemente qué proceso deseas automatizar.',
    },
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...newMessages,
        {
          from: 'ai',
          text: `Entendido. Estoy analizando cómo podrías automatizar: "${input}"...`,
        },
      ]);
    }, 1000);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleLeadSubmit = async () => {
    if (!email) return;
    const { error } = await supabase.from('GLNNEacces').insert([{ email }]);
    if (!error) {
      setShowLoginModal(false);
      setShowModal(true);
    } else {
      alert('Error al registrar el correo. Intenta de nuevo.');
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      },
    });
    if (error) console.error('Error al iniciar sesión con Google:', error.message);
  };

  useEffect(() => {
    const checkAndInsertUser = async () => {
      const closedChat = localStorage.getItem('glyiaChatClosed');
      if (closedChat === 'true') return;

      setLoadingChat(true);
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

        // Mostrar fondo inmediatamente y luego mostrar chat
        setShowModal(true);
        setShowLoginModal(false);
      }
      setTimeout(() => setLoadingChat(false), 600); // Simula breve carga visual
    };

    checkAndInsertUser();
  }, []);

  const handleCloseChat = () => {
    const confirmClose = window.confirm('¿Estás seguro de cerrar el chat? Se perderá esta conversación.');
    if (confirmClose) {
      localStorage.setItem('glyiaChatClosed', 'true');
      setShowModal(false);
      setTimeout(() => {
        setMessages([
          {
            from: 'ai',
            text: 'Hola, soy GLY-IA. Cuéntame brevemente qué proceso deseas automatizar.',
          },
        ]);
      }, 300);
    }
  };

  return (
    <main
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-12 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-6 bg-white/70 backdrop-blur-xl p-6 md:p-10 ring-1 ring-black/10 shadow-xl">
        <h2 className="text-base md:text-2xl font-semibold text-gray-800">
          Arquitecturas de Software que Piensan, Deciden y Ejecutan
        </h2>

        <div className="flex flex-col space-y-4 text-gray-700 text-xs md:text-sm leading-relaxed font-inter max-w-4xl">
          <p>
            En <b>GLYNNE</b> convertimos tu operación en un sistema inteligente que piensa, decide y actúa por ti.
            Automatiza procesos críticos, reduce costos operativos y toma decisiones con datos en tiempo real.
          </p>
          <img src="/logo2.png" alt="Logo GLY-IA" className="w-14 my-6 mx-auto" />
          <p className="font-semibold">
            ¿No estás seguro por dónde empezar? Usa <span className="text-black font-bold">GLY-IA</span>, nuestra inteligencia artificial de diagnóstico que realiza una <u>preconsulta gratuita</u> de tu negocio. ¡Sin compromiso!
          </p>
          <p className="text-base font-semibold text-black">
            En GLYNNE convertimos tu operación en una arquitectura automatizada lista para escalar.
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem('glyiaChatClosed');
            setShowLoginModal(true);
          }}
          className="relative mt-8 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
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
              className="relative bg-white p-6 shadow-2xl w-[90vw] max-w-md"
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

      {/* Modal de Chat */}
      <AnimatePresence>
        {showModal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[80vw] h-[80vh] bg-white shadow-2xl relative flex flex-col overflow-hidden border border-gray-300"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">GLY-IA | Asistente Empresarial</h3>
                <button
                  onClick={handleCloseChat}
                  className="text-gray-500 hover:text-red-500 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {loadingChat ? (
                <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                  Cargando asistente...
                </div>
              ) : (
                <>
                  <div ref={chatRef} className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50 space-y-4 text-sm">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`max-w-[75%] px-4 py-3 ${
                          msg.from === 'ai'
                            ? 'bg-white text-gray-900 self-start shadow border border-gray-200'
                            : 'bg-black text-white self-end ml-auto'
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Escribe tu consulta aquí..."
                      className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button onClick={handleSend} className="bg-black text-white px-5 py-3 hover:bg-gray-900 transition">
                      Enviar
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
