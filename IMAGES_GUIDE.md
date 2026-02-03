# Cómo Agregar Imágenes de Proyectos

## Estructura de Carpetas

Crea una carpeta `public/projects` en la raíz del proyecto:

```
gutierrezdev.site/
├── public/
│   └── projects/
│       ├── ecommerce-mockup.png
│       ├── ecommerce-screenshot.png
│       ├── task-mockup.png
│       ├── task-screenshot.png
│       ├── realestate-mockup.png
│       ├── realestate-screenshot.png
│       ├── analytics-mockup.png
│       ├── analytics-screenshot.png
│       └── automation-mockup.png
│       └── automation-screenshot.png
```

## Tipos de Imágenes Necesarias por Proyecto

Para cada proyecto necesitas 2 imágenes:

### 1. Mockup Image (Imagen con Mockup)
- **Nombre:** `[slug]-mockup.png`
- **Descripción:** Imagen del proyecto en un mockup (laptop, tablet, múltiples dispositivos)
- **Tamaño recomendado:** 1200x800px mínimo
- **Formato:** PNG o JPG

### 2. Website Screenshot (Captura del Sitio Web)
- **Nombre:** `[slug]-screenshot.png`
- **Descripción:** Captura de pantalla completa del sitio web
- **Tamaño recomendado:** 1200x800px mínimo
- **Formato:** PNG o JPG

## Lista de Proyectos y Sus Slugs

1. **E-Commerce Platform**
   - Slug: `ecommerce-platform`
   - Mockup: `ecommerce-mockup.png`
   - Screenshot: `ecommerce-screenshot.png`

2. **Task Management SaaS**
   - Slug: `task-management-saas`
   - Mockup: `task-mockup.png`
   - Screenshot: `task-screenshot.png`

3. **Real Estate Platform**
   - Slug: `real-estate-platform`
   - Mockup: `realestate-mockup.png`
   - Screenshot: `realestate-screenshot.png`

4. **Data Analytics Dashboard**
   - Slug: `data-analytics-dashboard`
   - Mockup: `analytics-mockup.png`
   - Screenshot: `analytics-screenshot.png`

5. **API Automation Tool**
   - Slug: `api-automation-tool`
   - Mockup: `automation-mockup.png`
   - Screenshot: `automation-screenshot.png`

## Cómo Agregar Más Proyectos

### Paso 1: Agregar a WorkSection.tsx
Edita `/src/components/WorkSection.tsx` y agrega el proyecto al array:

```typescript
{
  id: 9,
  title: "Tu Nuevo Proyecto",
  category: "Web Development",
  categorySlug: "web-dev",
  slug: "tu-nuevo-proyecto",
  image: "URL_de_imagen_temporal",
}
```

### Paso 2: Agregar datos en la página del proyecto
Edita `/src/app/projects/[slug]/page.tsx` y agrega en `projectsData`:

```typescript
"tu-nuevo-proyecto": {
  title: "Tu Nuevo Proyecto",
  description: "Descripción detallada del proyecto...",
  category: "Web Development",
  technologies: ["React", "Node.js", "etc"],
  mockupImage: "/projects/tu-proyecto-mockup.png",
  websiteImage: "/projects/tu-proyecto-screenshot.png",
}
```

### Paso 3: Agregar las imágenes
Coloca las imágenes en `public/projects/`:
- `tu-proyecto-mockup.png`
- `tu-proyecto-screenshot.png`

## Recomendaciones para las Imágenes

### Mockups:
- Usa herramientas como:
  - Mockup Generator (https://mockups-design.com/)
  - Smartmockups (https://smartmockups.com/)
  - Figma con plugins de mockups
- Incluye el diseño en múltiples dispositivos si es posible

### Screenshots:
- Captura la página completa (full page screenshot)
- Usa extensiones de navegador como:
  - GoFullPage (Chrome)
  - Awesome Screenshot
- Asegúrate que la imagen sea clara y legible

## Notas Importantes

- Las imágenes en `public/projects/` serán accesibles directamente desde la URL
- Si una imagen no se encuentra, se mostrará un placeholder automáticamente
- Los nombres de archivo deben coincidir exactamente con lo especificado en el código
- Recomiendo optimizar las imágenes antes de subirlas (usar TinyPNG o similar)
