//@ts-check

import { composePlugins, withNx } from '@nx/next';
import nextra from 'nextra';

import '../../libs/backend/shared/src/lib/env.mjs';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    serverComponentsExternalPackages: [
      '@zenstackhq/runtime',
      '@zenstackhq/server',
    ],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default withNextra(composePlugins(...plugins)(nextConfig));
