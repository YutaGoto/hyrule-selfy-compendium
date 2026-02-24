import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import { Linkable } from '@/ui/Linkable';

export async function generateMetadata(): Promise<Metadata> {
  const filePath = '/og-image.jpg';
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
      <h2 className="text-zinc-400 text-lg mb-4">タイトルを選択してください</h2>

      <div className="flex flex-col space-y-6 w-full max-w-md">
        <Linkable
          href="/breath-of-the-wild"
          className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]"
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src="/og-image.jpg"
              alt="ブレスオブザワイルド"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                The Legend of Zelda: Breath of the Wild
              </h3>
              <p className="text-zinc-400 text-sm">ブレス オブ ザ ワイルド</p>
            </div>
          </div>
        </Linkable>

        <Linkable
          href="/tears-of-the-kingdom"
          className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <div className="aspect-video relative overflow-hidden bg-zinc-800 flex items-center justify-center">
            {/* プレースホルダー画像 - 用意できたらここを差し替える */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <div className="relative z-10 text-center px-4">
              <div className="text-zinc-500 mb-2">Thumbnail Coming Soon</div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                The Legend of Zelda: Tears of the Kingdom
              </h3>
              <p className="text-zinc-400 text-sm">
                ティアーズ オブ ザ キングダム
              </p>
            </div>
          </div>
        </Linkable>
      </div>
    </div>
  );
}
