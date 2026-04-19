/**
 * Returns the full GCS URL for a given image path.
 * If the path is already a full URL or starts with http, it returns it as is.
 * Otherwise, it prepends the GCS base URL from the environment.
 */
export function getImageUrl(src: string): string {
  const gcsUrl = process.env.NEXT_PUBLIC_GCS_URL;

  // If src is already a full URL, return it
  if (src.startsWith('http')) {
    return src;
  }

  // If we have a GCS URL, prepend it
  if (gcsUrl) {
    const path = src.startsWith('/') ? src : `/${src}`;
    return `${gcsUrl.replace(/\/$/, '')}${path}`;
  }

  // Fallback to the original src (local static assets)
  return src;
}
