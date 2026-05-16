import MisionIcon from "../../components/ui/MisionIcon";
import HeroIcon from "../../components/ui/HeroIcon";
import Link from "next/link";

const temas = [
  {
    href: "/mision/mensaje-arzobispo",
    label: "Mensaje del Señor Arzobispo de Panamá",
    icon: "/image/Arzobispo_de_Panama.JPG",
    desc: "Palabra pastoral para nuestra comunidad"
  },
  {
    href: "/mision/dios-te-ama",
    label: "Dios Te Ama como Padre Amoroso",
    icon: "/image/Padre_Amoroso.jpg",
    desc: "Descubre el amor incondicional de Dios"
  },
  {
    href: "/mision/el-pecado",
    label: "El Pecado",
    icon: "/image/el_pecado.png",
    desc: "Reflexión sobre el alejamiento de Dios"
  },
  {
    href: "/mision/acepta-a-jesus",
    label: "Acepta a Jesús y Sálvate",
    icon: "/image/AceptaaJesus.jpg",
    desc: "El camino de la salvación"
  },
  {
    href: "/mision/cambia-de-vida",
    label: "Cambia de Vida, Vuélvete a Dios",
    icon: "/image/vuelveaDios.jpg",
    desc: "La conversión del corazón"
  },
  {
    href: "/mision/nacer-del-espiritu",
    label: "Nacer del Espíritu Santo",
    icon: "/image/Nacer_del_espiritu_santo.jpeg",
    desc: "El don del Espíritu en tu vida"
  },
  {
    href: "/mision/oracion-mision",
    label: "Oración para la Misión Nacional Sinodal 2026",
    icon: "/image/Iglesia_sinodal_en_mision.jpg",
    desc: "Oremos juntos por nuestra misión"
  },
];

export default function MisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      {/* Header */}
      <div className="text-center px-6 pt-16 pb-10">
        <HeroIcon
          src="/image/Parroquia_Lateral.jpg"
          alt="Parroquia"
          size={80}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-200 mb-3">
          Misión Nacional Sinodal
        </h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          Parroquia Nuestra Señora del Rosario — Torrijos Carter
        </p>
        <div className="w-24 h-1 bg-yellow-300 mx-auto mt-6 rounded-full" />
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 pb-16 max-w-2xl">
        <div className="flex flex-col space-y-4">
          {temas.map((tema) => (
            <Link
              key={tema.href}
              href={tema.href}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center space-x-4 hover:bg-white/20 active:scale-95 transition-all duration-200 shadow-lg"
            >
              <div className="text-4xl flex-shrink-0">
                <MisionIcon src={tema.icon} alt={tema.label} size={48} />
              </div>
              <div className="flex-1">
                <h2 className="text-white font-bold text-base leading-snug">{tema.label}</h2>
                <p className="text-blue-200 text-sm mt-1">{tema.desc}</p>
              </div>
              <div className="text-yellow-300 text-xl flex-shrink-0">›</div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <span>← Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}