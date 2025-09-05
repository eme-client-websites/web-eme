# 🤝 Partners Logos

Esta carpeta contiene los logos de las empresas partners o socios de E-ME Growth Agency.

## Estructura recomendada

```
partners/
├── partner-nombre1.png
├── partner-nombre2.svg
├── partner-nombre3.jpg
└── README.md
```

## Guías para logos de partners

### Formato de archivos
- **Preferido**: SVG (escalable y mejor calidad)
- **Alternativo**: PNG con fondo transparente
- **Evitar**: JPG (a menos que sea necesario)

### Naming convention
- Usar minúsculas
- Separar palabras con guiones (-)
- Incluir prefijo "partner-"
- Ejemplo: `partner-google.svg`, `partner-meta.png`

### Tamaños recomendados
- **SVG**: Cualquier tamaño (escalable)
- **PNG**: Mínimo 200x100px para buena calidad
- **Máximo**: 500x250px para optimizar carga

### Uso en el código
Los logos se pueden referenciar desde componentes Astro como:
```astro
<img src="/logos/partners/partner-nombre.svg" alt="Partner Name" />
```

---
*Carpeta creada para organizar los logos de partners de E-ME Growth Agency*
