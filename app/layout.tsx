import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>自撮りハイラル図鑑</title>
      </head>
      <body className="overflow-y-scroll  bg-zinc-900">
        <div className="py-8 md:px-2 sm:mx-1 lg:mx-auto lg:max-w-6xl">
          <div className="rounded-xl border border-zinc-800 bg-black p-8">
            <h1 className="text-sky-300 text-center text-2xl mb-4">
              ハイラル図鑑
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
