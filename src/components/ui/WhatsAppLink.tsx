import WhatsAppIcon from "./WhatsAppIcon";
import { infoParroquia } from "../../lib/data";

interface WhatsAppLinkProps {
  className?: string;
}

export default function WhatsAppLink({ 
  className = "flex items-center space-x-2 hover:text-green-400 transition-colors" 
}: WhatsAppLinkProps) {
  const numero = infoParroquia.whatsapp.replace(/-/g, "");
  
  return (
    <a
      href={`https://wa.me/507${numero}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <WhatsAppIcon className="w-4 h-4" />
      <span>{infoParroquia.whatsapp}</span>
    </a>
  );
}