/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    output: 'standalone',
    // reactStrictMode: false,
}

module.exports = process.env.PWA == 1 ? withPWA(nextConfig) : nextConfig
