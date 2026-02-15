import type React from 'react';
import { Linkable } from '@/ui/Linkable';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>

      <div className="mx-2 my-8 flex flex-row justify-start">
        <Linkable href="/" className="text-sky-300 hover:text-sky-700">
          <span>一覧へ戻る</span>
        </Linkable>
      </div>
    </div>
  );
}
