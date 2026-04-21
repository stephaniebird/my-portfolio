import Image from "next/image";

interface ScrollableImageProps {
  src: string;
  alt: string;
  imageTopMargin?: number;
}

export default function ScrollableImage({ src, alt, imageTopMargin = 0 }: ScrollableImageProps) {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ height: "586px", overflowY: "auto" }}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        quality={90}
        className="w-full h-auto block"
        style={{ marginTop: imageTopMargin }}
      />
    </div>
  );
}
