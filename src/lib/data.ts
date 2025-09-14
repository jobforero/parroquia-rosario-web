// lib/data.ts
export interface Capilla {
  id: number;
  nombre: string;
  advocacion: string;
  imagen: string;
  descripcion: string;
  historia: string;
  patrona: string;
  fechaCelebracion?: string;
  horariosMisa: string[];
  actividades?: string[];
  slug: string;
}

export const capillas: Capilla[] = [
  {
    id: 1,
    nombre: "Torrijos Carter",
    advocacion: "Nuestra Señora del Rosario",
    imagen: "/images/capillas/torrijos-carter.jpg",
    descripcion: "Capilla principal dedicada a Nuestra Señora del Rosario",
    historia: `La capilla Torrijos Carter es el corazón de nuestra parroquia, dedicada a Nuestra Señora del Rosario. 
    Esta hermosa capilla fue construida con el esfuerzo y la fe de toda la comunidad, siendo un lugar de encuentro 
    y oración para todas las familias del sector. Su advocación al Rosario nos invita diariamente a meditar los 
    misterios de la vida de Jesús y María.`,
    patrona: "Nuestra Señora del Rosario",
    fechaCelebracion: "7 de octubre",
    horariosMisa: ["Domingo 8:00 AM", "Domingo 10:00 AM", "Sábado 6:00 PM"],
    actividades: ["Rosario diario", "Catequesis", "Grupo de oración"],
    slug: "torrijos-carter",
  },
  {
    id: 2,
    nombre: "Capilla Guadalupe",
    advocacion: "Nuestra Señora de Guadalupe",
    imagen: "/images/capillas/guadalupe.jpg",
    descripcion: "Dedicada a la Virgen de Guadalupe, Patrona de América",
    historia: `La Capilla de Guadalupe honra a Nuestra Señora de Guadalupe, la Morenita del Tepeyac. 
    Esta capilla es especial para nuestra comunidad latina, ya que la Virgen de Guadalupe es un símbolo 
    de esperanza y protección maternal. Su imagen nos recuerda el amor incondicional de María hacia 
    todos sus hijos, especialmente los más necesitados.`,
    patrona: "Nuestra Señora de Guadalupe",
    fechaCelebracion: "12 de diciembre",
    horariosMisa: ["Domingo 6:00 PM"],
    actividades: [
      "Mañanitas guadalupanas",
      "Peregrinación anual",
      "Danza azteca",
    ],
    slug: "guadalupe",
  },
  {
    id: 3,
    nombre: "Capilla Santa Teresa de Calcuta",
    advocacion: "Santa Teresa de Calcuta",
    imagen: "/images/capillas/teresa-calcuta.jpg",
    descripcion: "En honor a la Santa de los pobres",
    historia: `La Capilla de Santa Teresa de Calcuta está dedicada a la misionera de la caridad, 
    quien dedicó su vida al servicio de los más pobres entre los pobres. Esta capilla nos inspira 
    a seguir su ejemplo de amor y servicio incondicional hacia los necesitados de nuestra comunidad. 
    Aquí se organizan obras de caridad y ayuda social.`,
    patrona: "Santa Teresa de Calcuta",
    fechaCelebracion: "5 de septiembre",
    horariosMisa: ["Miércoles 6:00 PM"],
    actividades: [
      "Obras de caridad",
      "Visita a enfermos",
      "Comedor comunitario",
    ],
    slug: "santa-teresa-calcuta",
  },
  {
    id: 4,
    nombre: "Capilla Santa María la Antigua",
    advocacion: "Santa María la Antigua",
    imagen: "/images/capillas/maria-antigua.jpg",
    descripcion: "Patrona de Panamá la Vieja",
    historia: `La Capilla de Santa María la Antigua honra a la patrona histórica de Panamá la Vieja. 
    Esta advocación mariana tiene raíces profundas en la historia panameña, siendo venerada desde 
    los tiempos coloniales. En esta capilla celebramos nuestras raíces históricas y culturales, 
    manteniendo vivas las tradiciones de fe que nos han acompañado por siglos.`,
    patrona: "Santa María la Antigua",
    fechaCelebracion: "15 de agosto",
    horariosMisa: ["Viernes 6:00 PM"],
    actividades: [
      "Celebraciones patrias",
      "Historia de Panamá",
      "Tradiciones coloniales",
    ],
    slug: "maria-antigua",
  },
  {
    id: 5,
    nombre: "Capilla Nuestra Señora de Lourdes",
    advocacion: "Nuestra Señora de Lourdes",
    imagen: "/images/capillas/lourdes.jpg",
    descripcion: "Lugar de sanación y milagros",
    historia: `La Capilla de Nuestra Señora de Lourdes es un lugar especial de oración por la sanación. 
    Inspirada en las apariciones de la Virgen María a Santa Bernadette en Francia, esta capilla 
    es visitada por fieles que buscan sanación física y espiritual. Aquí se realizan procesiones 
    con enfermos y se ora especialmente por la salud de la comunidad.`,
    patrona: "Nuestra Señora de Lourdes",
    fechaCelebracion: "11 de febrero",
    horariosMisa: ["Martes 6:00 PM"],
    actividades: [
      "Procesión de enfermos",
      "Oración por sanación",
      "Agua bendita",
    ],
    slug: "lourdes",
  },
  {
    id: 6,
    nombre: "Capilla Inmaculada Concepción",
    advocacion: "Inmaculada Concepción",
    imagen: "/images/capillas/inmaculada.jpg",
    descripcion: "Patrona de Panamá",
    historia: `La Capilla de la Inmaculada Concepción honra a la Patrona oficial de Panamá. 
    Esta advocación mariana es especialmente querida por todos los panameños, ya que bajo su 
    protección se encuentra toda nuestra nación. En esta capilla se celebran las fiestas patrias 
    con especial devoción y se realizan actos de consagración nacional.`,
    patrona: "Inmaculada Concepción",
    fechaCelebracion: "8 de diciembre",
    horariosMisa: ["Jueves 6:00 PM"],
    actividades: [
      "Fiestas patrias",
      "Consagración nacional",
      "Novena de la Inmaculada",
    ],
    slug: "inmaculada-concepcion",
  },
  {
    id: 7,
    nombre: "Capilla Nuestra Señora Virgen del Carmen",
    advocacion: "Virgen del Carmen",
    imagen: "/images/capillas/carmen.jpg",
    descripcion: "Protectora de navegantes y pescadores",
    historia: `La Capilla de la Virgen del Carmen es especial para las familias de navegantes y pescadores 
    de nuestra comunidad. Como protectora de quienes se hacen a la mar, esta advocación mariana 
    cuida de todos los que trabajan en el océano. Aquí se bendicen las embarcaciones y se ora 
    por la seguridad de los marineros.`,
    patrona: "Virgen del Carmen",
    fechaCelebracion: "16 de julio",
    horariosMisa: ["Lunes 6:00 PM"],
    actividades: [
      "Bendición de embarcaciones",
      "Procesión marítima",
      "Oración por navegantes",
    ],
    slug: "virgen-carmen",
  },
  {
    id: 8,
    nombre: "Capilla San José",
    advocacion: "San José",
    imagen: "/images/capillas/san-jose.jpg",
    descripcion: "Patrono de los trabajadores y padre de familia",
    historia: `La Capilla de San José está dedicada al esposo de María y padre adoptivo de Jesús. 
    San José es el patrono de los trabajadores y modelo de padres de familia. En esta capilla 
    se celebran especialmente a los padres y trabajadores, pidiendo por el empleo y la protección 
    de las familias. Es un lugar de oración por el trabajo digno y la unidad familiar.`,
    patrona: "San José",
    fechaCelebracion: "19 de marzo",
    horariosMisa: ["Sábado 8:00 AM"],
    actividades: [
      "Día del padre",
      "Bendición de herramientas",
      "Oración por el trabajo",
    ],
    slug: "san-jose",
  },
  {
    id: 9,
    nombre: "Capilla Medalla Milagrosa",
    advocacion: "Medalla Milagrosa",
    imagen: "/images/capillas/medalla-milagrosa.jpg",
    descripcion: "Basada en las apariciones a Santa Catalina Labouré",
    historia: `La Capilla de la Medalla Milagrosa conmemora las apariciones de la Virgen María 
    a Santa Catalina Labouré en París, Francia. Esta devoción mariana es conocida por los 
    numerosos milagros y gracias concedidos a quienes portan la medalla con fe. En esta capilla 
    se bendicen las medallas y se ora especialmente por las intenciones más urgentes de los fieles.`,
    patrona: "Virgen de la Medalla Milagrosa",
    fechaCelebracion: "27 de noviembre",
    horariosMisa: ["Domingo 4:00 PM"],
    actividades: [
      "Bendición de medallas",
      "Novena perpetua",
      "Milagros y testimonios",
    ],
    slug: "medalla-milagrosa",
  },
];

export interface Documental {
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
  thumbnail: string;
  duracion: string;
  fechaPublicacion: string;
  categoria: "historia" | "capillas" | "tradiciones" | "testimonios";
}

export const documentales: Documental[] = [
  {
    id: 1,
    titulo: "Historia de Nuestra Señora del Rosario",
    descripcion:
      "Conoce los orígenes de nuestra parroquia y cómo ha crecido a lo largo de los años",
    url: "https://youtube.com/watch?v=ejemplo1",
    thumbnail: "/images/documentales/historia-rosario.jpg",
    duracion: "15:30",
    fechaPublicacion: "2024-01-15",
    categoria: "historia",
  },
  {
    id: 2,
    titulo: "Las 8 Capillas de Torrijos Carter",
    descripcion:
      "Un recorrido por cada una de nuestras hermosas capillas y sus devociones",
    url: "https://youtube.com/watch?v=ejemplo2",
    thumbnail: "/images/documentales/capillas.jpg",
    duracion: "22:15",
    fechaPublicacion: "2024-02-10",
    categoria: "capillas",
  },
  {
    id: 3,
    titulo: "Tradiciones y Fe en Nuestra Comunidad",
    descripcion:
      "Las tradiciones religiosas que mantenemos vivas en nuestra parroquia",
    url: "https://youtube.com/watch?v=ejemplo3",
    thumbnail: "/images/documentales/tradiciones.jpg",
    duracion: "18:45",
    fechaPublicacion: "2024-03-05",
    categoria: "tradiciones",
  },
  {
    id: 4,
    titulo: "Testimonios de Fe - Milagros en Nuestra Parroquia",
    descripcion:
      "Historias reales de milagros y conversiones en nuestra comunidad",
    url: "https://youtube.com/watch?v=ejemplo4",
    thumbnail: "/images/documentales/testimonios.jpg",
    duracion: "25:00",
    fechaPublicacion: "2024-04-12",
    categoria: "testimonios",
  },
  {
    id: 5,
    titulo: "La Construcción de Nuestras Capillas",
    descripcion:
      "El esfuerzo comunitario para construir nuestros espacios sagrados",
    url: "https://youtube.com/watch?v=ejemplo5",
    thumbnail: "/images/documentales/construccion.jpg",
    duracion: "20:30",
    fechaPublicacion: "2024-05-08",
    categoria: "historia",
  },
];

export interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  tipo: "misa" | "procesion" | "novena" | "retiro" | "celebracion";
}

export const proximosEventos: Evento[] = [
  {
    id: 1,
    titulo: "Misa Dominical",
    fecha: "2024-09-15",
    hora: "10:00 AM",
    lugar: "Capilla Principal Torrijos Carter",
    descripcion: "Misa dominical con la comunidad",
    tipo: "misa",
  },
  {
    id: 2,
    titulo: "Novena a la Virgen del Carmen",
    fecha: "2024-09-16",
    hora: "6:00 PM",
    lugar: "Capilla Virgen del Carmen",
    descripcion: "Novena especial por las intenciones de los navegantes",
    tipo: "novena",
  },
  {
    id: 3,
    titulo: "Procesión de la Medalla Milagrosa",
    fecha: "2024-09-27",
    hora: "7:00 PM",
    lugar: "Desde Capilla Medalla Milagrosa",
    descripcion: "Procesión mensual con bendición de medallas",
    tipo: "procesion",
  },
];

// Información general de la parroquia
export const infoParroquia = {
  nombre: "Parroquia Nuestra Señora del Rosario",
  ubicacion: "Torrijos Carter, Arco Iris, Colón, Panamá",
  telefono: "+507 XXX-XXXX",
  email: "parroquia.rosario@gmail.com",
  parroco: "Padre [Nombre del Párroco]",
  horariosMisaDominical: [
    "8:00 AM - Capilla Principal",
    "10:00 AM - Capilla Principal",
    "4:00 PM - Capilla Medalla Milagrosa",
    "6:00 PM - Capilla Guadalupe",
  ],
  horariosMisaSemanal: [
    "Lunes 6:00 PM - Capilla Virgen del Carmen",
    "Martes 6:00 PM - Capilla Nuestra Señora de Lourdes",
    "Miércoles 6:00 PM - Capilla Santa Teresa de Calcuta",
    "Jueves 6:00 PM - Capilla Inmaculada Concepción",
    "Viernes 6:00 PM - Capilla Santa María la Antigua",
    "Sábado 8:00 AM - Capilla San José",
    "Sábado 6:00 PM - Capilla Principal",
  ],
  redesSociales: {
    instagram: "@parroquia_rosario_tc",
    youtube: "Parroquia Nuestra Señora del Rosario",
    facebook: "Parroquia Rosario Torrijos Carter",
  },
  servicios: [
    "Misas dominicales y diarias",
    "Bautismos",
    "Primeras Comuniones",
    "Confirmaciones",
    "Matrimonios",
    "Catequesis para niños y adultos",
    "Grupos de oración",
    "Visita a enfermos",
    "Obras de caridad",
    "Asesoría espiritual",
  ],
};
