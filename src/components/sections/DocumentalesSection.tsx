import { documentales } from "../../lib/data";
import DocumentalCard from "../cards/DocumentalCard";

export default function DocumentalesSection() {
  return (
    <section id="documentales" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Documentales
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Conoce más sobre nuestra parroquia a través de estos videos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentales.map((documental) => (
            <DocumentalCard key={documental.id} documental={documental} />
          ))}
        </div>
      </div>
    </section>
  );
}
