/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    poweredByHeader: false,
    images: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.cloudinary.com',
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
