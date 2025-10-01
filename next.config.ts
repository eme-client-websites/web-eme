import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para export estático (requerido para Amplify)
  output: 'export',
  trailingSlash: true,
  
  // Configuración React
  reactStrictMode: true,
  
  // Configuración de imágenes optimizadas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1366, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año
  },

  // Configuración para desarrollo

  // Configuración para producción
  compress: true,
  poweredByHeader: false,
  
  // Headers de seguridad (deshabilitados para export estático)
  // Los headers se configuran en el servidor web (Amplify)
  
  // Configuración experimental
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Redirects y rewrites (deshabilitados para export estático)
  // Los redirects se configuran en el servidor web (Amplify)

  // Configuración de webpack para optimizaciones adicionales
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimización de bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }

    return config;
  },
};

export default nextConfig;
