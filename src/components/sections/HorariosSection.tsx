import { Calendar } from "lucide-react";
import { infoParroquia } from "../../lib/data";

export default function HorariosSection() {
  return (
    <section
      id="horarios"
      className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Horarios de Misas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Misas Dominicales */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Domingos
            </h3>
            <div className="space-y-3">
              {infoParroquia.horariosMisaDominical.map((horario, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                >
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{horario}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Misas de Semana */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Semana
            </h3>
            <div className="space-y-2">
              {infoParroquia.horariosMisaSemanal.map((horario, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 hover:bg-yellow-50 rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span className="text-gray-700 text-sm">{horario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
