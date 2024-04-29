import { Linkable } from '@/ui/Linkable';
import type React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>

      <div className="flex flex-row justify-start my-8 mx-2">
        <Linkable href="/" className="text-sky-300 hover:text-sky-700">
          <span>一覧へ戻る</span>
        </Linkable>
      </div>
    </div>
  );
}
