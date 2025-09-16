"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "GLYNNE College — Introducción a la IA",
    video: "https://res.cloudinary.com/dpdyco5po/video/upload/Screen_Recording_2025-09-16_at_12.30.26_PM_izok7o.mp4",
    description:
      "Bienvenido a GLYNNE College, el espacio donde aprenderás todo sobre inteligencia artificial de manera práctica y aplicada. Aquí te introducimos al ecosistema de agentes inteligentes y herramientas de IA que transforman la forma de trabajar y aprender.",
    bullets: [
      "Explora los fundamentos de IA mientras interactúas con agentes inteligentes.",
      "Aprende a identificar problemas, analizarlos y convertirlos en soluciones con IA.",
      "Comienza tu camino en el aprendizaje práctico de ciencia de datos, machine learning y deep learning.",
    ],
    image: "/perfilCollege.png",
    extraText:
      "GLYNNE College te ofrece un primer contacto con la inteligencia artificial en acción, para que veas cómo la IA puede potenciar cualquier proceso o proyecto desde el primer momento.",
  },
  {
    title: "GLYNNE College — Auditoría y Aplicación",
    video:
      "https://res.cloudinary.com/dpdyco5po/video/upload/Screen_Recording_2025-09-16_at_12.41.07_PM_uknpmg.mp4",
    description:
      "En esta etapa aprenderás a transformar diagnósticos iniciales en planes de acción reales. Convertimos el conocimiento adquirido en arquitecturas escalables y soluciones de automatización aplicables a casos de estudio.",
    bullets: [
      "Convierte tus aprendizajes en proyectos de IA reales.",
      "Diseña arquitecturas modulares basadas en microservicios aplicando conceptos prácticos.",
      "Integra tus soluciones con sistemas reales como ERP, CRM y canales de comunicación.",
      "Aprende a crear propuestas técnicas que evolucionan junto con tus proyectos.",
    ],
    image: "/rl.png",
    extraText:
      "Esta sección muestra cómo pasar del aprendizaje a la práctica: la teoría se transforma en acción concreta y proyectos escalables.",
  },
  {
    title: "GLYNNE College — Análisis de Datos con IA",
    video:
      "https://res.cloudinary.com/dpdyco5po/video/upload/Screen_Recording_2025-09-16_at_12.42.11_PM_chn2t0.mp4",
    description:
      "Aquí aprenderás a analizar bases de datos con IA, encontrar patrones, generar insights y reportes prácticos que te permitirán tomar decisiones fundamentadas y estratégicas.",
    bullets: [
      "Detecta tendencias y patrones ocultos en datos complejos.",
      "Organiza y resume grandes volúmenes de información de manera clara.",
      "Identifica riesgos y oportunidades a través del análisis inteligente.",
      "Genera reportes y visualizaciones accionables para aplicar tus conocimientos.",
    ],
    image: "/desf.png",
    extraText:
      "Aprenderás a transformar datos en información valiosa: GLYNNE College convierte lo complejo en entendible y accionable, preparándote para proyectos reales de IA.",
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
        <div key={index} className="w-full flex flex-col items-center mb-16">
          {/* Sección superior SOLO para el primer servicio */}
          {index === 0 && (
            <motion.div
              className="w-full max-w-6xl flex flex-col md:flex-row items-center mb-12 gap-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative w-full md:w-[60%] flex flex-col items-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Bienvenido a GLYNNE College
                </h2>
                <img
                  src="/cardCollege.png"
                  alt="Intro GLYNNE College"
                  className="rounded-2xl shadow-lg w-full h-auto max-h-[720px] object-contain"
                />
              </div>

              <div className="w-full md:w-[40%] text-center md:text-left">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  En esta sección podrás aprender todo sobre inteligencia artificial, desde la teoría hasta la práctica, usando nuestros tres pilares: introducción, aplicación y análisis de datos. Cada video y módulo te guía paso a paso para que desarrolles habilidades reales que puedes aplicar en proyectos propios o profesionales.
                </p>
              </div>
            </motion.div>
          )}

          {/* Card de video */}
          <motion.div
            className="w-full max-w-5xl flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full">
              <video
                src={service.video}
                controls
                playsInline
                poster={service.video.replace(".mp4", ".jpg")}
                className="w-full h-auto object-contain max-h-[480px] rounded-t-2xl"
              />
            </div>

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

          {/* Sección debajo del card */}
          <motion.div
            className={`w-full max-w-5xl flex flex-col md:flex-row items-center mt-8 gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-md w-full h-auto max-h-[600px] object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-gray-700 text-lg">{service.extraText}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
