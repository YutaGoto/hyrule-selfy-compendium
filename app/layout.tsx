import '@/styles/globals.scss';

import { Analytics } from '@vercel/analytics/react';
import { BotIdClient } from 'botid/client';
import type React from 'react';
import { Footer } from '@/ui/Footer';

const protectedRoutes = [
  {
    path: '/api/*',
    method: '*',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: must use html element.
    <html>
      <head>
        <BotIdClient protect={protectedRoutes} />
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="py-8 sm:mx-1 lg:mx-auto lg:max-w-6xl">
          <div className="rounded-xl border border-zinc-800 bg-black lg:px-8 lg:py-8 md:px-1 md:py-6">
            <h1 className="text-sky-300 text-center text-2xl mb-4">
              自撮りハイラル図鑑
            </h1>
            {children}
          </div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
