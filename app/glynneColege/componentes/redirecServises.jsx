'use client';

export default function MainGlyIAIntro() {
  const handleRedirect = () => {
    window.open('https://glynne-college.vercel.app/', '_blank');
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
            "url('https://i.pinimg.com/1200x/cc/b7/f3/ccb7f3afcaafb369805926f43642cb79.jpg')",
          backgroundSize: '200%',
          backgroundPosition: 'center -1000px', 
        }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/10 z-0" />

        {/* Contenido */}
        <div className="relative z-10">
          <h2 className="text-lg md:text-2xl font-bold text-white tracking-tight">
            Bienvenido a GLYNNE College
          </h2>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
            Aquí aprenderás todo sobre <span className="font-bold text-white">inteligencia artificial aplicada</span> de manera práctica y efectiva. 
            Los ejemplos que ves en nuestros videos son <span className="font-bold text-white">proyectos reales y funcionales</span> que puedes replicar y experimentar.
          </p>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
            En GLYNNE College descubrirás cómo crear y usar agentes inteligentes, construir pipelines de datos, diseñar arquitecturas escalables y aplicar IA en procesos reales de tu negocio o proyectos personales.
          </p>

          <img
            src="/logo.png"
            alt="Logo GLY-IA"
            className="w-20 mt-4 mb-2 mx-auto"
          />

          <p className="text-sm md:text-base text-gray-100 font-semibold">
            Da el siguiente paso: <span className="text-white font-bold">convierte la teoría en práctica</span> con nuestras 
            <u>IA de diagnóstico y proyectos interactivos</u>.  
            <span className="text-white"> ¡Aprende haciendo, gratis y sin compromiso!</span>
          </p>

          <button
            onClick={handleRedirect}
            className="relative mt-6 px-10 py-4 text-base font-semibold bg-white text-black shadow-xl overflow-hidden rounded-xl group transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-black/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Explorar GLYNNE College</span>
          </button>
        </div>
      </div>
    </main>
  );
}
