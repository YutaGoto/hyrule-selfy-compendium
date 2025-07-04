import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import { items } from '@/lib/items';
import { Linkable } from '@/ui/Linkable';
import { SearchForm } from '@/ui/SearchForm';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export async function generateMetadata(): Promise<Metadata> {
  const filePath = '/og-image.jpg';
  const title = '自撮りハイラル図鑑';

  const headersInstance = headers();
  return {
    title: title,
    description: 'ブレスオブザワイルドの自撮りハイラル図鑑',
    openGraph: {
      images: [`https://${(await headersInstance).get('host')}${filePath}`],
    },
  };
}

interface Props {
  searchParams: SearchParams;
}

export default async function Page({ searchParams }: Props) {
  const { loc, category, searchText } = await searchParams;

  const filteredItems = items.filter((item) => {
    // SearchParams(location, category, searchText)からアイテムを絞り込む
    // どれも指定されていない場合は全てのアイテムを表示する
    if (!loc && !category && !searchText) {
      return true;
    }

    // 指定された場所のアイテムのみ絞り込む
    if (loc && !item.locations?.flat().includes(loc)) {
      return false;
    }

    // 指定された種類のアイテムのみ絞り込む
    if (category && category !== item.category) {
      return false;
    }

    // 指定された検索ワードを含むアイテムのみ絞り込む
    if (searchText && !item.name.includes(searchText)) {
      return false;
    }

    return true;
  });

  return (
    <>
      <SearchForm />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-flow-row gap-4 justify-items-center text-sky-300 md:grid-cols-2 sm:grid-cols-1">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="w-64">
              <Linkable
                href={`/${item.id}`}
                key={item.name}
                className="flex justify-center space-y-1 rounded-lg border border-white/10 px-4 py-3 hover:border-white/20"
              >
                <div>
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
              </Linkable>
            </div>
          );
        })}
      </div>
    </>
  );
}
