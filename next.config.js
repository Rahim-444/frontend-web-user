/** @type {import('next').NextConfig} */

var devconfig = {};
try {
  devconfig = require('./dev.next.config.js');
} catch (ex) { }

// const nextConfig = {
//   basePath: '/user',
//   crossOrigin: 'use-credentials',
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com'
//       },
//       {
//         protocol: 'https',
//         hostname: 'avatar.vercel.sh'
//       }
//     ]
//   },
//   ...devconfig
// };
//
// module.exports = nextConfig;
//
const config = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/',
          destination: 'https://dev.mitech.ai/',
          basePath: false
        },
        {
          source: '/:path*',
          destination: 'https://dev.mitech.ai/:path*',
          basePath: false
        }
      ]
    };
  }
};

module.exports = config;
