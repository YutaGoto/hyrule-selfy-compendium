import Link from 'next/link';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div>{children}</div>

      <div>
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
