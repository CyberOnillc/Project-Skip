/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "vercel.com",
      "https://res.cloudinary.com",
      "user-images.githubusercontent.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/techwithty",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/Q9rRVcv5",
        permanent: false,
      },
      {
        source: "/int-prolv-01",
        destination: "https://www.eventbrite.com/o/project-skip-me-83872736963",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

module.exports = {
  ...nextConfig,
  experimental: {
    serverActions: true,
  },
};
