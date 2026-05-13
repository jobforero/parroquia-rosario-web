import { documentales } from "../../lib/data";
import DocumentalCard from "../cards/DocumentalCard";

export default function DocumentalesSection() {
  return (
    <section id="documentales" className="py-16 bg-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-200 mb-4">
          Nuestros Videos
        </h2>
        <p className="text-center text-blue-200 mb-12 text-lg">
          Descubre la fe y devoción de nuestra comunidad a través de estos videos
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