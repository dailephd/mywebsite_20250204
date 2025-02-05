/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/(.*)",
                has: [
                    {
                        type: "header",
                        key: "x-forwarded-proto",
                        value: "http",
                    },
                ],
                destination: "https://dailephd.com/:path*", // Redirect to HTTPS
                permanent: true,
            },
        ];
    },
    poweredByHeader: false, // Optional: remove "X-Powered-By" header for security
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
