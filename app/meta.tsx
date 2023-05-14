import { headers } from 'next/headers';
import { items } from '@/lib/items';

interface MetaProps {
  id?: string;
}

export const Meta = ({ id }: MetaProps) => {
  const item = items.find((x) => x.id === id);
  const filePath = id ? `/assets/images/${id}.jpg` : '/og-image.jpg';
  const title = item
    ? `${item.name} - 自撮りハイラル図鑑`
    : '自撮りハイラル図鑑';

  const headersInstance = headers();
  return (
    <head>
      <title>{title}</title>

      <meta
        property="og:image"
        content={`https://${headersInstance.get('host')}${filePath}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        name="twitter:image"
        content={`https://${headersInstance.get('host')}${filePath}`}
      />
      <meta name="twitter:image:type" content="image/jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gggooottto" />
    </head>
  );
};
