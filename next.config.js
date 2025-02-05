const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // отключает PWA в dev-режиме
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true, // Включает строгий режим React
});
