import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function OracionMisionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <HeroIcon
                        src="/image/Iglesia_sinodal_en_mision.jpg"
                        alt="Parroquia"
                        size={80}
                    />
                    <h1 className="text-3xl font-bold text-yellow-200">Oración para la Misión Nacional Sinodal 2026</h1>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-8 mb-6">
                    <p className="text-white font-bold text-lg mb-6 text-center">SEÑOR JESUCRISTO,</p>
                    {[
                        "Camino, Verdad y Vida, tú nos llamas a seguirte en comunidad, a caminar juntos como Pueblo santo de Dios, escuchando al Espíritu Santo que guía tu Iglesia.",
                        "Haznos discípulos misioneros tuyos, en salida y sinodales, peregrinos en la fe, abiertos a la conversión permanente y al encuentro con nuestros hermanos y hermanas. Renueva en nosotros la gracia del Bautismo y enciende en nuestros corazones el fuego vivo de tu Palabra, para que, como los primeros cristianos, anunciemos con alegría victoriosa tu Evangelio.",
                        "En esta Misión Nacional Sinodal, danos un corazón catecumenal, disponible para acoger a todos, para guiar con ternura, y para acompañar con esperanza y paciencia histórica a quienes buscan tu rostro.",
                        "Padre, que tu Espíritu Santo nos haga testigos humildes de comunión, participación y misión, servidores fieles de tu Reinado de amor y artesanos de una Iglesia en salida, sinodal, samaritana y profética.",
                        "María, Madre de la Iglesia, y estrella de la evangelización camina con nosotros."
                    ].map((p, i) => (
                        <p key={i} className="text-yellow-100 leading-relaxed text-center italic mb-6">{p}</p>
                    ))}
                    <p className="text-white font-bold text-center text-2xl mt-4">Amén.</p>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-blue-200 text-sm">Misión Sinodal — Arquidiócesis de Panamá</p>
                    <p className="text-blue-200 text-sm">100 años | Arquidiócesis de Panamá</p>
                    <p className="text-blue-200 text-sm mt-2 italic">&quot;Caminemos unidos, anunciando el amor de Dios&quot;</p>
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