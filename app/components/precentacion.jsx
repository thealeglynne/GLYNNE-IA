'use client';

export default function MainGlyIAIntro() {
  const handleRedirect = () => {
    window.location.href = 'https://gly-ai-arq.vercel.app/';
  };

  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white"
      style={{
        backgroundImage: "url('/fig.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur de fondo */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3.7px] z-0" />

      {/* Contenido principal */}
      <div
        className="relative z-10 w-full max-w-5xl bg-white/70 backdrop-blur-xl ring-1 ring-black/10 shadow-xl rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center justify-center space-y-6"
      >
        <h2 className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight">
          Bienvenido a GLYNNE: Donde la automatización se convierte en inteligencia
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          No solo automatizamos. Repensamos la arquitectura de tu operación con tecnología que piensa, decide y actúa. En GLYNNE construimos ecosistemas de inteligencia artificial y automatización que anticipan los retos de tu empresa... y los resuelven.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
          Desde diagnósticos asistidos por IA hasta arquitecturas full-stack autoescalables, transformamos tus procesos en una orquesta de eficiencia, escalabilidad y toma de decisiones autónoma. ¿La diferencia? GLYNNE no reacciona: predice, ejecuta y optimiza.
        </p>

        <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 mt-4 mb-2 mx-auto" />

        <p className="text-sm md:text-base text-gray-800 font-semibold">
          ¿No sabes por dónde empezar? Usa <span className="text-black font-bold">GLY-IA</span>, nuestra inteligencia artificial de diagnóstico que realiza una <u>preconsulta gratuita</u> de tu negocio. ¡Sin compromiso!
        </p>

        <button
          onClick={handleRedirect}
          className="relative mt-6 px-10 py-4 text-base font-semibold bg-black text-white shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Consulta a GLY-IA</span>
        </button>
      </div>
    </main>
  );
}
