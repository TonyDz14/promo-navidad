import { Facebook, Instagram, Mail, Leaf } from "lucide-react";
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
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid de 3 columnas */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Columna 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Bioselva essentials</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Productos naturales para una vida más saludable y sostenible.
            </p>
          </div>

          {/* Columna 2 - Redes */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>

            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/BioselvaPeru/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bioselva/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* TikTok (antes Mail) */}
              <a
                href="https://www.tiktok.com/@bioselvaessentials"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <TikTok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Columna 3 - Términos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Términos y Condiciones</h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                • Bases del sorteo
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • Políticas de privacidad
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                • www.bioselva.pe
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2025 Bioselva Essentials. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Sorteo válido del 7 al 20 de diciembre de 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
