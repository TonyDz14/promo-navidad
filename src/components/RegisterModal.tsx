import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Datos del formulario:", Object.fromEntries(data.entries()));

    // MOSTRAR MENSAJE DE ÉXITO
    setSuccess(true);

    // Cerrar modal después de 2.3 segundos
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* PANEL IZQUIERDO */}
        <div className="bg-emerald-600 text-white p-6 md:p-8 flex flex-col justify-between">

          {/* SI HAY ÉXITO: Mostrar mensaje motivador */}
          {success ? (
            <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-amber-300 mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold mb-2">
                ¡Registro exitoso! 
              </h2>
              <p className="text-emerald-100">
                Gracias por participar.  
                ¡Que la magia de la navidad llegue a tu mesa! 
              </p>
            </div>
          ) : (
            <>
              {/* TITULO + CERRAR */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold leading-snug">
                    La magia de la navidad
                    <br />
                    empieza en tu mesa
                  </h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="ml-4 rounded-full bg-white/10 hover:bg-white/20 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm mb-4 text-emerald-100">
                  Completa tus datos y participa por la canasta navideña.
                </p>

                {/* FORMULARIO */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Nombre completo"
                    className="w-full rounded-md border border-emerald-200 bg-white/95 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <input
                    name="edad"
                    type="number"
                    placeholder="Edad"
                    className="w-full rounded-md border border-emerald-200 bg-white/95 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <input
                    name="correo"
                    type="email"
                    required
                    placeholder="Correo electrónico"
                    className="w-full rounded-md border border-emerald-200 bg-white/95 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                 <input
                    name="mobile"
                    type="number"
                    placeholder="mobile"
                    className="w-full rounded-md border border-emerald-200 bg-white/95 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    name="distrito"
                    type="text"
                    placeholder="Distrito / Ciudad"
                    className="w-full rounded-md border border-emerald-200 bg-white/95 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <button
                    type="submit"
                    className="mt-3 w-full rounded-full bg-amber-400 text-emerald-900 font-bold py-2.5 text-sm shadow-md hover:bg-amber-500 transition"
                  >
                    Regístrate
                  </button>
                </form>
              </div>

              <p className="mt-4 text-[11px] text-emerald-100">
                Al registrarte aceptas las bases del sorteo y nuestras políticas de privacidad.
              </p>
            </>
          )}
        </div>

        {/* PANEL DERECHO */}
        <div className="relative hidden md:block bg-amber-50">
          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80"
            alt="Canasta navideña"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
        </div>
      </div>
    </div>
  );
}
