"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "GLY-IA SPEACH Auditor",
    video:
      "https://res.cloudinary.com/dpdyco5po/video/upload/f_auto,q_auto/ttsVideo_aqnbij.mp4",
    description:
      "Con GLY-AI podrás tener una conversación que te ayudará a entender cómo integrar la inteligencia artificial en tus procesos. Detecta cuellos de botella, analiza áreas clave de tu empresa y ofrece una nueva perspectiva de mejora, todo en un diálogo natural como si hablaras con un asesor real.",
    bullets: [
      "Convierte tu voz en diagnósticos accionables al instante.",
      "Rescata información clave de tus procesos y detecta fallas.",
      "Genera un resumen inicial que te prepara para la transformación con IA.",
    ],
    image: "/interfaz.png",
    extraText:
      "Nuestro agente de voz es como un consultor digital que entiende tu negocio y te da un primer diagnóstico preciso para iniciar tu transformación.",
  }
  ,
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
    image: "/auditoiaejemploServise.png",
    extraText:
      "Aquí se convierte el diagnóstico en acción: pasamos de detectar problemas a diseñar soluciones concretas y escalables.",
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
    image: "/descripcionDB.png",
    extraText:
      "Con nuestro analizador de bases de datos, lo complejo se vuelve simple: descubre lo que tus datos esconden y conviértelo en ventaja.",
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
                  Interfaz inicial de interacción con GLY-IA
                </h2>
                <img
                  src="/menuIas.png"
                  alt="Intro GLY-IA"
                  className="rounded-2xl shadow-lg w-full h-auto max-h-[720px] object-contain"
                />
              </div>

              <div className="w-full md:w-[40%] text-center md:text-left">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Aquí podrás explorar nuestros tres servicios de IA:  
el que te enseña, el que te ayuda y el que te analiza.  
Una experiencia completa para descubrir cómo la inteligencia artificial puede potenciar tus procesos desde el primer momento.

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

          {/* Sección debajo del card (default) */}
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

          {/* Extra SOLO debajo del segundo video */}
          {index === 1 && (
            <motion.div
              className="w-full max-w-5xl flex flex-col md:flex-row-reverse items-center mt-12 gap-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/aditoriaEjemplo2.png"
                  alt="Sección extra"
                  className="rounded-2xl shadow-md w-full h-auto max-h-[600px] object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-gray-700 text-lg">
                  Esta es una sección adicional que refuerza la propuesta del
                  auditor, mostrando cómo la IA no solo analiza, sino que también
                  propone acciones claras para transformar la operación.
                </p>
              </div>
            </motion.div>
          )}

          {/* DOS extras SOLO debajo del tercer video */}
          {index === 2 && (
            <>
              <motion.div
                className="w-full max-w-5xl flex flex-col md:flex-row items-center mt-12 gap-6"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src="/DBanalizer2.png"
                    alt="Sección extra 1"
                    className="rounded-2xl shadow-md w-full h-auto max-h-[600px] object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-gray-700 text-lg">
                    Nuestra IA organiza y limpia tus datos dispersos,
                    permitiéndote tener una única fuente de verdad para tomar  
                    decisiones más rápidas y seguras.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="w-full max-w-5xl flex flex-col md:flex-row-reverse items-center mt-12 gap-6"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src="/resumenDB.png"
                    alt="Sección extra 2"
                    className="rounded-2xl shadow-md w-full h-auto max-h-[600px] object-contain"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-gray-700 text-lg">
                    Los reportes inteligentes transforman datos complejos en
                    visualizaciones claras y accionables que tu equipo puede
                    entender y aplicar al instante.
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
