# TestimonialSection Component

Componente React para Next.js que reproduce exactamente la sección de "Client testimonial" con diseño responsive y accesible.

## 📦 Instalación y Setup

### 1. Importar la fuente Poppins

Añade esto en tu `_app.js` (Pages Router) o `layout.js` (App Router):

```jsx
// Para Pages Router (_app.js)
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// Para App Router (layout.js)
import { Inter } from 'next/font/google'

const poppins = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Estructura de archivos

```
components/
├── TestimonialSection.jsx
└── TestimonialSection.module.css
```

## 🚀 Uso del Componente

### Ejemplo básico (Pages Router)

```jsx
// pages/index.js
import TestimonialSection from '../components/TestimonialSection'

export default function HomePage() {
  return (
    <div>
      <TestimonialSection
        title="Client\ntestimonial"
        authorName="Adrien Susini"
        authorJob="CEO OK C'EST COOL"
        quote="Looking for true experts who are creative, proactive, efficient and cool? You've come to the right place. LEOLEO fully understood our needs and turned our vision into a concrete, clear, and impactful project."
        imageSrc="https://images.prismic.io/leoleo-v2/Z-5PxXdAxsiBwQsE_adrien_susini-min.jpg"
      />
    </div>
  )
}
```

### Ejemplo con App Router

```jsx
// app/page.js
import TestimonialSection from '../components/TestimonialSection'

export default function HomePage() {
  return (
    <main>
      <TestimonialSection
        title="Client\ntestimonial"
        authorName="Adrien Susini"
        authorJob="CEO OK C'EST COOL"
        quote="Looking for true experts who are creative, proactive, efficient and cool? You've come to the right place. LEOLEO fully understood our needs and turned our vision into a concrete, clear, and impactful project."
        imageSrc="https://images.prismic.io/leoleo-v2/Z-5PxXdAxsiBwQsE_adrien_susini-min.jpg"
      />
    </main>
  )
}
```

## 🎛️ Props del Componente

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `"Client\ntestimonial"` | Título principal (usar `\n` para saltos de línea) |
| `authorName` | `string` | `"Adrien Susini"` | Nombre del autor del testimonio |
| `authorJob` | `string` | `"CEO OK C'EST COOL"` | Cargo/posición del autor |
| `quote` | `string` | `"Looking for true experts..."` | Texto del testimonio (sin comillas) |
| `imageSrc` | `string` | URL de ejemplo | URL de la imagen del autor |
| `className` | `string` | `""` | Clase CSS adicional opcional |

## 🎨 Personalización de Colores

Modifica las variables CSS en `TestimonialSection.module.css`:

```css
:root {
  --bg-section: #1c1c1c;        /* Fondo de la sección */
  --card-bg: #2e2e2e;           /* Fondo de la tarjeta */
  --card-inner: #333333;        /* Color interno adicional */
  --text-primary: #ffffff;      /* Texto principal */
  --text-muted: rgba(255, 255, 255, 0.65); /* Texto secundario */
  --border-radius-card: 12px;   /* Radio de bordes de tarjeta */
  --border-radius-image: 8px;   /* Radio de bordes de imagen */
  --shadow-card: 0 6px 18px rgba(0, 0, 0, 0.45); /* Sombra */
}
```

## 📱 Tests Visuales Manuales

Prueba el componente en estas resoluciones usando Chrome DevTools:

1. **Móvil**: `375×812px` (iPhone X/11/12/13)
   - ✅ Layout vertical (título arriba, tarjeta abajo)
   - ✅ Imagen reducida a 120×86px
   - ✅ Tarjeta ocupa 90% del ancho
   - ✅ Texto centrado

2. **Tablet**: `768×1024px` (iPad)
   - ✅ Transición suave entre layouts
   - ✅ Título de tamaño intermedio
   - ✅ Gap ajustado entre elementos

3. **Desktop**: `1440×900px` (Laptop estándar)
   - ✅ Layout de dos columnas
   - ✅ Título grande en la izquierda
   - ✅ Tarjeta centrada verticalmente a la derecha
   - ✅ Imagen completa 204×146px

## ♿ Características de Accesibilidad

- ✅ Semántica HTML correcta (`<section>`, `<blockquote>`, `<cite>`)
- ✅ Atributos ARIA (`aria-labelledby`)
- ✅ Alt text descriptivo para imágenes
- ✅ Contenido para screen readers (`.sr-only`)
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Soporte para `prefers-contrast`

## 🔧 Compatibilidad

- ✅ Next.js 12+
- ✅ Next.js 13+ (App Router y Pages Router)
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ CSS Modules nativos
- ✅ next/image optimizado

## 📂 Estructura del Componente

```
TestimonialSection/
├── Layout: Grid 2 columnas (desktop) / Stack vertical (móvil)
├── Título: Tipografía grande con clamp responsive
├── Tarjeta del testimonio:
│   ├── Header: Imagen + Datos del autor
│   └── Quote: Blockquote semántico
└── Estilos: CSS Module encapsulado
```

## 🚨 Notas Importantes

- **No usar Tailwind ni frameworks CSS externos** - Todo está en CSS Module
- **La imagen debe ser una URL remota válida** - next/image requiere configuración de dominios en `next.config.js` si es necesario
- **El componente es completamente independiente** - No depende de contextos o providers externos
- **Diseño mobile-first** - Responsive por defecto con breakpoints optimizados

## 🐛 Troubleshooting

### Error de imagen externa
Si ves error con imágenes externas, añade el dominio en `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.prismic.io'],
  },
}

module.exports = nextConfig
```

### Fuente no se carga
Verifica que Poppins esté importada correctamente en `_app.js` o `layout.js` según tu versión de Next.js.
