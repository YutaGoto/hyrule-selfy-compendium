import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  HeartIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { items } from '@/lib/items';
import { Button } from '@/ui/Button';
import { Tag } from '@/ui/Tag';
import { locationText } from '@/utils/locationText';

interface ItemProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const id = params.id;

  const item = items.find((x) => x.id === id);
  const filePath = id ? `/assets/images/${id}.jpg` : '/og-image.jpg';
  const title = item
    ? `${item.name} - 自撮りハイラル図鑑`
    : '自撮りハイラル図鑑';

  const headersInstance = headers();

  return {
    title: title,
    description: 'ブレスオブザワイルドの自撮りハイラル図鑑',
    openGraph: {
      type: 'website',
      images: [`https://${headersInstance.get('host')}${filePath}`],
    },
    twitter: {
      title: title,
      description: 'ブレスオブザワイルドの自撮りハイラル図鑑',
      card: 'summary_large_image',
      creator: '@gggooottto',
      images: [`https://${headersInstance.get('host')}${filePath}`],
    },
  };
}

export default function Item({ params }: ItemProps) {
  const item = items.find((x) => x.id === params.id);
  const prevItem = items.find(
    (x) => x.id === String(Number(params.id) - 1).padStart(3, '0'),
  );
  const nextItem = items.find(
    (x) => x.id === String(Number(params.id) + 1).padStart(3, '0'),
  );

  if (!item) {
    return notFound();
  }

  return (
    <section>
      <div className="text-sky-300">
        <div className="space-y-6">
          <div className="grid grid-flow-row-dense lg:grid-cols-9 md:grid-cols-1 gap-3 justify-items-center">
            <div className="lg:col-span-4 md:col-span-1 lg:w-96 h-96 relative overflow-hidden">
              <Image
                src={`/assets/images/${item.id}.jpg`}
                alt={item.name}
                style={{
                  objectPosition: '63px 37px',
                }}
                width={384}
                height={384}
                quality={100}
                className="scale-450"
              />
            </div>

            <div className="lg:col-span-5 md:col-span-1">
              <div className="text-xl text-center mb-2">
                {item.name} <span className="text-xs">No. {item.id}</span>
              </div>
              <div className="text-xl break-all whitespace-pre-wrap">
                {item.description}
              </div>

              {item.locations && (
                <div className="mt-2 text-center">
                  <p className="text-2xl">{locationText(item.category)}</p>
                  {item.locations.map((location) => {
                    return (
                      <span key={location} className="text-xl">
                        {location}{' '}
                      </span>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-row justify-center space-x-4">
                {item.recoverableMaterials && (
                  <div className="mt-2 text-center">
                    <p className="text-2xl">ドロップアイテム</p>
                    {item.recoverableMaterials.map((material) => {
                      return <Tag key={material} text={material} />;
                    })}
                  </div>
                )}

                {item.heartsRecoverable && (
                  <div className="mt-2 text-center">
                    <p className="text-2xl">回復量</p>
                    <div className="text-xl flex items-center justify-center">
                      <div>
                        <HeartIcon className="h-6 w-6" />
                      </div>
                      <div>{item.heartsRecoverable}</div>
                    </div>
                  </div>
                )}

                {item.cookingEffect && (
                  <div className="mt-2 text-center">
                    <p className="text-2xl">料理したときの効果</p>
                    <div className="text-xl flex items-center justify-center">
                      <div>{item.cookingEffect}</div>
                    </div>
                  </div>
                )}

                {item.properties && (
                  <div className="mt-2 text-center">
                    <p className="text-2xl">性能</p>
                    <div className="text-xl flex items-center justify-center">
                      <div>
                        {item.properties.type === 'sword' && (
                          <WrenchIcon className="h-6 w-6" />
                        )}
                      </div>
                      <div>
                        {item.properties.type === 'shields' && (
                          <ShieldCheckIcon className="h-6 w-6" />
                        )}
                      </div>
                      <div>
                        {item.properties.type === 'bow' && (
                          <ChevronLeftIcon className="h-6 w-6" />
                        )}
                      </div>
                      <div>{item.properties.value}</div>
                    </div>
                  </div>
                )}

                {item.additionalEffect && (
                  <div className="mt-2 text-center">
                    <p className="text-2xl">追加効果</p>
                    <div className="text-xl flex items-center justify-center">
                      <div>{item.additionalEffect}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <div className="flex flex-row justify-center space-x-4">
            {prevItem && (
              <Button href={`/${prevItem.id}`}>
                <span>
                  <ChevronDoubleLeftIcon className="h-6 w-6" />
                </span>
                <span>{prevItem.name}</span>
              </Button>
            )}
            {nextItem && (
              <Button href={`/${nextItem.id}`}>
                <span>{nextItem.name}</span>
                <span>
                  <ChevronDoubleRightIcon className="h-6 w-6" />
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
