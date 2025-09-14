import { MapPin, Phone } from "lucide-react";
import { infoParroquia } from "../../lib/data";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-100">
            {infoParroquia.nombre}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            Torrijos Carter
          </p>
          <div className="flex justify-center space-x-6 text-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{infoParroquia.ubicacion}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>{infoParroquia.telefono}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
