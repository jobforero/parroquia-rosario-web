import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function OracionMisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <HeroIcon src="/image/Iglesia_sinodal_en_mision.jpg" alt="Oración Misión" size={80} />
          <h1 className="text-3xl font-bold text-yellow-200">Oración para la Misión Nacional Sinodal 2026</h1>
          <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
        </div>

        <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-8 mb-6">
          <p className="text-white font-bold text-lg mb-6 text-center">SEÑOR JESUCRISTO,</p>
          <p className="text-yellow-100 leading-relaxed text-center italic mb-6">Camino, Verdad y Vida,<br />tú nos llamas a seguirte en comunidad,<br />a caminar juntos como Pueblo santo de Dios,<br />escuchando al Espíritu Santo que guía tu Iglesia.</p>
          <p className="text-yellow-100 leading-relaxed text-center italic mb-6">Haznos discípulos misioneros tuyos, en salida y sinodales, peregrinos en la fe,<br />abiertos a la conversión permanente<br />y al encuentro con nuestros hermanos y hermanas.<br />Renueva en nosotros la gracia del Bautismo<br />y enciende en nuestros corazones<br />el fuego vivo de tu Palabra,<br />para que, como los primeros cristianos,<br />anunciemos con alegría victoriosa tu Evangelio.</p>
          <p className="text-yellow-100 leading-relaxed text-center italic mb-6">En esta Misión Nacional Sinodal,<br />danos un corazón catecumenal,<br />disponible para acoger a todos,<br />para guiar con ternura,<br />y para acompañar con esperanza<br />y paciencia histórica<br />a quienes buscan tu rostro.</p>
          <p className="text-yellow-100 leading-relaxed text-center italic mb-6">Padre, que tu Espíritu Santo nos haga testigos<br />humildes de comunión, participación y misión,<br />servidores fieles de tu Reinado de amor<br />y artesanos de una Iglesia en salida,<br />sinodal, samaritana y profética.</p>
          <p className="text-yellow-100 leading-relaxed text-center italic mb-6">María, Madre de la Iglesia, y estrella de la evangelización<br />camina con nosotros.<br />Amén.</p>
          <p className="text-white font-bold text-center text-2xl mt-4">Amén. ✝️</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 text-center">
          <p className="text-blue-200 text-sm">Misión Sinodal — Arquidiócesis de Panamá</p>
          <p className="text-blue-200 text-sm">100 años | Arquidiócesis de Panamá</p>
          <p className="text-blue-200 text-sm mt-2 italic">&quot;Caminemos unidos, anunciando el amor de Dios&quot;</p>
          <p className="text-blue-200 text-sm mt-1">EAAP - Vicaria Pastoral Arquidiócesis de Panamá</p>
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