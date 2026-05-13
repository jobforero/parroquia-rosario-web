import { MapPin } from "lucide-react";
import { infoParroquia } from "../../lib/data";

interface UbicacionLinkProps {
  iconSize?: string;
  className?: string;
}

export default function UbicacionLink({ 
  iconSize = "w-4 h-4",
  className = "flex items-center space-x-2 hover:text-yellow-300 transition-colors"
}: UbicacionLinkProps) {
  return (
    <a
      href="https://maps.app.goo.gl/L2cRypdhyfNsWBQM8"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MapPin className={iconSize} />
      <span>{infoParroquia.ubicacion}</span>
    </a>
  );
}