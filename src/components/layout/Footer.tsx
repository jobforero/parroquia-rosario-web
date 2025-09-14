import { MapPin, Phone, Instagram, Youtube } from "lucide-react";
import { infoParroquia } from "../../lib/data";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-200">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{infoParroquia.ubicacion}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{infoParroquia.telefono}</span>
              </p>
              <p className="text-sm text-blue-200">
                Email: {infoParroquia.email}
              </p>
              <p className="text-sm text-blue-200">
                Párroco: {infoParroquia.parroco}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-200">
              Servicios
            </h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              {infoParroquia.servicios.slice(0, 6).map((servicio, index) => (
                <p key={index} className="text-blue-200">
                  • {servicio}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-200">Síguenos</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href={`https://instagram.com/${infoParroquia.redesSociales.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={`https://youtube.com/@${infoParroquia.redesSociales.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-blue-200">
              Instagram: {infoParroquia.redesSociales.instagram}
            </p>
            <p className="text-sm text-blue-200">
              YouTube: {infoParroquia.redesSociales.youtube}
            </p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 {infoParroquia.nombre} - Torrijos Carter. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
