/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
})

module.exports = withPWA({
    output: 'standalone'
})

module.exports = process.env.PWA == 1 ? withPWA(nextConfig) : nextConfig
