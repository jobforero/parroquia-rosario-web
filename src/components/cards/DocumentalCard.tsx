import { Youtube } from "lucide-react";
import { Documental } from "../../lib/data";

interface DocumentalCardProps {
  documental: Documental;
}

export default function DocumentalCard({ documental }: DocumentalCardProps) {
  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-100">
      <div className="h-48 bg-gradient-to-br from-red-200 to-pink-200 rounded-t-2xl flex items-center justify-center">
        <Youtube className="w-16 h-16 text-red-600" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-900 mb-2">{documental.titulo}</h3>
        <p className="text-sm text-gray-600 mb-2">{documental.descripcion}</p>
        <p className="text-sm text-gray-500 mb-4">
          Duración: {documental.duracion} | Categoría: {documental.categoria}
        </p>
        <a
          href={documental.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          <Youtube className="w-4 h-4" />
          <span>Ver Video</span>
        </a>
      </div>
    </div>
  );
}
