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
            },
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https',
            },
            {
                hostname: 'lh3.googleusercontent.com',
                protocol: 'https',
            }
        ]
    }
}

module.exports = nextConfig
