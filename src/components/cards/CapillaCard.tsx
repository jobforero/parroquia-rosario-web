import { Capilla } from "../../lib/data";
import Image from "next/image";

interface CapillaCardProps {
  capilla: Capilla;
  onClick: (capilla: Capilla) => void;
}

export default function CapillaCard({ capilla, onClick }: CapillaCardProps) {
  return (
    <div
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-blue-100"
      onClick={() => onClick(capilla)}
    >
      <div className="h-48 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-t-2xl flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Image
              src={capilla.imagen}
              alt={`Imagen de ${capilla.nombre}`}
              width={200}
              height={200}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <h3 className="font-bold text-blue-900 text-lg">{capilla.nombre}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-blue-700 font-semibold text-center mb-2">
          {capilla.descripcion}
        </p>
        <p className="text-gray-600 text-sm text-center">
          Haz clic para conocer su historia
        </p>
        {capilla.fechaCelebracion && (
          <p className="text-yellow-600 text-xs text-center mt-1 font-medium">
            Fiesta: {capilla.fechaCelebracion}
          </p>
        )}
      </div>
    </div>
  );
}
