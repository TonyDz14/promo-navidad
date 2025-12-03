interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section className="py-24">
      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge reemplazado por el logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-40 h-auto drop-shadow-lg"
          />
        </div>

        {/* TÍTULO */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-300 to-green-400">
            La magia de la navidad
          </span>
          <br />
          <span className="text-emerald-200 drop-shadow-lg">
            empieza en tu mesa
          </span>
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
          Gana tu canasta navideña y disfruta una Navidad más natural con
          nuestros productos Bioselva Essentials.
        </p>

        {/* BOTÓN */}
        <button
          onClick={onRegisterClick}
          className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200"
        >
          <span className="relative z-10">Regístrate Ahora</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Badges inferiores */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-green-100 animate-fade-in-up delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>100% Natural</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
            <span>Productos Premium</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
            <span>Premios Garantizados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
