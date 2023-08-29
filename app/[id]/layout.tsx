import { ButtonLink } from '@/ui/ButtonLink';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>

      <div className="flex flex-row justify-start my-8 mx-2 text-sky-300">
        <ButtonLink href="/">
          <span>一覧へ戻る</span>
        </ButtonLink>
      </div>
    </div>
  );
}
