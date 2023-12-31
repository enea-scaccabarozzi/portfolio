//@ts-check

import { composePlugins, withNx } from '@nx/next';
import bundleAnalyzer from '@next/bundle-analyzer';

import '../../libs/backend/shared/src/lib/env.mjs';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.WEB_BUNDLE_ANALYZE === 'true',
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

export default withBundleAnalyzer(composePlugins(...plugins)(nextConfig));
