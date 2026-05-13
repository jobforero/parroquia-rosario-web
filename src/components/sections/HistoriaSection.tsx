import Link from "next/link";
import Image from "next/image";
import { capillas } from "../../lib/data";

export default function HistoriaSection() {
  return (
    <section id="historia" className="relative py-24">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/IMG_6727_Pueblo_que_camina.JPG"
          alt="Procesión de la Parroquia"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/90" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
            Nuestra Historia
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              La Parroquia Nuestra Señora del Rosario en Torrijos Carter tiene
              una rica historia de fe y servicio a la comunidad. Fundada con el
              propósito de brindar un espacio sagrado para la oración y el
              encuentro comunitario.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              A lo largo de los años, hemos crecido hasta incluir{" "}
              {capillas.length} hermosas capillas, cada una dedicada a
              diferentes advocaciones marianas y santos, reflejando la diversa
              espiritualidad de nuestra comunidad.
            </p>
            <div className="text-center">
              <Link
                href="/historia"
                className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-colors shadow-lg"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}