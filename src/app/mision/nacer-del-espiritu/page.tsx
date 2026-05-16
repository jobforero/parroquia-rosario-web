import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function NacerDelEspirituPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <HeroIcon
                        src="/image/Nacer_del_espiritu_santo.jpeg"
                        alt="Parroquia"
                        size={80}
                    />
                    <h1 className="text-3xl font-bold text-yellow-200">Nacer del Espíritu Santo</h1>
                    <p className="text-blue-200 mt-2">Encuentro N° 6</p>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                {[
                    {
                        titulo: "Objetivo",
                        contenido: `Descubrir la belleza y la fuerza de nacer del Espíritu Santo, una experiencia que transforma la vida desde dentro y nos hace hijos e hijas de Dios. Este encuentro nos invita a abrir el corazón para dejarnos renovar por la gracia que solo el Espíritu puede dar.`
                    },
                    {
                        titulo: "Oración inicial",
                        contenido: `Espíritu de Dios, ven y toca mi corazón con tu luz. Renueva mi vida desde dentro y hazme nacer de nuevo. Purifica mis pensamientos y fortalece mi voluntad. Guíame cada día para vivir como hijo(a) de Dios. Amén.`
                    },
                    {
                        titulo: "Reflexión",
                        contenido: `El Espíritu Santo nos guía, nos consuela, nos corrige y nos impulsa a vivir según el Evangelio, incluso en medio de las dificultades cotidianas. Quien nace del Espíritu comienza a dar frutos visibles en su vida diaria: una fe más confiada en Dios, una esperanza que no se apaga ante las pruebas y una caridad que se expresa en gestos concretos de amor, servicio, perdón y de una relación viva con Cristo, alimentada por la oración, los sacramentos y la escucha de la Palabra. Así, vivir guiados por el Espíritu Santo es caminar en hecho como discípulos de Jesús, dejando que su amor nos transforme y la escucha de la Palabra. Así, vivir guiados por el Espíritu Santo es caminar como discípulos de Jesús.\n\nEl diálogo entre Jesús y Nicodemo revela que nacer del Espíritu no es un cambio superficial, sino una transformación interior que solo Dios puede realizar. Jesús explica que esta vida que nace del Espíritu, que renueva, purifica y fortalece.`
                    },
                    {
                        titulo: "Conversación en el Espíritu",
                        contenido: `¿Qué áreas de mi vida necesitan ser renovadas por el Espíritu Santo? ¿Qué frutos del Espíritu deseo que se hagan visibles en mi vida?\n\nCompromiso: Te invito a realizar un gesto concreto de unidad o servicio en tu comunidad, como signo de esta vida nueva. Actividad: árbol y hojas verdes (material: el dibujo de un tronco con ramas, hojas verdes, teip, marcadores delgados). Se le entrega a cada participante una hoja verde y un marcador, se le incentiva a escribir un talento, virtud o acción con que puede hacer vida lo que hernos reflexionado durante el encuentro. Posteriormente se colocara en sobre un tronco dibujado con ramas y se realiza un diálogo abierto sobre estas acciones concretas.`
                    },
                    {
                        titulo: "Oración final",
                        contenido: `Transforma mi corazón y mi vida con tu gracia. Hazme testigo de tu amor en mis palabras y acciones. Conduce mis pasos para vivir siempre en tu luz. Amén.\n\nPadre Nuestro y Ave María y Gloria.`
                    }
                ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed">
                        <h2 className="text-lg font-bold text-yellow-200 mb-3">{s.titulo}</h2>
                        {s.contenido.split("\n\n").map((p, j) => <p key={j} className="mb-3">{p}</p>)}
                    </div>
                ))}

                <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-yellow-100 italic">Canto: &quot;Ven, Espíritu Santo, ven&quot;</p>
                    <p className="text-blue-200 text-sm mt-2">Juan 3, 7-8</p>
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