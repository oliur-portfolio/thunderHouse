/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/insights",
                destination: "/",
                permanent: true,
            },
            {
                source: "/competencies",
                destination: "/",
                permanent: true,
            },
            {
                source: "/contact",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
