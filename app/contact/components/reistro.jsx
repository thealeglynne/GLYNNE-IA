'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from './header'

export default function RegistroContacto({ onComplete }) {
  const [showModal, setShowModal] = useState(true);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    avatarUrl: '/logo2.png',
    telefono: '',
    empresa: '',
    asunto: '',
    ciudad: '',
    pais: '',
  });

  const handleClose = () => {
    setShowModal(false);
    onComplete?.(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const paises = ['Colombia', 'México', 'Argentina', 'Chile', 'España', 'Estados Unidos'];
  const ciudades = ['Bogotá', 'Medellín', 'CDMX', 'Buenos Aires', 'Santiago', 'Madrid', 'Miami'];

  // Función para generar el mensaje y abrir WhatsApp
  const enviarWhatsApp = () => {
    const mensaje = `
Hola, mi nombre es ${formData.nombre}.
Correo: ${formData.correo}
Teléfono: ${formData.telefono}
Empresa: ${formData.empresa}
Asunto: ${formData.asunto}
Ciudad: ${formData.ciudad}
País: ${formData.pais}
    `;
    const numero = '+573123455328';
    const url = `https://wa.me/${numero.replace('+', '')}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    enviarWhatsApp();
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl w-[80vw] max-w-5xl px-[4vw] py-[5vh] text-gray-800"
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-full flex flex-col items-center gap-4">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-center text-black"
                style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.4rem)', lineHeight: '1.2' }}
              >
                Completa tu registro de contacto
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Image
                  src={formData.avatarUrl}
                  alt="Logo"
                  width={60}
                  height={60}
                  priority
                  className="object-contain"
                />
              </motion.div>

              <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl grid grid-cols-6 gap-4 mt-4"
              >
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="col-span-3 p-2 border rounded-lg text-sm"
                  required
                />

                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  className="col-span-3 p-2 border rounded-lg text-sm"
                  required
                />

                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="col-span-2 p-2 border rounded-lg text-sm"
                  required
                />

                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Empresa o negocio"
                  className="col-span-4 p-2 border rounded-lg text-sm"
                  required
                />

                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto de automatización"
                  className="col-span-4 p-2 border rounded-lg text-sm"
                  required
                />

                <select
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  className="col-span-2 p-2 border rounded-lg text-sm"
                  required
                >
                  <option value="">País</option>
                  {paises.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <select
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="col-span-2 p-2 border rounded-lg text-sm"
                  required
                >
                  <option value="">Ciudad</option>
                  {ciudades.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <motion.a
                  href="https://glynne-sst-ai-hsiy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="col-span-2 p-2 rounded-lg font-medium text-black bg-white border border-black hover:bg-gray-100 transition text-xs leading-tight text-center"
                >
                  Habla con nuestro asesor para despejar dudas antes de agendar una cita
                </motion.a>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.03 }}
                  type="submit"
                  className="col-span-6 px-6 py-2 rounded-full font-semibold text-white bg-black hover:bg-gray-900 transition mt-2 text-sm"
                >
                  Guardar y Continuar
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
