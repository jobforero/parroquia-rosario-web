import { Phone, Instagram, Youtube, Facebook } from "lucide-react";
import { infoParroquia } from "../../lib/data";
import UbicacionLink from "../ui/UbicacionLink";
import WhatsAppLink from "../ui/WhatsAppLink";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-200">Contacto</h3>
            <div className="space-y-2">
              <UbicacionLink />
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{infoParroquia.telefono}</span>
              </p>
              <WhatsAppLink />
              <p className="text-sm text-blue-200">
                Email: {infoParroquia.email}
              </p>
              <p className="text-sm text-blue-200">
                Párroco: {infoParroquia.parroco}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-200">Sacramentos</h3>
            <div className="flex flex-col space-y-2 text-sm">
              {[
                { label: "Bautismo", href: "/sacramentos/bautismo" },
                { label: "Primera Comunión", href: "/sacramentos/primera-comunion" },
                { label: "Confirmación", href: "/sacramentos/confirmacion" },
                { label: "Matrimonio", href: "/sacramentos/matrimonio" },
                { label: "Unción de los Enfermos", href: "/sacramentos/uncion-enfermos" },
              ].map((s) => (
                <a key={s.href} href={s.href} className="text-blue-200 hover:text-yellow-300 transition-colors">
                  • {s.label}
                </a>
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
              <a
                href={`https://www.facebook.com/@${infoParroquia.redesSociales.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <Facebook className="w-6 h-6" />
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
            © 2025 {infoParroquia.nombre} - Torrijos Carter. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
