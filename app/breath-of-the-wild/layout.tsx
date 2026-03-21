import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import type React from 'react';
import { Linkable } from '@/ui/Linkable';

export default function BreathOfTheWildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-8">
        <Linkable
          href="/"
          className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors flex items-center"
        >
          <ChevronLeftIcon className="w-4 h-4 mr-1" />
          タイトル選択へ
        </Linkable>
        <div className="text-sky-400 font-medium bg-sky-950/20 px-4 py-2 rounded-lg border border-sky-900/30">
          Breath of the Wild
        </div>
        <div className="w-24" />
      </div>
      {children}
    </div>
  );
}
