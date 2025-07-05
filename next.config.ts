import path from 'node:path';
import { withBotId } from 'botid/next/config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {},
};

export default withBotId(nextConfig);
