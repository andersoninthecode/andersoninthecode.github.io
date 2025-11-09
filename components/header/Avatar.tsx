import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div>
      <Image
        className="w-24 h-24 rounded-full mx-auto mb-4"
        src={src}
        alt={alt}
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
