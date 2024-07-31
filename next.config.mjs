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
      {
        protocol: 'https',
        hostname: '**/www.credly.com', //https://www.credly.com/badges/802f1d9c-a6bf-4e30-9d8d-375acd9ba6e4/public_url
        port: '',
        pathname: '/badges/**',
      },
    ],
  },
  env: {
    CODEWARS_URL: 'https://www.codewars.com/api/v1/users/',
    CODEWARS_USER: 'stephane777',
    CODEWARS_SOLVED:
      'https://www.codewars.com/api/v1/users/${CODEWARS_USER}/code-challenges/completed',
    CODEWARS_KATA: 'https://www.codewars.com/kata/',
  },
};

export default nextConfig;
// https://www.codewars.com/users/stephane777/badges/large
