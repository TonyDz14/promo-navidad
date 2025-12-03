import { Sparkles, Award } from "lucide-react";
import organicoLitro from "../assets/organicoLitro.png";
import cafe from "../assets/cafe.png";
import harinaCoco from "../assets/harinaCoco.png";
import azucar from "../assets/azucar.png";
import oliva from "../assets/oliva.png";
import cocoRallado from "../assets/cocoRallado.png";
import salExtra from "../assets/salExtra.png";
import salParrillera from "../assets/salParrillera.png";

interface PrizesProps {
  onRegisterClick: () => void;
}

const prizes = [
  {
    name: "Aceite de coco orgánico 1L",
    image: organicoLitro,
    color: "bg-emerald-700", // verde navideño
  },

  {
    name: "Harina de coco 250g",
    image: harinaCoco,
    color: "bg-red-700", // rojo navidad
  },
  {
    name: "Azúcar de coco orgánica 500g",
    image: azucar,
    color: "bg-emerald-700", // verde navideño
  },
  {
    name: "Café de especialidad molido 250g",
    image: cafe,
    color: "bg-red-700", // rojo navidad
  },
  {
    name: "Aceite de oliva 1L",
    image: oliva,
    color: "bg-emerald-700", // verde navideño
  },
  {
    name: "Sal rosada extra fina 700g",
    image: salExtra,
    color: "bg-red-700", // rojo navidad
  },

  {
    name: "Coco rallado 250g",
    image: cocoRallado,
    color: "bg-emerald-700", // verde navideño
  },

  {
    name: "Sal rosada parrillera 700g",
    image: salParrillera,
    color: "bg-red-700", // rojo navidad
  },
];

export default function Prizes({ onRegisterClick }: PrizesProps) {
  return (
    <section className="py-24">
      {/* Fondos suaves */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 -top-32 w-72 h-72 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full bg-teal-400/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-lime-300/20 blur-3xl" />
      </div>

      {/* Degradado arriba/abajo para foco hacia el centro */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full mb-5 border border-white/20">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              Premios exclusivos
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            La canasta navideña incluye
            <span className="block text-emerald-200">
              8 productos Bioselva seleccionados
            </span>
          </h2>

          <p className="text-emerald-50/90 max-w-2xl mx-auto text-base md:text-lg">
            Participa en la promoción y entra al sorteo de una canasta repleta
            de productos naturales, perfectos para cerrar el año con salud y
            sabor.
          </p>
        </div>

        {/* Carrusel automático: UNA SOLA FILA */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-10 w-max scroll-animate items-center">
            {[...prizes, ...prizes].map((prize, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0
                  w-60 md:w-72
                  transform transition-transform duration-500
                  ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}
                  hover:rotate-0 hover:scale-105
                `}
              >
                <div className="bg-white/95 rounded-3xl p-7 md:p-8 shadow-2xl flex flex-col items-center justify-center border border-emerald-100/60">
                  {/* CÍRCULO CON COLOR NAVIDEÑO SÓLIDO */}
                  <div
                    className={`
                      w-40 h-40 md:w-48 md:h-48
                      mb-6 rounded-full
                      ${prize.color}
                      flex items-center justify-center shadow-xl
                    `}
                  >
                    <img
                      src={prize.image}
                      alt={prize.name}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* TEXTO */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 text-center">
                    {prize.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón final */}
        <div className="text-center mt-10">
          <button
            onClick={onRegisterClick}
            className="group relative inline-flex items-center gap-3 px-12 py-4 rounded-full bg-white text-emerald-700 font-bold text-lg shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.65)] transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Empecemos
              <Sparkles className="w-5 h-5" />
            </span>
          </button>

          <p className="mt-3 text-emerald-100/90 text-sm md:text-base">
            Completa tus datos y participa en el sorteo de la canasta Bioselva.
          </p>

          <p className="mt-1 text-emerald-200 font-semibold text-sm md:text-base">
            Valor referencial de la canasta:{" "}
            <span className="text-white">S/ 238.10</span>
          </p>
        </div>
      </div>
    </section>
  );
}
