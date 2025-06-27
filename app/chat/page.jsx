'use client';

import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hola, soy GLY-IA. ¿En qué puedo ayudarte hoy?' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const [showExitModal, setShowExitModal] = useState(false);
  const [pendingExit, setPendingExit] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = {
        role: 'assistant',
        content: `Procesando tu solicitud: "${input}"`,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);

    setInput('');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const confirmExit = () => {
    setShowExitModal(false);
    handleLogout();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Interceptar navegación/salida
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Esto no muestra mensaje, solo evita salida
      setPendingExit(true);
      setShowExitModal(true);
      return '';
    };

    const disableUnload = () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      disableUnload();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#f7f7f8] text-black relative">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">GLY-IA Chat</h1>
        <button
          onClick={() => setShowExitModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-3xl mx-auto px-4 py-3 rounded-xl whitespace-pre-wrap shadow-sm ${
              msg.role === 'user'
                ? 'bg-black text-white self-end'
                : 'bg-gray-200 text-gray-900 self-start'
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="bg-white px-4 py-4 border-t border-gray-200"
      >
        <textarea
          rows={1}
          className="w-full resize-none p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </form>

      {/* 🔒 Modal de Confirmación */}
      {showExitModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90vw] max-w-md rounded-2xl shadow-xl p-6 text-center space-y-4">
            <h2 className="text-lg font-bold text-gray-800">¿Cerrar sesión?</h2>
            <p className="text-sm text-gray-600">
              Si sales del chat, tu sesión se cerrará. ¿Deseas continuar?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={confirmExit}
                className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
              >
                Sí, cerrar sesión
              </button>
              <button
                onClick={() => {
                  setShowExitModal(false);
                  setPendingExit(false);
                }}
                className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
