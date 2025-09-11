"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "GLY-IA SPEACH Auditor",
    video:
      "https://res.cloudinary.com/dpdyco5po/video/upload/f_auto,q_auto/ttsVideo_aqnbij.mp4",
    description:
      "Un agente de voz especializado en comprender tu negocio: escucha, interpreta y realiza una auditoría inicial de tus procesos para mostrarte en qué puedes mejorar y cómo adaptarte a la era de la IA.",
    bullets: [
      "Convierte tu voz en diagnósticos accionables al instante.",
      "Rescata información clave de tus procesos y detecta fallas.",
      "Genera un resumen inicial que te prepara para la transformación con IA.",
    ],
  },
  {
    title: "GLY-IA Auditor",
    video:
      "https://res.cloudinary.com/dpdyco5po/video/upload/auditoria_-_Compressed_with_FlexClip_zau8id.mp4",
    description:
      "Transforma la auditoría inicial en una arquitectura de software y un plan de automatización diseñado para escalar y adaptarse a tu negocio.",
    bullets: [
      "Convierte diagnósticos en propuestas técnicas claras.",
      "Diseña arquitecturas modulares basadas en microservicios.",
      "Integra con ERP, CRM, WhatsApp, Gmail y más.",
      "Entrega soluciones personalizadas que evolucionan contigo.",
    ],
  },
  {
    title: "GLY-IA DB Analyzer",
    video:
      "https://res.cloudinary.com/dpdyco5po/video/upload/analisisDB_cjsyxf.mp4",
    description:
      "Analiza tus bases de datos con IA para encontrar patrones, estructurar la información y generar resúmenes densos que facilitan decisiones estratégicas.",
    bullets: [
      "Detecta tendencias ocultas en ventas, clientes y operaciones.",
      "Organiza y resume grandes volúmenes de datos en insights claros.",
      "Identifica riesgos y oportunidades que tu equipo no ve a simple vista.",
      "Convierte la información en reportes listos para la acción.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServiciosIA() {
  return (
    <section className="relative w-full flex flex-col items-center px-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="w-full max-w-5xl flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg mb-12 overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Video arriba, responsivo */}
          <div className="w-full">
            <video
              src={service.video}
              controls
              playsInline
              poster={service.video.replace(".mp4", ".jpg")} // captura de Cloudinary como miniatura
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Texto abajo */}
          <div className="w-full p-6 text-center bg-white">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 uppercase">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              {service.description}
            </p>
            <ul className="space-y-2 text-gray-800 text-sm md:text-base">
              {service.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start justify-center text-left md:justify-start"
                >
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

