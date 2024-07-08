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
