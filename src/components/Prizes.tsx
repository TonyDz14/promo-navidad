import { Sparkles, Award } from 'lucide-react';

interface PrizesProps {
  onRegisterClick: () => void;
}

const prizes = [
  {
    name: 'Aceite de coco',
    image: '🥥',
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    name: 'Café de especialidad',
    image: '☕',
    gradient: 'from-amber-600 to-orange-700'
  },
  {
    name: 'Harina de coco',
    image: '🌾',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    name: 'Azúcar de coco',
    image: '🍯',
    gradient: 'from-emerald-400 to-green-600'
  }
];

export default function Prizes({ onRegisterClick }: PrizesProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InN0YXJzIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">PREMIOS EXCLUSIVOS</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            La canasta consta de los siguientes premios
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2">
                <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <span className="text-6xl">{prize.image}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{prize.name}</h3>

                <button className={`w-full py-3 bg-gradient-to-r ${prize.gradient} text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN FINAL → ABRIR MODAL */}
        <div className="text-center">
          <button
            onClick={onRegisterClick}
            className="group relative px-12 py-5 bg-white text-green-700 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Empecemos
              <Sparkles className="w-5 h-5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
