import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configuración experimental
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Redirects para mantener compatibilidad con Astro
  async redirects() {
    return [
      // Ejemplo: Si había rutas específicas de Astro que ahora son diferentes
      // { source: '/old-route', destination: '/new-route', permanent: true },
    ]
  },
  
  // Rewrites para APIs o rutas especiales
  async rewrites() {
    return [
      // Mantener compatibilidad con rutas de API si existían
      // { source: '/api/:path*', destination: '/api/:path*' },
    ]
  },

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
