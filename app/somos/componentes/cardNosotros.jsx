'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserTie, FaBullseye, FaEye, FaStar, FaBalanceScale, FaHistory, FaFlagCheckered,
  FaBuilding, FaLaptopCode, FaBrain, FaFlask, FaGlobe
} from 'react-icons/fa';

const services = [
  {
    icon: <FaUserTie size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Quiénes Somos',
    description: 'En GLYNNE AI no seguimos tendencias: las creamos.',
    detail: 'Somos una compañía enfocada en diseñar arquitecturas de software escalables e implementar inteligencia artificial aplicada a procesos empresariales. No vendemos herramientas genéricas: creamos sistemas que evolucionan con tu negocio, anticipan problemas y generan autonomía operativa.'
  },
  {
    icon: <FaBullseye size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Nuestra Misión',
    description: 'Transformamos la forma en que operan las empresas.',
    detail: 'Nuestra misión es integrar la automatización inteligente en cada área de la organización para que puedan escalar más rápido, reducir fricciones y tomar mejores decisiones con datos en tiempo real.'
  },
  {
    icon: <FaEye size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Nuestra Visión',
    description: 'Liderar la nueva era de negocios autónomos.',
    detail: 'Queremos que las organizaciones se gestionen como una ciudad viva: nodos, flujos y agentes inteligentes trabajando en armonía para lograr eficiencia, innovación y crecimiento sostenido a nivel global.'
  },
  {
    icon: <FaStar size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Qué Nos Hace Diferentes',
    description: 'Arquitecturas modulares + IA aplicada a procesos críticos.',
    detail: 'Diseñamos arquitecturas escalables que se adaptan al crecimiento. Usamos IA como agentes inteligentes, no simples chatbots. Integramos sistemas existentes (ERP, CRM, WhatsApp, Gmail, bases de datos). Vamos más allá de implementar: auditamos, diseñamos estrategias y aseguramos evolución continua.'
  },
  {
    icon: <FaBalanceScale size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Nuestros Valores',
    description: 'Innovación, escalabilidad y colaboración.',
    detail: `• Innovación sin límites: romper paradigmas con creatividad aplicada.
• Escalabilidad real: soluciones que crecen al ritmo de tu empresa.
• Autonomía inteligente: IA como motor, no accesorio.
• Impacto tangible: resultados en eficiencia, ingresos y satisfacción.
• Colaboración: trabajamos contigo, no solo para ti.`
  },
  {
    icon: <FaHistory size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Nuestra Historia',
    description: 'Nacimos para revolucionar la industria.',
    detail: 'GLYNNE AI nació de la visión de construir no solo software, sino un titán tecnológico capaz de transformar industrias. Lo que comenzó como un equipo de mentes inquietas, hoy se proyecta como un ecosistema de soluciones que marcan la diferencia en cómo las empresas trabajan y escalan.'
  },
  {
    icon: <FaFlagCheckered size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Cierre con Impacto',
    description: 'No perseguimos ideas pequeñas. Perseguimos impacto.',
    detail: 'Bienvenido a GLYNNE AI, donde tu empresa evoluciona hacia la autonomía. Nuestra meta no es acompañar el futuro, sino crearlo contigo ⚡.'
  },
  // 🔥 Nuevas 5 cards con info estatutaria y objeto social
  {
    icon: <FaBuilding size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Naturaleza Legal',
    description: 'GLYNNE TECH S.A.S, bajo la Ley 1258 de 2008.',
    detail: 'GLYNNE es una sociedad por acciones simplificada (S.A.S.) constituida legalmente en Colombia, regida por sus estatutos, la Ley 1258 de 2008 y demás disposiciones legales vigentes. En todos sus actos se identifica como sociedad S.A.S.'
  },
  {
    icon: <FaLaptopCode size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Objeto Social',
    description: 'Diseño y desarrollo de soluciones tecnológicas avanzadas.',
    detail: 'Nuestro objeto social es diseñar, desarrollar e implementar soluciones de software avanzadas y automatización de procesos empresariales mediante IA. Ayudamos a organizaciones a auditar, optimizar y transformar digitalmente sus operaciones con arquitecturas de vanguardia, microservicios, low-code y sistemas distribuidos.'
  },
  {
    icon: <FaBrain size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Especialización en IA',
    description: 'IA aplicada a la toma de decisiones y análisis predictivo.',
    detail: 'Integramos machine learning, NLP, visión computacional, análisis de comportamiento y motores de recomendación. Diseñamos modelos de IA a la medida para cada cliente, garantizando seguridad, interoperabilidad y escalabilidad en entornos productivos.'
  },
  {
    icon: <FaFlask size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Investigación y Desarrollo',
    description: 'Innovación tecnológica constante con I+D+i.',
    detail: 'GLYNNE impulsa proyectos de investigación, desarrollo e innovación (I+D+i) en inteligencia artificial, automatización y transformación digital. También ofrecemos capacitación, mentoría tecnológica y acompañamiento estratégico en la adopción de nuevas tecnologías.'
  },
  {
    icon: <FaGlobe size={40} className="text-orange-500 drop-shadow-sm" />,
    title: 'Domicilio y Expansión',
    description: 'Con sede en Madrid (Cundinamarca) y visión global.',
    detail: 'Nuestro domicilio principal está en Madrid (Cundinamarca), Colombia, con posibilidad de abrir sucursales y agencias en el país y en el exterior. Operamos con proyección internacional, creando alianzas estratégicas para liderar la revolución de la inteligencia artificial aplicada a la empresa moderna.'
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function NosotrosMain() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-[100px] bg-white">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center space-y-10 p-6 sm:p-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Nosotros
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-base md:text-lg">
            GLYNNE AI no es una empresa tradicional de software: somos un movimiento que diseña la próxima generación de negocios autónomos con IA, integración y visión estratégica.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(service)}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-bold uppercase text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Popup con detalle mejorado */}
      <AnimatePresence>
        {selected && (
          <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
            {/* Fondo con animación */}
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />

            {/* Contenido */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-4/5 max-w-4xl bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-200"
              >
                <Dialog.Title className="text-2xl font-extrabold mb-4 text-gray-900">
                  {selected?.title}
                </Dialog.Title>
                <Dialog.Description className="text-gray-700 text-base whitespace-pre-line leading-relaxed">
                  {selected?.detail}
                </Dialog.Description>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
