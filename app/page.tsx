import Image from 'next/image';
import Link from 'next/link';
import { items } from '@/lib/items';
import { Meta } from './meta';

export default function Page() {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-flow-row gap-4 justify-items-center text-sky-300 md:grid-cols-2 sm:grid-cols-1">
      {items.map((item) => {
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
                    }}
                    width={192}
                    height={192}
                    className="scale-450"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
