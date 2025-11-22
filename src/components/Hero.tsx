import { Gift, Sparkles } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDE0NiwgNjAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      {/* Iconos decorativos */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Sparkles className="w-8 h-8 text-amber-400" />
      </div>

      <div className="absolute top-32 right-20 animate-bounce delay-100">
        <Sparkles className="w-6 h-6 text-orange-400" />
      </div>

      <div className="absolute bottom-20 left-32 animate-bounce delay-200">
        <Gift className="w-10 h-10 text-red-400" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 animate-fade-in">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Sorteo Navideño 2025
          </span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </div>

        {/* TÍTULO */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
            La magia de la navidad
          </span>
          <br />
          <span className="text-gray-800">empieza en tu mesa</span>
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
          Gana tu canasta navideña y disfruta una Navidad más natural con nuestros productos de coco premium
        </p>

        {/* BOTÓN — Abre modal */}
        <button
          onClick={onRegisterClick}
          className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200"
        >
          <span className="relative z-10">Regístrate Ahora</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Badges inferiores */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in-up delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>100% Natural</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
            <span>Productos Premium</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
            <span>Premios Garantizados</span>
          </div>
        </div>

      </div>
    </section>
  );
}
