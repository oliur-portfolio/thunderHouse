/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, must-revalidate",
                    },
                ],
            },
            {
                source: "/_next/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=0, s-maxage=604800, stale-while-revalidate=86400",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
