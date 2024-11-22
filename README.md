# Aprende java - Pagina para aprender java

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm (viene incluido con Node.js)

## Pasos para Instalar

1. Clona el repositorio o descarga los archivos del proyecto

2. Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

3. Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Para construir la versión de producción:

```bash
npm run build
```

## Estructura del Proyecto

```
src/
  ├── components/         # Componentes reutilizables
  │   ├── CodeEditor.jsx
  │   ├── CodeEditorEjercisios.jsx
  │   ├── ContentSection.jsx
  │   ├── Footer.jsx
  │   ├── Header.jsx
  │   ├── ImageModal.jsx # En desuso
  │   └── SimpleEditor.jsx # En desuso
  ├── Pages/
  │   └──1.HomePage
  │       └──LandingPage.jsx
  │   └──2.CoursePage
  │       └──CoursePage.jsx
  │   └──Index.jsx
  ├── App.jsx           # Componente principal
  ├── main.jsx          # Punto de entrada
  └── index.css         # Estilos globales
```

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (iconos)
- Monaco Editor
