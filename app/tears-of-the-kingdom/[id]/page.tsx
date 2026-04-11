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
import { notFound } from 'next/navigation';

import { items } from '@/lib/totk/items';
import { Button } from '@/ui/Button';
import { ItemImage } from '@/ui/ItemImage';
import { Tag } from '@/ui/Tag';
import { locationText } from '@/utils/locationText';

type Params = Promise<{ id: string }>;

interface ItemProps {
  params: Params;
}

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const id = (await params).id;

  const item = items.find((x) => x.id === id);
  const filePath = id ? `/assets/images/totk/${id}.jpg` : '/totk.jpg';
  const title = item
    ? `${item.name} - ティアーズオブザキングダム自撮りハイラル図鑑`
    : 'ティアーズオブザキングダム自撮りハイラル図鑑';

  const headersInstance = headers();

  return {
    title: title,
    description: 'ティアーズオブザキングダムの自撮りハイラル図鑑',
    openGraph: {
      type: 'website',
      images: [`https://${(await headersInstance).get('host')}${filePath}`],
    },
    twitter: {
      title: title,
      description: 'ティアーズオブザキングダムの自撮りハイラル図鑑',
      card: 'summary_large_image',
      creator: '@gggooottto',
      images: [`https://${(await headersInstance).get('host')}${filePath}`],
    },
  };
}

export default async function Item({ params }: ItemProps) {
  const id = (await params).id;
  const item = items.find((x) => x.id === id);
  const prevItem = items.find(
    (x) => x.id === String(Number(id) - 1).padStart(3, '0'),
  );
  const nextItem = items.find(
    (x) => x.id === String(Number(id) + 1).padStart(3, '0'),
  );

  if (!item) {
    return notFound();
  }

  return (
    <section>
      <div className="text-sky-300">
        <div className="space-y-6">
          <div className="grid grid-flow-row-dense lg:grid-cols-9 md:grid-cols-1 gap-3 justify-items-center">
            <ItemImage id={item.id} name={item.name} />

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
                      <Tag key={location} variant="lime">
                        {location}
                      </Tag>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-row justify-center space-x-4">
                {item.recoverableMaterials && (
                  <div className="mt-2 text-center">
                    <p className="text-2xl">ドロップアイテム</p>
                    {item.recoverableMaterials.map((material) => {
                      return (
                        <Tag key={material} variant="indigo">
                          {material}
                        </Tag>
                      );
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
              <Button href={`/tears-of-the-kingdom/${prevItem.id}`}>
                <span>
                  <ChevronDoubleLeftIcon className="h-6 w-6" />
                </span>
                <span>{prevItem.name}</span>
              </Button>
            )}
            {nextItem && (
              <Button href={`/tears-of-the-kingdom/${nextItem.id}`}>
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
