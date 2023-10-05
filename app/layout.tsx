import '@/styles/globals.scss';

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/ui/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: must use html element.
    <html>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="py-8 sm:mx-1 lg:mx-auto lg:max-w-6xl">
          <div className="rounded-xl border border-zinc-800 bg-black lg:px-8 lg:py-8 md:px-1 md:py-6">
            <h1 className="text-sky-300 text-center text-2xl mb-4">
              自撮りハイラル図鑑
            </h1>
            {children}
          </div>
        </div>
        <Footer reactVersion="18.2.0" nextVersion="13.4.19" />
        <Analytics />
      </body>
    </html>
  );
}
