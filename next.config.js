/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
