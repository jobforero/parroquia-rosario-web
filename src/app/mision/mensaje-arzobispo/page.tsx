import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function MensajeArzobispoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <HeroIcon src="/image/Arzobispo_de_Panama.JPG" alt="Arzobispo de Panamá" size={80} />
          <h1 className="text-3xl font-bold text-yellow-200">Mensaje del Señor Arzobispo de Panamá</h1>
          <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed space-y-4">
          <p>Queridos hermanos y hermanas:</p>
          <p>Como parte del camino jubilar y del renovado impulso misionero de nuestra Iglesia que peregrina en Panamá, iniciamos la Misión Kerigmática Arquidiocesana. No se trata solo de un programa más, sino de volver al corazón del Evangelio: el anuncio sencillo, profundo y transformador de Jesucristo.</p>
          <p>Durante seis semanas, todas las parroquias reflexionaremos los grandes temas del Kerigma, para que cada bautizado pueda renovar su encuentro personal con el Señor y asumir con mayor conciencia su identidad de discípulo misionero.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed space-y-4">
          <h2 className="text-lg font-bold text-yellow-200">Objetivo de esta Misión</h2>
          <p>Esta síntesis quiere despertar el deseo de profundizar. La Misión Kerigmática no es solo para algunos grupos. Es para todas las parroquias, comunidades, movimientos, familias y jóvenes. Es una invitación a redescubrir la alegría del Evangelio y a renovar nuestra identidad de iglesia misionera.</p>
          <p>Que cada fiel que lea estas líneas pueda decir: &quot;Señor, quiero encontrarte de nuevo. Quiero dejarme transformar.&quot;</p>
          <p>Y que nuestra Arquidiócesis, unida, pueda proclamar con renovado entusiasmo: ¡Jesucristo vive y es nuestra esperanza!</p>
        </div>

        <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-6 mb-8 text-center">
          <p className="text-yellow-100 italic text-lg">† José Domingo Ulloa Mendieta O.S.A.</p>
          <p className="text-blue-200 text-sm mt-1">Arzobispo Metropolitano de Panamá</p>
        </div>

        <div className="text-center">
          <Link href="/mision" className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
            <span>← Volver a Misión</span>
          </Link>
        </div>
      </div>
    </div>
  );
}