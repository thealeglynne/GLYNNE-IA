'use client';

export default function MainGlyIAIntro() {
  const handleRedirect = () => {
    window.open('https://glynne-sst-ai-hsiy.vercel.app/', '_blank');
  };

  return (
    <main
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-white"
      style={{
        backgroundImage: "url('/scon.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blur del fondo completo */}
      <div className="absolute inset-0 backdrop-blur-[0px] z-0" />

      {/* Contenedor con imagen de fondo */}
      <div
        className="relative z-10 w-full max-w-5xl min-h-[70vh] rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center justify-center space-y-6 shadow-xl ring-1 ring-black/10 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/90/42/03/904203c11728db0d8f1a035129ca06d5.jpg')",
          backgroundSize: '200%',
          backgroundPosition: 'center -1000px',
        }}
      >
        {/* Blur overlay en vez de sombra negra */}
        <div className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/10 z-0" />

        {/* Contenido */}
        <div className="relative z-10">
          <h2 className="text-lg md:text-2xl font-bold text-white tracking-tight">
            Descubre el poder de la IA aplicada a tu negocio
          </h2>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
            Los ejemplos que ves en nuestros videos no son solo demostraciones:{" "}
            <span className="font-bold text-white">
              son herramientas reales que puedes probar ahora mismo
            </span>.
          </p>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
            En GLYNNE construimos soluciones de software e inteligencia artificial que
            <span className="font-semibold text-white"> analizan, optimizan y transforman</span> 
            procesos empresariales en ventas, soporte, operaciones y más.
          </p>

          <img
            src="/logo.png"
            alt="Logo GLY-IA"
            className="w-20 mt-4 mb-2 mx-auto"
          />

          <p className="text-sm md:text-base text-gray-100 font-semibold">
            ¿Quieres pasar de ver la teoría a{" "}
            <span className="text-white font-bold">usarla en tu negocio</span>?  
            Haz clic y prueba nuestras <u>IA de diagnóstico</u>.  
            <span className="text-white"> ¡Gratis y sin compromiso!</span>
          </p>

          <button
            onClick={handleRedirect}
            className="relative mt-6 px-10 py-4 text-base font-semibold bg-white text-black shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-black/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Probar ahora las IA</span>
          </button>
        </div>
      </div>
    </main>
  );
}
