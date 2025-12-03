import { Facebook, Instagram, Mail, Leaf } from "lucide-react";

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
              Productos naturales de coco premium para una vida más saludable y
              sostenible.
            </p>
          </div>

          {/* Columna 2 - Redes */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
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
          <p>© 2024 Bioselva Essentials. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Sorteo válido del 1 al 20 de diciembre de 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
