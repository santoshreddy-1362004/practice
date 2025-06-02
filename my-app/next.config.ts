/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Keep this if you use Cloudinary
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // ✅ This is for Tailark images
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

