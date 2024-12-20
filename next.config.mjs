/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
          },
          {
            protocol: 'https',
            hostname: 'flowbite.com',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
          },
        ],
      },
};

export default nextConfig;
