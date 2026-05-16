import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function AceptaAJesusPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <HeroIcon
                        src="/image/AceptaaJesus.jpg"
                        alt="Parroquia"
                        size={80}
                    />
                    <h1 className="text-3xl font-bold text-yellow-200">Acepta a Jesús y Sálvate</h1>
                    <p className="text-blue-200 mt-2">Encuentros N° 3 y 4</p>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                {[
                    {
                        titulo: "Objetivo",
                        contenido: `Tener a Jesucristo como el centro de la vida cristiana, quien solo por Gracia y amor del Padre, entrega su vida, muerte y resucita para salvarnos y darnos la vida eterna, mediante el bautismo y la conversión, espera la decisión de seguirle.`
                    },
                    {
                        titulo: "El Problema",
                        contenido: `Esta promesa ofrece vida eterna a todo el que cree, garantizando que nadie se pierda. Es un llamado a la fe, a la transformación y salvación eterna.\n\nLa realidad del pecado: El pecado no es solo cometer errores graves; es vivir de espaldas a Dios, decidiendo nuestro propio camino.\n\nLa incapacidad humana: Por más que intentemos "ser buenos", nadie puede llegar a la santidad de Dios por esfuerzo propio.\n\nLa consecuencia: La Biblia dice en Romanos 6,23: "Pues el salario del pecado es la muerte..." Esta muerte no es solo física, sino una separación espiritual eterna de nuestro Creador.`
                    },
                    {
                        titulo: "Pasos hacia la Aceptación",
                        contenido: `• Creer en Cristo: Confiar en su obra consumada en la cruz.\n• Aceptar y recibir: Invitar a Jesús a ser el Señor de la vida.\n• Reconocer el pecado: Al reconocerlo admito la necesidad de un Salvador.\n• Nueva Vida: El Espíritu Santo pasa a vivir en la persona.\n• Perdón y Justicia: Se recibe el perdón de pecados y la justicia de Cristo.`
                    },
                    {
                        titulo: "Oración inicial",
                        contenido: `"Estoy pensando en Dios"\n\nSeñor Jesús, me acerco a ti con un corazón humilde reconociendo que soy pecador y que necesito tu perdón. Creo de todo corazón que eres el Hijo de Dios, que moriste en la cruz por mis pecados y resucitaste para darme vida eterna. Creo que el único camino para llegar al Padre.`
                    },
                    {
                        titulo: "Oración Final",
                        contenido: `Señor Jesús, reconozco que soy pecador y necesito tu perdón. Creo que moriste en la cruz por mis pecados y resucitaste. Toma el control de mi vida y transfórmame. Amén.\n\nPadre nuestro, Ave María.`
                    }
                ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed">
                        <h2 className="text-lg font-bold text-yellow-200 mb-3">{s.titulo}</h2>
                        {s.contenido.split("\n\n").map((p, j) => <p key={j} className="mb-3">{p}</p>)}
                    </div>
                ))}

                <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-yellow-100 italic">Canto: &quot;Dios está aquí&quot;</p>
                    <p className="text-blue-200 text-sm mt-2">Cita bíblica: Romanos 10,9</p>
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