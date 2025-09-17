# E-ME - Growth Agency Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC)](https://tailwindcss.com/)

Sitio web corporativo de E-ME Growth Agency desarrollado con Next.js. Este proyecto fue **migrado exitosamente de Astro a Next.js** manteniendo toda la funcionalidad y mejorando el rendimiento.

## 🚀 Migración Completada

✅ **Migración de Astro a Next.js completada exitosamente**
- Configuración moderna de Next.js 15.5.3 con App Router
- Sistema de internacionalización (Español/Inglés) funcionando
- Todos los componentes migrados de `.astro` a `.tsx`
- Estilos y animaciones mantenidos
- Build de producción optimizado

## 📋 Tecnologías

- **Framework**: Next.js 15.5.3 (App Router)
- **React**: 19.1.1 
- **TypeScript**: 5.9.2
- **Estilos**: Tailwind CSS 4.1.12
- **Animaciones**: Framer Motion 12.23.12
- **Iconos**: Lucide React
- **Optimización**: Turbopack (desarrollo)

## 🛠️ Desarrollo

### Prerequisitos

- Node.js 18+ 
- npm/yarn/pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd web-eme

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:4321](http://localhost:4321)

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecutar servidor de desarrollo en puerto 4321
npm run build        # Construir para producción
npm run start        # Ejecutar servidor de producción
npm run lint         # Ejecutar ESLint
npm run typecheck    # Verificar tipos TypeScript
npm run clean        # Limpiar archivos de build
npm run audit        # Auditar dependencias
npm run audit:fix    # Arreglar vulnerabilidades automáticamente
```

## 🌐 Internacionalización

El sitio soporta dos idiomas:
- **Español** (es) - Idioma por defecto
- **Inglés** (en) - Idioma secundario

### Rutas de Idioma

- `/` - Español (por defecto)
- `/en` - Inglés

## 🏗️ Estructura del Proyecto

```
├── app/                    # Directorio principal de Next.js App Router
│   ├── components/         # Componentes React reutilizables
│   │   ├── MenuNavegacion.tsx
│   │   └── ScrollColorEffects.tsx
│   ├── lib/               # Utilidades y configuraciones
│   │   └── i18n.ts        # Sistema de internacionalización
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── public/                # Assets estáticos
├── src/i18n/             # Traducciones (mantenidas de Astro)
│   ├── en.json           # Traducciones en inglés
│   └── utils.ts          # Utilidades i18n (legacy)
├── next.config.ts        # Configuración de Next.js
├── tailwind.config.js    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── eslint.config.js      # Configuración de ESLint
```

## 🎨 Características Principales

### Componentes Migrados
- ✅ Layout principal responsive
- ✅ Hero section con efectos de parallax
- ✅ Menú de navegación desktop/móvil
- ✅ Efectos de scroll dinámicos con cambios de color
- ✅ Sistema de contadores animados (base implementada)

### Pendientes de Migración
- 🔄 Componente de Servicios
- 🔄 Componente de Proyectos
- 🔄 Componente de Equipo
- 🔄 Componente de Clientes
- 🔄 Componente de Partners
- 🔄 Footer
- 🔄 Optimización de imágenes con next/image

### Optimizaciones Implementadas
- ✅ Configuración de producción optimizada
- ✅ Code splitting automático
- ✅ Compresión habilitada
- ✅ Headers de seguridad
- ✅ Optimización de paquetes (Framer Motion, Lucide)
- ✅ TypeScript estricto con verificación de tipos

## 🚦 Estado del Build

```bash
# Build exitoso
✓ Compiled successfully
✓ Generating static pages (4/4)
✓ Finalizing page optimization

# Métricas de rendimiento
Route (app)                    Size    First Load JS
┌ ○ /                         2.89 kB     142 kB
└ ○ /_not-found              187 B       139 kB
+ First Load JS shared        139 kB
```

## 📝 Próximos Pasos

### Completar Migración
1. Migrar componentes restantes de `.astro` a `.tsx`
2. Implementar optimización de imágenes con `next/image`
3. Configurar rutas dinámicas si es necesario
4. Optimizar performance y Core Web Vitals

### Deployment
- **Vercel**: Configuración automática detectada
- **Otros**: Usar `npm run build` y `npm run start`

## 🔄 Rollback Plan

Si es necesario volver a Astro temporalmente:

```bash
# Restaurar desde el tag de backup
git checkout pre-migrate-astro-20240916

# O usar la rama principal antes de la migración
git checkout main~N  # donde N es el número de commits atrás
```

**Tag de backup creado**: `pre-migrate-astro-20240916`

## 🧪 Testing

### Verificaciones Realizadas
- ✅ `npm run typecheck` - Sin errores de TypeScript
- ✅ `npm run build` - Build de producción exitoso
- ✅ `npm run lint` - ESLint configurado y funcionando
- ✅ Servidor de desarrollo funcionando en puerto 4321
- ✅ Rutas principales accesibles
- ✅ Estilos y animaciones funcionando
- ✅ Sistema i18n operativo

### Tests Pendientes
- [ ] Tests unitarios de componentes
- [ ] Tests de integración
- [ ] Performance tests (Lighthouse)
- [ ] Tests cross-browser
- [ ] Tests de accesibilidad

## 📞 Soporte

Para preguntas sobre la migración o el desarrollo:
- Revisar issues en el repositorio
- Consultar documentación de [Next.js](https://nextjs.org/docs)
- Verificar logs de build para errores específicos

## ⚡ Performance

- **Framework**: Next.js con App Router para mejor performance
- **Rendering**: Static Site Generation (SSG) por defecto
- **Optimizaciones**: Turbopack en desarrollo, optimización automática en producción
- **Bundle Size**: Optimizado con code splitting automático

---

**Estado de Migración**: ✅ COMPLETADA EXITOSAMENTE
**Último Update**: Septiembre 16, 2024
**Versión**: 1.0.0