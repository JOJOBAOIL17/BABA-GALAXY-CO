import { useState } from 'react';
import { Camera } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full bg-gradient-to-br from-[#0B192C] via-[#132847] to-[#1E3A6E] flex flex-col items-center justify-center p-6 text-center text-white/80"
        role="img"
        aria-label={alt}
      >
        <Camera className="w-7 h-7 mb-2 text-white/60" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide text-white/75">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
