# Logos de Clientes

Esta carpeta contiene los logos de los clientes de E-ME Growth Agency.

## Estructura recomendada:

```
/public/logos/clients/
├── apparta/
│   ├── apparta-logo.png
│   ├── apparta-logo-white.png
│   └── apparta-logo.svg
├── promigas/
│   ├── promigas-logo.png
│   ├── promigas-logo-white.png
│   └── promigas-logo.svg
└── otros-clientes/
```

## Formatos recomendados:

- **PNG**: Para logos con transparencia
- **SVG**: Para logos vectoriales (ideal para web)
- **JPG/WEBP**: Para logos con fondo

## Convenciones de nombres:

- `cliente-logo.ext` - Logo principal
- `cliente-logo-white.ext` - Versión blanca/clara
- `cliente-logo-dark.ext` - Versión oscura
- `cliente-logo-horizontal.ext` - Versión horizontal
- `cliente-logo-vertical.ext` - Versión vertical

## Tamaños recomendados:

- **Logos pequeños**: 200x100px
- **Logos medianos**: 400x200px  
- **Logos grandes**: 800x400px
- **SVG**: Sin restricción de tamaño

## Uso en componentes:

```astro
<!-- Ejemplo de uso -->
<img src="/logos/clients/apparta/apparta-logo.png" alt="Apparta" class="h-12 w-auto" />
```
