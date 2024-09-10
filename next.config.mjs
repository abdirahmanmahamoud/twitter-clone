/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yctqcyeyzpmbsiphgxcs.supabase.co",
        pathname: "/storage/v1/object/public/img-x/**",
      },
    ],
  },
};

export default nextConfig;
