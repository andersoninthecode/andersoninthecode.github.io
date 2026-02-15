import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="relative w-10 h-10 overflow-hidden rounded-full ring-2 ring-border group-hover:ring-indigo-500 transition-all">
      <Image
        className="object-cover"
        src={src}
        alt={alt}
        fill
        sizes="40px"
        priority
      />
    </div>
  );
}
