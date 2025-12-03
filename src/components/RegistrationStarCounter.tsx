import { useEffect, useState } from "react";

export default function RegistrationStarCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setError(null);
        const res = await fetch(
          "http://localhost:4000/api/registrations/count"
        );
        if (!res.ok) throw new Error("Error al obtener el contador");
        const data = await res.json();
        setCount(data.total ?? 0);
      } catch (err) {
        console.error(err);
        setError("Error");
      }
    };

    fetchCount();
    const interval = setInterval(fetchCount, 15000);
    return () => clearInterval(interval);
  }, []);

  // animación bump cuando cambia
  useEffect(() => {
    if (count === null) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 300);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <div
        className="
        relative pointer-events-auto px-5 py-3 rounded-3xl 
        border border-white/20 shadow-xl shadow-black/50 
        backdrop-blur-2xl bg-white/20
        flex items-center gap-3
      "
      >
        {/* Luces suaves */}
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-20 w-20 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-20 w-20 rounded-full bg-amber-200/20 blur-3xl" />

        {/* Icono minimal */}
        <div
          className="
          relative flex h-10 w-10 items-center justify-center rounded-full 
          bg-gradient-to-br from-emerald-300 to-amber-300 opacity-80 
          shadow-md shadow-amber-500/20
        "
        >
          <div className="absolute inset-0 rounded-full border border-white/40 opacity-60" />

          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-emerald-950 drop-shadow-md"
          >
            <path
              fill="currentColor"
              d="M12 2.5L14.5 8l5.5.4-4.2 3.4 1.4 5.3L12 14.9 6.8 17.1 8.2 11.8 4 8.4 9.5 8 12 2.5z"
            />
          </svg>

          {/* Pulso */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300/30" />
        </div>

        {/* Texto */}
        <div className="relative flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white/80">
            Registro en vivo
          </span>

          <div className="flex items-baseline gap-1">
            <span
              className={`text-xl font-extrabold text-white drop-shadow-sm transition-transform duration-300 ${
                bump ? "scale-110" : "scale-100"
              }`}
            >
              {error ? "–" : count ?? "…"}
            </span>
            <span className="text-xs font-medium text-white/70">personas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
