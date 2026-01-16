import React, { useState, useEffect } from 'react';
import { cn } from '../../utils';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackContent?: React.ReactNode;
}

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'; // Books/Library generic

export const ImageWithFallback = ({ 
  src, 
  fallbackSrc = DEFAULT_FALLBACK_IMAGE, 
  fallbackContent, 
  className, 
  alt, 
  ...props 
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
    setImgSrc(fallbackSrc);
  };

  // If we have an error AND specific fallback content (like an Icon or Emoji for a logo), render that instead of an image
  if (error && fallbackContent) {
    return (
      <div className={cn("flex items-center justify-center bg-slate-100 text-slate-400 w-full h-full", className)}>
        {fallbackContent}
      </div>
    );
  }

  // Otherwise, render the image (which might now be pointing to the fallbackSrc)
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={cn("transition-opacity duration-300", className)}
      {...props}
    />
  );
};
