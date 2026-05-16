import Image from "next/image";

interface HeroIconProps {
  src: string;
  alt: string;
  size?: number;
}

export default function HeroIcon({ src, alt, size = 48 }: HeroIconProps) {
  return (
    <div
      className="relative mx-auto mb-4 rounded-full overflow-hidden"
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