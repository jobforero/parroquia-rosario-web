import { capillas } from "../../lib/data";

export default function HistoriaSection() {
  return (
    <section
      id="historia"
      className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Nuestra Historia
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La Parroquia Nuestra Señora del Rosario en Torrijos Carter tiene
              una rica historia de fe y servicio a la comunidad. Fundada con el
              propósito de brindar un espacio sagrado para la oración y el
              encuentro comunitario.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A lo largo de los años, hemos crecido hasta incluir{" "}
              {capillas.length} hermosas capillas, cada una dedicada a
              diferentes advocaciones marianas y santos, reflejando la diversa
              espiritualidad de nuestra comunidad.
            </p>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
