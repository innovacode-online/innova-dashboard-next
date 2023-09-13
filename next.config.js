/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    
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
