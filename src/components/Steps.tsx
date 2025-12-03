import { Users, ListChecks, Gift, Facebook, Instagram } from "lucide-react";

interface StepsProps {
  onRegisterClick: () => void;
}

/* Ícono oficial de TikTok (SVG) */
const TikTok = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 256 256"
    fill="currentColor"
    className="hover:scale-110 transition"
  >
    <path d="M216 79.7c-22.1 0-40.2-18-40.2-40.2V24h-32v128a32 32 0 11-32-32h8V88h-8a64 64 0 1064 64V87.4a72.2 72.2 0 0040.2 12.3V79.7z" />
  </svg>
);

const steps = [
  {
    number: 1,
    icon: Users,
    title: "Síguenos",
    description: "",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: ListChecks,
    title: "Regístrate",
    description:
      "Registra tus datos al final de esta página y así estarás participando",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    icon: Gift,
    title: "Participa",
    description:
      "Tendrás más oportunidades de ganar. Los resultados serán el 20 de diciembre",
    color: "from-orange-500 to-red-500",
  },
];

export default function Steps({ onRegisterClick }: StepsProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-emerald-200 mb-4">
            Pasos del Sorteo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group h-full">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full min-h-[380px] flex flex-col">
                {/* Número */}
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Ícono */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-all duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {step.title}
                </h3>

                {/* TARJETA 1 — Síguenos */}
                {step.number === 1 ? (
                  <div className="flex flex-col items-center text-center mt-auto mb-auto">
                    <p className="text-gray-700 mb-4">
                      Síguenos en nuestras redes
                    </p>
                    <div className="flex items-center justify-center gap-6">
                      <Facebook className="w-8 h-8 text-blue-600 hover:scale-110 transition" />
                      <Instagram className="w-8 h-8 text-pink-500 hover:scale-110 transition" />
                      <TikTok />
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 text-center leading-relaxed mt-auto mb-auto">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN */}
        <div className="text-center mt-16">
          <button
            onClick={onRegisterClick}
            className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Comencemos
          </button>
        </div>
      </div>
    </section>
  );
}
