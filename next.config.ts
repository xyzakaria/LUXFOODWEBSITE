/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'fr', 'ar', 'tr'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
};

module.exports = nextConfig;