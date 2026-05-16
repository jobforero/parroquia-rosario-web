import Image from "next/image";

interface MisionIconProps {
  src: string;
  alt: string;
  size?: number;
}

export default function MisionIcon({ src, alt, size = 48 }: MisionIconProps) {
  return (
    <div
      className="relative flex-shrink-0 rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}