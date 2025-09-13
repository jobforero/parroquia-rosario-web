"use client";
import { useState } from "react";
import { MapPin, Calendar, Youtube, Instagram, Phone } from "lucide-react";
import {
  capillas,
  documentales,
  infoParroquia,
  type Capilla,
} from "../lib/data";

export default function ParroquiaHomepage() {
  const [selectedCapilla, setSelectedCapilla] = useState<Capilla | null>(null);

  return (
    
    <div className="min-h-screen bg-blue-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-100">
              {infoParroquia.nombre}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Torrijos Carter
            </p>
            <div className="flex justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{infoParroquia.ubicacion}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>{infoParroquia.telefono}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="inicio" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8">
              Bienvenidos a Nuestra Comunidad de Fe
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              La Parroquia Nuestra Señora del Rosario en Torrijos Carter es un
              lugar sagrado donde la comunidad se reúne en oración, celebración
              y servicio. Con nuestras
              {capillas.length} hermosas capillas, cada una con su propia
              historia y devoción especial.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={`https://instagram.com/${infoParroquia.redesSociales.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                <span>Síguenos</span>
              </a>
              <a
                href="#documentales"
                className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                <span>Videos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capillas Section */}
      <section id="capillas" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Nuestras Capillas
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Cada capilla tiene su propia historia y devoción especial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capillas.map((capilla) => (
              <div
                key={capilla.id}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-blue-100"
                onClick={() => setSelectedCapilla(capilla)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-t-2xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">⛪</span>
                    </div>
                    <h3 className="font-bold text-blue-900 text-lg">
                      {capilla.nombre}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-700 font-semibold text-center mb-2">
                    {capilla.descripcion}
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    Haz clic para conocer su historia
                  </p>
                  {capilla.fechaCelebracion && (
                    <p className="text-yellow-600 text-xs text-center mt-1 font-medium">
                      Fiesta: {capilla.fechaCelebracion}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section
        id="historia"
        className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Nuestra Historia
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Parroquia Nuestra Señora del Rosario en Torrijos Carter tiene
                una rica historia de fe y servicio a la comunidad. Fundada con
                el propósito de brindar un espacio sagrado para la oración y el
                encuentro comunitario.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A lo largo de los años, hemos crecido hasta incluir{" "}
                {capillas.length} hermosas capillas, cada una dedicada a
                diferentes advocaciones marianas y santos, reflejando la diversa
                espiritualidad de nuestra comunidad.
              </p>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Conocer más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentales Section */}
      <section id="documentales" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Documentales
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Conoce más sobre nuestra parroquia a través de estos videos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentales.map((documental) => (
              <div
                key={documental.id}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-100"
              >
                <div className="h-48 bg-gradient-to-br from-red-200 to-pink-200 rounded-t-2xl flex items-center justify-center">
                  <Youtube className="w-16 h-16 text-red-600" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {documental.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {documental.descripcion}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Duración: {documental.duracion} | Categoría:{" "}
                    {documental.categoria}
                  </p>
                  <a
                    href={documental.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Ver Video</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios Section */}
      <section
        id="horarios"
        className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Horarios de Misas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Misas Dominicales */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Domingos
              </h3>
              <div className="space-y-3">
                {infoParroquia.horariosMisaDominical.map((horario, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{horario}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Misas de Semana */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Semana
              </h3>
              <div className="space-y-2">
                {infoParroquia.horariosMisaSemanal.map((horario, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-yellow-50 rounded-lg transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-700 text-sm">{horario}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-200">
                Contacto
              </h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{infoParroquia.ubicacion}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{infoParroquia.telefono}</span>
                </p>
                <p className="text-sm text-blue-200">
                  Email: {infoParroquia.email}
                </p>
                <p className="text-sm text-blue-200">
                  Párroco: {infoParroquia.parroco}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-200">
                Servicios
              </h3>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {infoParroquia.servicios.slice(0, 6).map((servicio, index) => (
                  <p key={index} className="text-blue-200">
                    • {servicio}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-200">
                Síguenos
              </h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href={`https://instagram.com/${infoParroquia.redesSociales.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={`https://youtube.com/@${infoParroquia.redesSociales.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm text-blue-200">
                Instagram: {infoParroquia.redesSociales.instagram}
              </p>
              <p className="text-sm text-blue-200">
                YouTube: {infoParroquia.redesSociales.youtube}
              </p>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 {infoParroquia.nombre} - Torrijos Carter. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal para detalles de capilla */}
      {selectedCapilla && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  {selectedCapilla.nombre}
                </h3>
                <button
                  onClick={() => setSelectedCapilla(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <p className="text-blue-700 font-semibold mb-2">
                {selectedCapilla.descripcion}
              </p>
              <p className="text-yellow-600 font-medium mb-4">
                Patrona: {selectedCapilla.patrona}
              </p>

              {selectedCapilla.fechaCelebracion && (
                <p className="text-green-600 font-medium mb-4">
                  🎉 Fiesta Patronal: {selectedCapilla.fechaCelebracion}
                </p>
              )}

              <div className="h-48 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-6xl">⛪</span>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Historia:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedCapilla.historia}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  Horarios de Misa:
                </h4>
                <ul className="text-sm text-gray-600">
                  {selectedCapilla.horariosMisa.map((horario, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{horario}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCapilla.actividades &&
                selectedCapilla.actividades.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Actividades Especiales:
                    </h4>
                    <ul className="text-sm text-gray-600">
                      {selectedCapilla.actividades.map((actividad, index) => (
                        <li key={index} className="mb-1">
                          • {actividad}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
