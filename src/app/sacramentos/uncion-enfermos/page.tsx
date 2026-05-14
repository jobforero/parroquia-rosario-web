import WhatsAppLink from "../../../components/ui/WhatsAppLink";
import Image from "next/image";
import Link from "next/link";

export default function UncionEnfermosPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="relative h-[500px]">
        <Image src="/image/Parroquia_DHR.jpg" alt="Unción de los Enfermos" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Unción de los Enfermos</h1>
          <p className="text-xl text-blue-100 mt-4 drop-shadow">La gracia de Dios en el momento del sufrimiento</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {[
          { titulo: "¿Qué es la Unción de los Enfermos?", 
            contenido: `` },
          { titulo: "¿Quiénes pueden recibirlo?", 
            contenido: `` },
          { titulo: "¿Cómo solicitarlo?", 
            contenido: `` },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{s.titulo}</h2>
            {s.contenido.split("\n\n").map((p, j) => <p key={j} className="text-gray-700 leading-relaxed mb-4">{p}</p>)}
          </div>
        ))}

        <div className="bg-blue-900 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold text-yellow-200 mb-4">Contacto de emergencia</h2>
          <p className="text-blue-100">Para casos urgentes, contáctenos al 
            <strong>
              234-2463
              </strong> o WhatsApp 
              <strong>
                <WhatsAppLink className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors" />
                </strong>. Estamos disponibles para atender a enfermos en casa u hospital.</p>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors shadow-lg">
            <span>← Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}