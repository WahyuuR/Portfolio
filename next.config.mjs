/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/portfolio',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
