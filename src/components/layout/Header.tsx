import { Phone } from "lucide-react";
import { infoParroquia } from "../../lib/data";
import UbicacionLink from "../ui/UbicacionLink";
import WhatsAppLink from "../ui/WhatsAppLink";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-100"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {infoParroquia.nombre}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-2 md:space-y-0 text-sm md:text-lg">
            <UbicacionLink />
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>{infoParroquia.telefono}</span>
            </div>
            <WhatsAppLink />
          </div>
        </div>
      </div>
    </header>
  );
}
