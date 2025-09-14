import { Instagram, Youtube } from "lucide-react";
import { capillas, infoParroquia } from "../../lib/data";

export default function HeroSection() {
  return (
    <section id="inicio" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8">
            Bienvenidos a Nuestra Comunidad de Fe
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            La Parroquia Nuestra Señora del Rosario en Torrijos Carter es un
            lugar sagrado donde la comunidad se reúne en oración, celebración y
            servicio. Con nuestras {capillas.length} hermosas capillas, cada una
            con su propia historia y devoción especial.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={`https://instagram.com/${infoParroquia.redesSociales.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              <span>Síguenos</span>
            </a>
            <a
              href="#documentales"
              className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              <span>Videos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
