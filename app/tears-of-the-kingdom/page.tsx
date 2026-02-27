import type { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const filePath = '/og-image-totk.jpg'; // Placeholder for now
  const title = 'ティアーズ オブ ザ キングダム - 自撮りハイラル図鑑';

  const headersInstance = headers();
  return {
    title: title,
    description: 'ティアーズ オブ ザ キングダムの図鑑です。',
    openGraph: {
      images: [`https://${(await headersInstance).get('host')}${filePath}`],
    },
  };
}

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-emerald-400 text-3xl font-bold mb-4">Coming Soon</h2>
      <p className="text-zinc-400">
        ティアーズ オブ ザ キングダム版は現在準備中です。
      </p>

      <div className="mt-12 p-8 border border-zinc-800 rounded-xl bg-zinc-900/50 text-zinc-500 italic">
        "明日のために、今は牙を研げ。"
      </div>
    </div>
  );
}
