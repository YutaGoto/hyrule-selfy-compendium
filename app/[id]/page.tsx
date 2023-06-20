import { notFound } from 'next/navigation';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid';

import { items } from '@/lib/items';
import { locationText } from 'utils/locationText';

interface ItemProps {
  params: {
    id: string;
  };
}

export default function Item({ params }: ItemProps) {
  const item = items.find((x) => x.id === params.id);

  if (!item) {
    return notFound();
  }

  return (
    <section>
      <div className="text-sky-300">
        <div className="space-y-6">
          <div className="grid grid-flow-row-dense lg:grid-cols-9 md:grid-cols-1 gap-3 justify-items-center">
            <div className="lg:col-span-4 md:col-span-1 w-96 h-96 relative overflow-hidden">
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
              <div className="text-xl">{item.description}</div>

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
                      return (
                        <span
                          key={material}
                          className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
                        >
                          {material}
                        </span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
