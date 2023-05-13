import '@/styles/globals.css';
import React from 'react';
import { Meta } from './meta';
import { Footer } from './Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Meta />
      <body className="overflow-y-scroll  bg-zinc-900">
        <div className="py-8 sm:mx-1 lg:mx-auto lg:max-w-6xl">
          <div className="rounded-xl border border-zinc-800 bg-black lg:px-8 lg:py-8 md:px-1 md:py-6">
            <h1 className="text-sky-300 text-center text-2xl mb-4">
              自撮りハイラル図鑑
            </h1>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
