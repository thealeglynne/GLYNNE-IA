'use client';

export default function MainGlyIACompleto() {
  const handleRedirect = () => {
    window.location.href = 'https://gly-ai-arq.vercel.app/';
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white">
      {/* Contenido */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-6 p-6 sm:p-10">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900">
          Descubre cómo conectar tu empresa con IA de forma inteligente
        </h2>

        <div className="flex flex-col space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-inter max-w-3xl">
          <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 my-6 mx-auto" />

          <p className="font-medium">
            Tu empresa no necesita más herramientas aisladas. Necesita una red de nodos inteligentes, integrados y coordinados entre sí.
          </p>

          <p className="font-semibold">
            <span className="text-black font-bold">GLY-IA</span> analiza tu operación y te muestra qué procesos pueden convertirse en flujos orquestados con IA, integrando sistemas, APIs y agentes autónomos que trabajan juntos como un solo cerebro digital.
          </p>

          <p className="text-base font-semibold text-black">
            Desde bots conectados a CRM, hasta automatizaciones con LLMs y decisiones inteligentes entre áreas. Diagnóstico instantáneo. Arquitectura modular. Resultados medibles.
          </p>
        </div>

        <button
          onClick={handleRedirect}
          className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Analiza tu empresa con GLY-IA</span>
        </button>
      </div>
    </main>
  );
}
