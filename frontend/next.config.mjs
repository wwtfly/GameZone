/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "zh", "es"], // 支持的语言
    defaultLocale: "zh", // 默认语言
    localeDetection: true, // 自动检测用户的语言
  },
};

export default nextConfig;
