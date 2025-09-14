export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          <a
            href="#inicio"
            className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
          >
            Inicio
          </a>
          <a
            href="#capillas"
            className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
          >
            Capillas
          </a>
          <a
            href="#historia"
            className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
          >
            Historia
          </a>
          <a
            href="#documentales"
            className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
          >
            Documentales
          </a>
          <a
            href="#horarios"
            className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
          >
            Horarios
          </a>
          <a
            href="#contacto"
            className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
