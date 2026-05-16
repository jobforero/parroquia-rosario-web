import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function ElPecadoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                   <HeroIcon
                        src="/image/el_pecado.png"
                        alt="Parroquia"
                        size={80}
                    />
                    <h1 className="text-3xl font-bold text-yellow-200">El Pecado</h1>
                    <p className="text-blue-200 mt-2">Encuentro N° 2</p>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                {[
                    {
                        titulo: "Objetivo",
                        contenido: `Llevamos al encuentro personal con Cristo vivo, del discípulo, para caminar juntos escuchando, discerniendo y anunciando en comunidad.`
                    },
                    {
                        titulo: "Escuchemos la Palabra del Señor — Marcos 7, 14-23",
                        contenido: `En aquel tiempo, Jesús llamó de nuevo a la gente y les dijo: "Escúchenme todos y entiendan: nada de lo que entra de fuera puede hacer impuro al hombre, porque no entra en su corazón, sino en el estómago, y después ya sale del hombre." Así declaraba puros todos los alimentos, y añadió: "Lo que sale del hombre, sí hace impuro al hombre. Porque de dentro, del corazón del hombre, salen los malos pensamientos: las fornicaciones, los robos, los homicidios, los adulterios, la avaricia, la maldad, el engaño, el libertinaje, la envidia, la difamación, la soberbia y la insensatez. Todas esas maldades salen de dentro y hacen impuro al hombre."Palabra del Señor.`
                    },
                    {
                        titulo: "Reflexión — Mensaje",
                        contenido: `Con el pecado se rompe la relación del hombre con Dios, causando esclavitud, infelicidad y desorden interior (miedo, angustia, soledad). Pero la buena noticia es que Jesús es la solución, ofreciendo perdón y restauración a través de su sacrificio y resurrección, abriendo el camino para volver a Dios y experimentar la vida plena que él desea para nosotros.\n\nNo es lo que entra por los sentidos lo que nos hace impuros, sino aquello que brota del interior cuando el corazón va cerrando a dios. Jesús nos llama a una conversión más profunda: mirar el corazón, ese lugar donde nacen las decisiones, los deseos y las intenciones.`
                    },
                    {
                        titulo: "La conversión no comienza cambiando solo comportamientos externos",
                        contenido: `La Palabra de Dios, que es Viva y eficaz, discierne los pensamientos y las intenciones del corazón. La escritura no nos habla del pecado para producir culpa o miedo, sino para despertar la verdad interior. Solo cuando reconocemos lo que hay dentro de nosotros podemos abrirnos a la acción del espíritu.\n\nLa paga del pecado es la muerte (Romanos 6,23) pero reconocer el pecado delante de Dios. Hoy el Señor nos invita a mirar el corazón con humildad, sin necesidad de castigarnos ni aparentar perfección, sino atrevernos a vivir converdad porque reconocer el pecado es el gran paso para volver a la vida.`
                    },
                    {
                        titulo: "Oración Final",
                        contenido: `Señor, reconocemos nuestra fragilidad y nuestro pecado, pero nos mostramos ante ti con la esperanza de tu infinita misericordia. Limpia nuestros corazones de todo lo que te ofende, danos la fuerza de tu amor, gracias Espíritu para no volver a pecar y ayúdanos a caminar en la luz de tu amor. Padre nuestro, Ave María y Gloria.`
                    }
                ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed">
                        <h2 className="text-lg font-bold text-yellow-200 mb-3">{s.titulo}</h2>
                        {s.contenido.split("\n\n").map((p, j) => <p key={j} className="mb-3">{p}</p>)}
                    </div>
                ))}

                <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-yellow-100 italic">Canto: &quot;Si de ti me aleje, Señor ten piedad&quot;</p>
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