import HeroIcon from "../../../components/ui/HeroIcon";
import Link from "next/link";

export default function CambiaDeVidaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <HeroIcon
                        src="/image/vuelveaDios.jpg"
                        alt="Parroquia"
                        size={80}
                    />
                    <h1 className="text-3xl font-bold text-yellow-200">Cambia de Vida, Vuélvete a Dios</h1>
                    <p className="text-blue-200 mt-2">Encuentro N° 5</p>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                {[
                    {
                        titulo: "Objetivo",
                        contenido: `Reflexionar sobre un llamado profundo y urgente del Evangelio, de cambiar de vida y volvernos a Dios. Este encuentro nos invita a dejar atrás para escuchar la voz de Dios.`
                    },
                    {
                        titulo: "Escuchemos la Palabra de Dios — Efesios 4, 22-24",
                        contenido: `"Despójense del hombre viejo al que sus pasiones van destruyendo, pues así fue su conducta anterior... Revístanse del hombre nuevo por el espíritu desde dentro, el hombre nuevo según Dios que crea en sus pasiones van destruyendo así fue su conducta según Dios que cree en la verdadera justicia y santidad."`
                    },
                    {
                        titulo: "Reflexión",
                        contenido: `San Pablo nos recuerda que la conversión no es solo dejar de hacer el mal, sino permitir que el Espíritu Santo transforme nuestra mente y nuestro corazón. La renovación comienza dentro, donde Dios toca lo que nadie más puede tocar. La renovación espiritual basada en la verdad de Dios. Revestirse del hombre nuevo significa dejar que Cristo modele nuestra vida, nueva, nuestras decisiones y nuestras actitudes. Es un proceso continuo, paciente y lleno de misericordia.\n\nLa conversión es descubrir ese amor que nos levanta y nos hace nuevos. Este nuevo ser está caracterizado por la justicia y la santidad, reflejando la verdad de Dios en la vida diaria para ir dejando moldearse, transformarse, cambiar, volver a Dios y experimentar la propia vida hacia un crecimiento espiritual que se va adquiriendo como proceso del conocer con el corazón, la mente, la voluntad y el ser en el espíritu de cada uno. Nos dice Papa Francisco, no se trata sencillamente de tomar distancia del mal, sino convertirse porque El bien es misericordioso.`
                    },
                    {
                        titulo: "Oración inicial",
                        contenido: `Señor Jesús, te abro mi corazón y te pido que entres en mi vida. Reconozco tu sacrificio y te pido que tu sangre me limpie y me restaure. Renuncio a la antigua forma de vivir y te entrego mi voluntad, mi mente y mi espíritu.\n\nPadre nuestro, Ave María y Gloria.`
                    },
                    {
                        titulo: "Compromisos",
                        contenido: `¿Qué hábitos o actitudes forman parte de mi "hombre viejo"?\n¿Estoy renovando mi mente diariamente a través de la Palabra y el Espíritu Santo?\n¿Cómo puedo abrirme al Espíritu Santo con comportamientos contrarios al Evangelio, dedicar un momento esta semana para visitar el Santísimo y pedirle al Señor "Guía mis actitudes y renuévame por dentro, para no entristecer al Espíritu Santo con comportamientos contrarios al Evangelio.`
                    }
                ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-4 text-blue-100 leading-relaxed">
                        <h2 className="text-lg font-bold text-yellow-200 mb-3">{s.titulo}</h2>
                        {s.contenido.split("\n\n").map((p, j) => <p key={j} className="mb-3">{p}</p>)}
                    </div>
                ))}

                <div className="bg-yellow-200/10 border border-yellow-300/30 rounded-2xl p-6 mb-8 text-center">
                    <p className="text-yellow-100 italic">Canto: &quot;Renuévame, Señor Jesús&quot;</p>
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