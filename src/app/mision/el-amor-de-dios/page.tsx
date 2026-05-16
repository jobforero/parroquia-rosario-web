import HeroIcon from "../../../components/ui/HeroIcon";
import Image from "next/image";
import Link from "next/link";

export default function ElAmorDeDiosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 px-4 py-12">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8">
                    <HeroIcon src="/image/Dios_es_amor.jpg" alt="El Amor de Dios" size={80} />
                    <h1 className="text-3xl font-bold text-yellow-200 mt-4">El Amor de Dios</h1>
                    <p className="text-blue-200 mt-2">Misión Nacional Sinodal</p>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
                </div>

                {/* Canto recomendado */}
                <div className="bg-yellow-300/20 border border-yellow-300/40 rounded-2xl p-4 mb-6 flex items-center space-x-3">
                    <span className="text-2xl">🎵</span>
                    <div>
                        <p className="text-yellow-200 font-semibold text-sm">Canto Recomendado</p>
                        <p className="text-white font-bold">&quot;Siempre te amaré&quot; — Athenas</p>
                    </div>
                </div>

                {/* Oración Inicial */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 text-blue-100 leading-relaxed">
                    <h2 className="text-lg font-bold text-yellow-200 mb-4">Oración Inicial</h2>
                    <p className="italic leading-relaxed mb-3">
                        Señor, en este momento abrimos nuestro corazón a tu presencia. Tú que eres amor eterno, ven y abraza nuestra vida. Haznos sentir tu ternura, tu cercanía y tu mirada que nunca abandona. Que este encuentro nos recuerde que somos tus hijos amados y que tu amor nos sostiene, nos restaura y nos da nueva esperanza.
                    </p>
                    <p className="italic leading-relaxed">
                        Quédate con nosotros y enséñanos a dejarnos amar por Ti. Amén.
                    </p>
                </div>

                {/* Imagen corazón */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/image/corazon_de_amor.jpg"
                            alt="Corazón de amor"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Palabra de Dios */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 text-blue-100 leading-relaxed">
                    <h2 className="text-lg font-bold text-yellow-200 mb-4">Palabra de Dios: Lc. 15,11-24</h2>
                    <p className="mb-3">
                        Jesús continuó: «Había un hombre que tenía dos hijos. El menor dijo a su padre: &quot;Dame la parte de la hacienda que me corresponde.&quot; Y el padre repartió sus bienes entre los dos. El hijo menor juntó todos sus haberes, y unos días después, se fue a un país lejano. Allí malgastó su dinero llevando una vida desordenada. Cuando ya había gastado todo, sobrevino en aquella región una escasez grande y comenzó a pasar necesidad.
                    </p>
                    <p className="mb-3">
                        Fue a buscar trabajo, y se puso al servicio de un habitante del lugar que lo envió a su campo a cuidar cerdos. Hubiera deseado llenarse el estómago con la comida que daban a los cerdos, pero nadie le daba algo. Finalmente recapacitó y se dijo: ¡Cuántos asalariados de mi padre tienen pan de sobra, mientras yo aquí me muero de hambre!
                    </p>
                    <p className="mb-3">
                        Tengo que hacer algo: volveré donde mi padre y le diré: «Padre, he pecado contra Dios y contra ti ya no merezco ser llamado hijo tuyo. Trátame como a uno de tus asalariados.»
                    </p>
                    <p className="mb-3">
                        Se levantó, pues, y se fue donde su padre. Estaba aún lejos, cuando su padre lo vio y sintió compasión; corrió a echarse a su cuello y lo besó. Entonces el hijo le habló: «Padre, he pecado contra Dios y ante ti. Ya no merezco ser llamado hijo tuyo.» Pero el padre dijo a sus servidores: «¡Rápido! raigan el mejor vestido y pónganselo.
                    </p>
                    <p className="mb-3">
                        Colóquenle un anillo en el dedo y traigan calzado para sus pies. Traigan el ternero gordo y mátenlo; comamos y hagamos fiesta, porque este hijo mío estaba muerto y ha vuelto a la vida; estaba perdido y lo hemos encontrado.» Y comenzaron la fiesta.
                    </p>
                    <p className="font-bold text-yellow-200">Palabra del Señor.</p>
                </div>

                {/* Imagen Padre recibiendo */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/image/Mi_padre_me_recibio_con_los_brazos_abierto.png"
                            alt="Mi padre me recibió con los brazos abiertos"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-blue-900/30" />
                        <p className="absolute bottom-3 left-0 right-0 text-center text-white text-sm italic font-semibold drop-shadow">
                            &quot;Mi Padre me recibió con brazos abiertos&quot;
                        </p>
                    </div>
                </div>

                {/* Reflexión */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 text-blue-100 leading-relaxed">
                    <h2 className="text-lg font-bold text-yellow-200 mb-4">Reflexión</h2>
                    <p className="mb-3">
                        Hay momentos en que sentimos que nadie nos comprende, que el peso de la vida es demasiado, o que ya no tenemos fuerzas para seguir. Pero justo ahí Dios susurra en el alma: &quot;Con amor eterno te he amado&quot;. Desde antes de que nacieras, Dios ya te conocía y te miraba con ternura.
                    </p>
                    <p className="mb-3">
                        Él ha estado presente en cada paso de tu historia: en las alegrías, en los silencios, en los momentos de dolor. A veces no lo sentimos, pero su amor nunca ha dejado de acompañarte. El amor de Dios no se limita a palabras; es fuerza que levanta, luz que sana, abrazo que restaura. Cuando lo descubres, todo cambia: el corazón se ensancha, los miedos se apagan, y nace un deseo profundo de amar como Él ama.
                    </p>
                    <p className="mb-3">
                        El amor humano tiene medida; Su amor no tiene condiciones, no conoce límites, no se agota, no depende de tus aciertos, de tus obras ni de tus caídas. No se mide por lo que haces, sino porque quien eres: hijo, amado de Dios.
                    </p>
                    <p className="mb-3">
                        El amor de Dios no tiene condiciones ni fecha de vencimiento. No es una idea, ni una emoción pasajera: es una presencia viva que nos envuelve, nos sostiene y nos llama por nuestro nombre. Dios no te ama porque lo merezcas, sino porque Él es amor (1 Jn 4,8). Es un amor que permanece cuando todo se derrumba, que te sostiene cuando te sientes vacío, y que te recuerda que nunca estarás solo.
                    </p>
                    <p className="mb-3">
                        El hijo pródigo no vuelve porque tenga un plan perfecto, vuelve porque ya no puede más. Vuelve con vergüenza, con miedo, con un discurso ensayado... pero lo que encuentra no es un juicio, sino un abrazo.
                    </p>
                    <div className="border-l-4 border-yellow-300 pl-4 space-y-1 mb-4 text-yellow-100">
                        <p>El Padre no le pide explicaciones.</p>
                        <p>No le recuerda sus errores.</p>
                        <p>No lo pone a prueba.</p>
                        <p>El Padre lo ve de lejos… porque nunca dejó de esperarlo.</p>
                    </div>
                    <p className="mb-3 font-semibold text-yellow-200">
                        Y aquí está la buena noticia para nosotros hoy: Dios te ama así, como eres, hoy.
                    </p>
                    <div className="space-y-1 text-blue-200 italic mb-4">
                        <p>No cuando mejores.</p>
                        <p>No cuando tengas todo resuelto.</p>
                        <p>No cuando seas &quot;más digno&quot;.</p>
                    </div>
                    <p className="mb-3">
                        Cuando dejas que el amor de Dios entre en tu corazón, nada vuelve a ser igual. Hermanos, dejarnos amar por Dios es el primer paso para una vida nueva. Vida libre, vida alegre, vida plena.
                    </p>
                    <p className="mb-3">
                        Tal vez hoy no necesitamos &quot;irnos lejos&quot; ni &quot;volver corriendo&quot;. Tal vez solo necesitamos dejarnos encontrar por el Padre, quedarnos quietos un instante, y aceptar ese abrazo que nos dice: &quot;Hijo, hija, estabas perdido y te he encontrado. Siempre fuiste mío.&quot;
                    </p>
                    <p className="font-bold text-yellow-200 mt-2">Lee en silencio nuevamente Lucas 15,11-24</p>
                    <p className="text-sm text-blue-200 mt-2 italic">
                        Se invita a cada participante a releer la lectura Bíblica, permitiendo que una frase toque el corazón.
                    </p>
                </div>

                {/* Imagen Jesús con niña */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-yellow-300/40">
                        <Image
                            src="/image/Jesus_regalando_flores_a_una_niña.png"
                            alt="Jesús regalando flores a una niña"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>

                {/* Conversación en el Espíritu */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 text-blue-100 leading-relaxed">
                    <h2 className="text-lg font-bold text-yellow-200 mb-4">Conversación en el Espíritu</h2>
                    <div className="space-y-3">
                        {[
                            "¿He experimentado el amor de Dios como una presencia real en mi vida?",
                            "¿Qué heridas o pensamientos me impiden creer que soy amado por Él?",
                            "¿Cómo puedo responder cada día a ese amor que me busca y me transforma?",
                            "¿Qué diferencia hay entre el amor de Dios y el amor humano que conozco?"
                        ].map((pregunta, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <span className="text-yellow-300 font-bold mt-0.5 flex-shrink-0">•</span>
                                <p>{pregunta}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-blue-800/40 rounded-xl p-4">
                        <p className="text-sm text-blue-100 italic">
                            <span className="font-bold text-yellow-200">Dialoga: </span>
                            Cada uno comparte un minuto sobre la Palabra o sobre las preguntas propuestas y luego escucha en silencio.
                        </p>
                    </div>
                </div>

                {/* Compromiso */}
                <div className="bg-blue-800/50 border border-blue-400/30 rounded-2xl p-6 mb-6 text-blue-100 leading-relaxed">
                    <h2 className="text-lg font-bold text-yellow-200 mb-4">Compromiso</h2>
                    <p className="italic leading-relaxed">
                        &quot;Hoy me comprometo a abrir mi corazón al amor de Dios, permitiéndole entrar en mis heridas y fragilidades. Buscaré responder a ese amor con un gesto concreto de misericordia, amando, perdonando o escuchando como Él me ama a mí..&quot;
                    </p>
                </div>

                {/* Oración Final */}
                <div className="bg-blue-900/80 border border-yellow-300/30 rounded-2xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-yellow-200 mb-4">Oración final</h2>
                    <div className="italic text-yellow-100 leading-relaxed space-y-2 text-center">
                        <p>Padre bueno, gracias por amarme sin medida.</p>
                        <p>Gracias porque tu amor me sostiene cuando me siento débil.</p>
                        <p>Hoy quiero abrir mi corazón a Ti,</p>
                        <p>dejarme abrazar por tu ternura y descansar en tu amor eterno.</p>
                        <p>Enséñame a creer que soy tu hijo amado, a mirar mi vida con tus ojos</p>
                        <p>de misericordia y a amar a otros como Tú me amas. Amén.</p>
                    </div>
                </div>

                {/* Acción significativa */}
                <div className="bg-yellow-300/20 border border-yellow-300/40 rounded-2xl p-4 mb-8 text-center">
                    <p className="text-yellow-200 font-bold">Acción significativa — enero:</p>
                    <p className="text-white font-semibold">Semana de la Fraternidad</p>
                </div>

                {/* Botón volver */}
                <div className="text-center">
                    <Link href="/mision" className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
                        <span>← Volver a Misión</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}