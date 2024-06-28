/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**/www.codewars.com',
        port: '',
        pathname: '/users/stephane777/badges/**',
      },
    ],
  },
};

export default nextConfig;
// https://www.codewars.com/users/stephane777/badges/large
