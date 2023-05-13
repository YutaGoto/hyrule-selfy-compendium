import { headers } from 'next/headers';

export const Meta = () => {
  const headersInstance = headers();
  return (
    <head>
      <title>自撮りハイラル図鑑</title>

      <meta
        property="og:image"
        content={`https://${headersInstance.get('host')}/og-image.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        name="twitter:image"
        content={`https://${headersInstance.get('host')}/og-image.jpg`}
      />
      <meta name="twitter:image:type" content="image/jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gggooottto" />
    </head>
  );
};
