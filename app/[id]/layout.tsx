import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>

      <div className="my-6 mx-2">
        <Link
          href="/"
          className="text-sky-300 border border-sky-300 p-3 hover:bg-sky-300 hover:text-black transition-colors ease-in delay-75"
        >
          戻る
        </Link>
      </div>
    </div>
  );
}
