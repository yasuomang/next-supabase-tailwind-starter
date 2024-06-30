/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'components', 'utils'], // 指定要检查的目录
    ignoreDuringBuilds: false, // 构建时不忽略 ESLint 错误
  },
};

module.exports = nextConfig;
