/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // here you can add the url's that you are planning
    // to use inside your next/image.

    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
