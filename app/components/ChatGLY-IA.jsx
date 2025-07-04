'use client';

export default function MainGlyIACompleto() {
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

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-6 bg-white/70 backdrop-blur-xl p-6 sm:p-10 ring-1 ring-black/10 shadow-xl rounded-3xl">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          Arquitecturas de Software que Piensan, Deciden y Ejecutan
        </h2>

        <div className="flex flex-col space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-inter max-w-3xl">
          <img src="/logo2.png" alt="Logo GLY-IA" className="w-20 my-6 mx-auto" />
          <p className="font-semibold">
            ¿No estás seguro por dónde empezar? Usa{' '}
            <span className="text-black font-bold">GLY-IA</span>, nuestra inteligencia artificial de diagnóstico que realiza una{' '}
            <u>preconsulta gratuita</u> de tu negocio. ¡Sin compromiso!
          </p>
          <p className="text-base font-semibold text-black">
            En GLYNNE convertimos tu operación en una arquitectura automatizada lista para escalar.
          </p>
        </div>

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
