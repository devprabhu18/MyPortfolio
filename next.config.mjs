/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          pathname: '/devprabhu18.png', // Specific path to your profile image
        },
      ],
      },
};

export default nextConfig;
