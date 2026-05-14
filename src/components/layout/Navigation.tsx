"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#capillas", label: "Capillas" },
  { href: "#historia", label: "Historia" },
  { href: "#documentales", label: "Documentales" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
  { href: "#mision", label: "Misión" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">

        {/* Desktop */}
        <div className="hidden md:flex justify-center space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile - botón hamburguesa */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-blue-700 font-semibold text-sm">
            Parroquia N.S. del Rosario
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 hover:text-yellow-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile - menú desplegable */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 pb-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-blue-700 hover:text-yellow-600 font-semibold transition-colors text-center py-1 border-b border-blue-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}