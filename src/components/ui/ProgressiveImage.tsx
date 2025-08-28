// components/ui/ProgressiveImage.tsx

import { useState } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProgressiveImage({
  src,
  alt,
  className = "",
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className}>
      {/* Skeleton Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700" />
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
