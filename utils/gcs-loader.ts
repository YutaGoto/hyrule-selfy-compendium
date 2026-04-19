'use client';

interface GCSLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function gcsLoader({ src, width, quality }: GCSLoaderProps) {
  const gcsUrl = process.env.NEXT_PUBLIC_GCS_URL;

  // If src is already a full URL, return it
  if (src.startsWith('http')) {
    return src;
  }

  // If we have a GCS URL, use it
  if (gcsUrl) {
    // Ensure src starts with a slash
    const path = src.startsWith('/') ? src : `/${src}`;
    // GCS public bucket URL or Cloud CDN URL
    return `${gcsUrl}${path}`;
  }

  // Fallback to the original src (for local dev)
  return src;
}
