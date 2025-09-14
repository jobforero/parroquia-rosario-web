import { capillas, Capilla } from "../../lib/data";
import CapillaCard from "../cards/CapillaCard";

interface CapillasSectionProps {
  onCapillaClick: (capilla: Capilla) => void;
}

export default function CapillasSection({
  onCapillaClick,
}: CapillasSectionProps) {
  return (
    <section id="capillas" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Nuestras Capillas
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Cada capilla tiene su propia historia y devoción especial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capillas.map((capilla) => (
            <CapillaCard
              key={capilla.id}
              capilla={capilla}
              onClick={onCapillaClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
