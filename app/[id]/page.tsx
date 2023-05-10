import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { items } from '@/lib/items';
import Image from 'next/image';

export default function Item({ params }: { params: { id: string } }) {
  const item = items.find((x) => x.id === params.id);

  if (!item) {
    return notFound();
  }

  return (
    <section>
      <div className="text-sky-300">
        <div className="space-y-4">
          <div className="flex space-x-1">
            <div className="flex-initial w-96 h-96 relative overflow-hidden">
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

            <div className="flex-1">
              <div className="text-xl text-center mb-2">
                {item.name} <span className="text-xs">No. {item.id}</span>
              </div>
              <div className="text-xl">{item.description}</div>

              {item.locations && (
                <div className="mt-2 text-center">
                  <p className="text-2xl">主な生息地</p>
                  {item.locations.map((location) => {
                    return <span className="text-xl">{location} </span>;
                  })}
                </div>
              )}

              {item.recoverableMaterials && (
                <div className="mt-2 text-center">
                  {item.recoverableMaterials.map((material) => {
                    return (
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                        {material}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
