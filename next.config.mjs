/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.weatherbit.io',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
