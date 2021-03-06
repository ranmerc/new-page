const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    domains: ['openweathermap.org'],
  },
  pwa: {
    dest: 'public',
    publicExcludes: ['!**/*'],
    buildExcludes: [/.*/],
    disable: process.env.NODE_ENV === 'development',
    // dynamicStartUrl: false,
    runtimeCaching: [
      {
        urlPattern: /inter-v3-latin-(regular|700|500).*(\.woff2|\.woff)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'inter font',
        },
      },
      {
        urlPattern: /oxygen-v10-latin-700.*(\.woff2|\.woff)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'oxygen font',
        },
      },
    ],
  },
});
