/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["github-readme-stats-git-masterrstaa-rickstaa.vercel.app"],
  },
};

module.exports = nextConfig;
