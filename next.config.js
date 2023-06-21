/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    appName: process.env.APP_NAME
  },
  publicRuntimeConfig: {
    appNameClient: process.env.APP_NAME_CLIENT
  }
}

module.exports = nextConfig
