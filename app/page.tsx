import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import { Linkable } from '@/ui/Linkable';

export async function generateMetadata(): Promise<Metadata> {
  const filePath = '/botw.jpg';
  const title = '自撮りハイラル図鑑';

  const headersInstance = headers();
  return {
    title: title,
    description: '自撮りハイラル図鑑',
    openGraph: {
      images: [`https://${(await headersInstance).get('host')}${filePath}`],
    },
  };
}

export default async function Page() {
  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <div className="flex flex-col space-y-6 w-full max-w-md">
        <Linkable
          href="/breath-of-the-wild"
          className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]"
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src="/botw.jpeg"
              alt="ブレスオブザワイルド"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Linkable>

        <Linkable
          href="/tears-of-the-kingdom"
          className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <div className="aspect-video relative overflow-hidden bg-zinc-800 flex items-center justify-center">
            <Image
              src="/totk.jpeg"
              alt="ティアーズオブザキングダム"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Linkable>
      </div>
    </div>
  );
}
