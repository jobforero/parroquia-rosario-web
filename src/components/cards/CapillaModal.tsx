import { Calendar } from "lucide-react";
import { Capilla } from "../../lib/data";

interface CapillaModalProps {
  capilla: Capilla;
  onClose: () => void;
}

export default function CapillaModal({ capilla, onClose }: CapillaModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-blue-900">
              {capilla.nombre}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>
          <p className="text-blue-700 font-semibold mb-2">
            {capilla.descripcion}
          </p>
          <p className="text-yellow-600 font-medium mb-4">
            Patrona: {capilla.patrona}
          </p>

          {capilla.fechaCelebracion && (
            <p className="text-green-600 font-medium mb-4">
              🎉 Fiesta Patronal: {capilla.fechaCelebracion}
            </p>
          )}

          <div className="h-48 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-6xl">⛪</span>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-gray-900 mb-2">Historia:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              {capilla.historia}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-gray-900 mb-2">Horarios de Misa:</h4>
            <ul className="text-sm text-gray-600">
              {capilla.horariosMisa.map((horario, index) => (
                <li key={index} className="flex items-center space-x-2 mb-1">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{horario}</span>
                </li>
              ))}
            </ul>
          </div>

          {capilla.actividades && capilla.actividades.length > 0 && (
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2">
                Actividades Especiales:
              </h4>
              <ul className="text-sm text-gray-600">
                {capilla.actividades.map((actividad, index) => (
                  <li key={index} className="mb-1">
                    • {actividad}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
