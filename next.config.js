/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'store.innovacode.online',
                protocol: 'https',
            }
        ]
    }
}

module.exports = nextConfig
