import { useState } from "react";
import { ImageOff } from "lucide-react";

function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  containerClassName,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[#EDE9E2] text-[#6B6460] ${fallbackClassName || className || containerClassName}`}
      >
        <ImageOff size={22} strokeWidth={1.5} className="text-[#BF9A5E]/60" />
        <p className="jost text-[10px] uppercase tracking-widest text-[#6B6460]/70">
          Not Available
        </p>
      </div>
    );
  }

  return (
    <div className={`relative ${containerClassName || className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer rounded-inherit" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-top transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${containerClassName ? className : ""}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading="lazy"
        {...props}
      />
    </div>
  );
}

export default ImageWithFallback;
