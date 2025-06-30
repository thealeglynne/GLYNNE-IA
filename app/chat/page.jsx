'use client';

import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

export default function GlyIAChat() {
  const [showPopup, setShowPopup] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        '¡Hola! Soy GLY-IA 🤖. Estoy aquí para ayudarte a automatizar tu empresa. ¿Cómo puedo empezar a conocerte?'
    }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = {
        role: 'assistant',
        content: `Gracias por compartir: "${input}". ¿Podrías contarme un poco más?`,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);

    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Popup Introductorio */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="bg-white w-[90vw] max-w-lg p-6 rounded-xl shadow-2xl text-center"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Bienvenido a GLY-IA
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Nuestra inteligencia artificial necesita conocer algunos detalles sobre tu empresa para ayudarte mejor. <br />
                Esto se hará a través de una breve conversación. ¿Listo para comenzar?
              </p>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setShowChat(true);
                }}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Comenzar conversación
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat flotante */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-40 w-[360px] max-h-[80vh] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden border border-gray-300"
          >
            <div className="bg-black text-white px-4 py-3 text-sm font-semibold">
              Chat con GLY-IA
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`whitespace-pre-wrap px-4 py-2 rounded-xl shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-black text-white self-end ml-auto'
                      : 'bg-gray-200 text-gray-900 self-start mr-auto'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-gray-200 bg-white px-3 py-2"
            >
              <textarea
                rows={1}
                placeholder="Escribe tu respuesta..."
                className="w-full p-2 resize-none text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
