import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { items } from '@/lib/items';
import { SearchForm } from '@/ui/SearchForm';

export async function generateMetadata(): Promise<Metadata> {
  const filePath = '/og-image.jpg';
  const title = '自撮りハイラル図鑑';

  const headersInstance = headers();
  return {
    title: title,
    description: 'ブレスオブザワイルドの自撮りハイラル図鑑',
    openGraph: {
      images: [`https://${headersInstance.get('host')}${filePath}`],
    },
  };
}

export default function Page({searchParams}: {searchParams: any} ) {
  const options = [
    'ハイラル平原'
  ]

  const filteredItems = items.filter((item) => {
    if (searchParams["location"]) {
      return item.locations?.includes(searchParams["location"]);
    }
    return true;
  })

  return (
    <>
    <SearchForm options={options} />
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-flow-row gap-4 justify-items-center text-sky-300 md:grid-cols-2 sm:grid-cols-1">
      {filteredItems.map((item) => {
        return (
          <div key={item.id} className="w-64">
            <Link
              href={`/${item.id}`}
              key={item.name}
              className="flex justify-center space-y-1 rounded-lg border border-white/10 px-4 py-3 hover:border-white/20"
            >
              <div className="">
                <div className="text-center">{item.name}</div>
                <div className="overflow-hidden w-48 h-48 text-center">
                  <Image
                    src={`/assets/images/${item.id}.jpg`}
                    alt={item.name}
                    style={{
                      objectPosition: '32px 18px',
                      width: 'auto',
                    }}
                    width={192}
                    height={192}
                    quality={100}
                    className="scale-450"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
    </>
  );
}
