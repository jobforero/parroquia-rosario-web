import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function DiosTéAmaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <HeroIcon
                        src="/image/Padre_Amoroso.jpg"
                        alt="Parroquia"
                        size={80}
                    />
                    <h1 className="text-3xl font-bold text-yellow-200">Dios Te Ama como Padre Amoroso</h1>
                    <p className="text-blue-200 mt-2">Encuentro N° 1</p>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                {[
                    {
                        titulo: "Objetivo",
                        contenido: `Mover a los participantes, no solo a "saber" que Dios los ama, sino a "experimentar el amor salvífico y gratuito de Dios, personal e incondicional, que proyecta a compartirlo con los demás.`
                    },
                    {
                        titulo: "Miremos nuestra realidad",
                        contenido: `Una de las necesidades básicas del hombre es sentirse amado. ¿Cómo sabes que una persona te ama? ¿Cómo te das cuenta de ello? ¿Es importante para ti sentirte amado? ¿Por qué?`
                    },
                    {
                        titulo: "El amor de Dios es personal",
                        contenido: `El amor de Dios es efectivo, es un amor que actúa, y se extiende, un amor que se traduce en hechos concretos. "El creo todo lo que existe por amor (Sal. 136, 4-9); también en cada uno de nosotros: "El nos sostiene día día porque nos ama" (Sab. 11, 24-26)\n\nEl amor de Dios es gratuito. Nada de lo que hemos recibido lo hemos merecido antes, solo busca que nos llenemos de su amor y de su bondad.`
                    },
                    {
                        titulo: "Dios no es un Dios castigador",
                        contenido: `Quizás muchas veces hemos tenido la sensación de tener una imagen distorsionada de Dios, pensamos en el Dios castigador, sino conocemos a limitada o equivocada de Dios, seguramente porque desde pequeño nos enseñaron que, si hacemos algo malo Dios, nos castiga. Puede ser también que, por la propia situación de vida de pecado y alejamiento de Dios, pensamos en el Dios castigador, sino conocemos a Dios, no podemos experimentar su misericordia en nosotros.\n\nDios no castiga. Él no es como un policía de tránsito que anda poniendo boletas a los infractores.`
                    },
                    {
                        titulo: "Dios nos ama, iluminemos esta realidad en nosotros",
                        contenido: `Desde que Dios es Dios; pensó en nosotros y nos llamó, por eso existimos y por eso estamos aquí.\n\n"No temas, te he llamado por tu nombre, eres mío, eres precioso a mis ojos, y por eso estás aquí. No temas que yo te amo, no temas que yo estoy contigo" (Isaías 41, 10; 43, 1-5)\n\n"De lejos Dios se me apareció. Con amor eterno te he amado; por eso he reservado gracias para ti" (Jer 31, 3).`
                    },
                    {
                        titulo: "Oración",
                        contenido: `Dios Padre bueno, que tu amor inunde nuestros corazones y tu Palabra resuene en nuestra mente cuando dices que eres Amor y misericordia, para vivir animados por Tu amor, y ser mejores personas, amando a los demás. Amén.`
                    }
                ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed">
                        <h2 className="text-lg font-bold text-yellow-200 mb-3">{s.titulo}</h2>
                        {s.contenido.split("\n\n").map((p, j) => <p key={j} className="mb-3">{p}</p>)}
                    </div>
                ))}

                <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-yellow-100 italic text-lg font-semibold">Canto: &quot;Grande es el amor de Dios&quot;</p>
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