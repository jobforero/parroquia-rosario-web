import Image from "next/image";
import Link from "next/link";

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-blue-50">

      {/* Hero con la imagen */}
      <div className="relative h-[500px]">
        <Image
          src="/image/IMG_6677_DHR.JPG"
          alt="Nuestra Señora del Rosario"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg max-w-4xl">
            Nuestra Señora del Rosario
          </h1>
          <p className="text-xl text-blue-100 mt-4 drop-shadow">
            Una Historia Escrita con Fe y Comunidad
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">

        {/* Introducción */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <p className="text-lg text-blue-800 font-semibold italic mb-4">
            Un encuentro con la Sra. Isidra Bustamante de Maranto, nuestra querida &quot;Chilita&quot;.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En el corazón de Torrijos Carter, San Miguelito, se erige la Parroquia Nuestra Señora del Rosario.
            Pero antes de las paredes y los salones que hoy conocemos, hubo una lucha de fe protagonizada por
            un grupo de vecinos decididos. Conversamos con la Sra. Chilita, testigo y protagonista de esta
            historia, quien nos relató cómo un sueño se convirtió en refugio para toda la comunidad.
          </p>
        </div>

        {/* Secciones */}
        {[
          {
            titulo: "El origen: Una misión que unió familias",
            contenido: `Todo comenzó con la gran misión de 1984. De aquel encuentro en Cerro Batea surgieron 18 matrimonios que buscaban no solo fortalecer su vida espiritual, sino también un lugar donde congregarse. Al principio solo tenían una pequeña capilla, pero el deseo de crecer los llevó a buscar un terreno propio.

La tarea no fue fácil. Inicialmente les ofrecieron un lote en el sector de El Esfuerzo, pero era una loma de difícil acceso para los ancianos y los enfermos. Fue entonces cuando la comunidad se unió para luchar por el espacio donde hoy se encuentra la parroquia, buscando siempre la comodidad de todos sus hermanos.`
          },
          {
            titulo: `El nombre: Una "coincidencia" divina`,
            contenido: `¿Cómo eligieron llamar a la parroquia "Nuestra Señora del Rosario"? La historia es curiosa y emocionante. El comité (llamado entonces pre-consejo) se reunió en casa de la maestra Rosa junto al Padre Benjamín Herrera. Buscaban un nombre que no estuviera repetido en otras parroquias cercanas.

Recordando que vivían en Torrijos Carter, decidieron buscar una fecha significativa: el 7 de septiembre, día de la firma de los Tratados Torrijos-Carter. Al revisar el calendario litúrgico de esos días, llegaron al 7 de octubre. Al leer "Nuestra Señora del Rosario", la alegría estalló en el grupo. No pudo ser más perfecto: la comunidad había nacido precisamente realizando el "Rosario de la Aurora" cada sábado a las 5:00 a.m. por las veredas del barrio.`
          },
          {
            titulo: "Piedras sobre piedras: Construyendo el hogar",
            contenido: `A lo largo de los años, la parroquia ha sido testigo de grandes transformaciones. Gracias al esfuerzo colectivo, se logró construir el salón parroquial, la casa cural para los sacerdotes, los salones de reuniones y los baños, áreas que antes no existían y que hoy dan vida a la labor pastoral.

Por este altar han pasado guías espirituales que han dejado huella: el Padre Benjamín Herrera, el Padre Carlos Mejía, el Padre Marlon Berar, el Padre Domingo Escobar y el Padre Alejandro Bulbordon, entre otros. Chilita también destaca el papel fundamental de las Religiosas del Sagrado Corazón de Jesús, cuyo apoyo moral y económico ha sido un pilar para la comunidad.`
          },
        ].map((seccion, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{seccion.titulo}</h2>
            {seccion.contenido.split("\n\n").map((parrafo, j) => (
              <p key={j} className="text-gray-700 leading-relaxed mb-4">{parrafo}</p>
            ))}
          </div>
        ))}

        {/* Mensaje de Chilita */}
        <div className="bg-blue-900 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold text-yellow-200 mb-4">
            Un mensaje para el futuro: &quot;Ustedes son el tesoro&quot;
          </h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            A sus años, Chilita mira con esperanza a las nuevas generaciones. Su mensaje es claro y lleno de fuerza:
          </p>
          <blockquote className="border-l-4 border-yellow-300 pl-6 italic text-lg text-yellow-100">
            &quot;Los adultos vamos de salida, y son los jóvenes quienes deben llevar en sus hombros el peso y
            la alegría de la parroquia. Jóvenes, sigan adelante, no dejen caer este lugar. Contagien a otros
            con amor, paciencia y evangelización. Ayúdense unos a otros, porque ustedes son el futuro de
            nuestra fe.&quot;
          </blockquote>
        </div>

        {/* Datos de interés */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Datos de interés</h2>
          <div className="space-y-3">
            <p className="flex items-start space-x-3 text-gray-700">
              <span className="text-blue-600 font-bold mt-1"></span>
              <span><strong>Ubicación:</strong> Torrijos Carter, San Miguelito, Panamá.</span>
            </p>
            <p className="flex items-start space-x-3 text-gray-700">
              <span className="text-blue-600 font-bold mt-1"></span>
              <span><strong>Fecha clave:</strong> 7 de octubre — Día de Nuestra Señora del Rosario.</span>
            </p>
            <p className="flex items-start space-x-3 text-gray-700">
              <span className="text-blue-600 font-bold mt-1"></span>
              <span><strong>Hito fundacional:</strong> Misión de 1984.</span>
            </p>
          </div>
        </div>

        {/* Botón volver */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors shadow-lg"
          >
            <span>← Volver al inicio</span>
          </Link>
        </div>

      </div>
    </div>
  );
}