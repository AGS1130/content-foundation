/** @type {import('next').NextConfig} */
const isPrd = process.env.NODE_ENV === 'production'
const isInspect = process.env.INSPECT === 'true'

const routes = require('./configs/routes')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: isInspect })

let config = {
  // Identify unsafe lifecycles, legacy API usage, and a number of other features.
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
  // Run ESLint on the directories during production builds (next build)
  // https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: ['pages', 'scripts', 'src'],
  },
  // Define a list of remote domains that you intend to access remote images. 
  // https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: [],
  },
  pageExtensions: ['ts', 'tsx'],
  // Configure the PWA plugin for Next.js
  // https://github.com/shadowwalker/next-pwa#configuration
  pwa: {
    runtimeCaching,
    disable: !isPrd,
    buildExcludes: [/middleware-manifest.json$/],
    mode: 'production',
    register: true,
    dest: 'public',
  },
  // Redirects allow you to redirect an incoming request path to a different destination path.
  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  async redirects() {
    return routes
  },
  // Extend the usage and functionality of the Next.js Webpack
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config) => {
    if (isPrd) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  }
}

if (isInspect) {
  config = withBundleAnalyzer(config)
} else {
  config = withPWA(config)
}

module.exports = config
