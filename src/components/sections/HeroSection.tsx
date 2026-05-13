import { Instagram, Youtube } from "lucide-react";
import { capillas, infoParroquia } from "../../lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[600px] flex items-center">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/Parroquia_DHR.jpg"
          alt="Altar Parroquia Nuestra Señora del Rosario"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Bienvenidos a Nuestra Comunidad de Fe
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed drop-shadow">
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
              className="flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>Síguenos</span>
            </a>
            <a
              href="#documentales"
              className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg"
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