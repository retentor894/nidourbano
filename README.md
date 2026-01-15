# Nido Urbano

Sistema web para administración de rentas a corto plazo. Permite a propietarios delegar la gestión de sus propiedades en plataformas como Airbnb, Booking.com y otras.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes](#componentes)
- [Personalización](#personalización)
- [API](#api)
- [Deployment](#deployment)

---

## Requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

## Instalación

### Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd nidourbano
```

### Instalar dependencias

```bash
# Frontend
cd frontend
npm install

# Backend (en otra terminal)
cd backend
npm install
```

## Uso

### Desarrollo

Ejecutar ambos servidores simultáneamente:

**Terminal 1 - Frontend (puerto 3000):**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend (puerto 5000):**
```bash
cd backend
npm run dev
```

El frontend automáticamente hace proxy de las llamadas `/api` al backend.

### Producción

```bash
# Build del frontend
cd frontend
npm run build

# El resultado estará en frontend/dist/

# Iniciar backend
cd backend
npm start
```

---

## Estructura del Proyecto

```
nidourbano/
├── frontend/                    # Aplicación React
│   ├── src/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── TextSection/
│   │   │   ├── FeatureSection/
│   │   │   ├── ServicesGrid/
│   │   │   ├── Testimonials/
│   │   │   ├── ContactForm/
│   │   │   └── Footer/
│   │   ├── pages/               # Páginas de la aplicación
│   │   │   └── HomePage.jsx
│   │   ├── hooks/               # Custom hooks
│   │   │   └── useApi.js
│   │   ├── styles/              # Estilos globales
│   │   │   └── global.css
│   │   ├── assets/              # Imágenes y recursos
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                     # API Express
│   ├── src/
│   │   ├── routes/
│   │   │   ├── contact.js       # Endpoint de contacto
│   │   │   └── content.js       # Endpoint de contenido
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── index.js             # Entry point
│   ├── .env.example
│   └── package.json
│
├── CLAUDE.md                    # Guía para Claude Code
└── README.md                    # Este archivo
```

---

## Componentes

Todos los componentes son modulares y aceptan props para personalización.

### Header

Menú de navegación fijo con soporte para móvil.

```jsx
import Header from './components/Header'

<Header
  logo="Mi Empresa"
  menuItems={[
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' }
  ]}
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `logo` | string | "Nido Urbano" | Texto del logo |
| `menuItems` | array | [...] | Array de objetos `{label, href}` |

---

### Hero

Sección principal con imagen de fondo y call-to-action.

```jsx
import Hero from './components/Hero'

<Hero
  title="Tu título principal"
  subtitle="Descripción breve del servicio"
  backgroundImage="/ruta/a/imagen.jpg"
  ctaText="Contactar"
  ctaHref="#contacto"
  secondaryCtaText="Ver más"
  secondaryCtaHref="#servicios"
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | "Maximiza el potencial..." | Título principal |
| `subtitle` | string | "Administramos tu..." | Subtítulo |
| `backgroundImage` | string | "/assets/hero-bg.jpg" | Imagen de fondo |
| `ctaText` | string | "Contáctanos" | Texto del botón principal |
| `ctaHref` | string | "#contacto" | Link del botón principal |
| `secondaryCtaText` | string | "Conoce más" | Texto del botón secundario |
| `secondaryCtaHref` | string | "#servicios" | Link del botón secundario |

---

### TextSection

Bloque de texto centrado para introducciones o descripciones.

```jsx
import TextSection from './components/TextSection'

<TextSection
  id="intro"
  title="Bienvenido"
  content="Contenido de texto que puede ser un string o JSX"
  centered={true}
  backgroundColor="white"  // "default" | "white" | "primary"
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | string | - | ID para navegación |
| `title` | string | - | Título de la sección |
| `content` | string/JSX | - | Contenido (texto o JSX) |
| `centered` | boolean | true | Centrar texto |
| `backgroundColor` | string | "default" | Color de fondo |

---

### FeatureSection

Sección con imagen y descripción lado a lado.

```jsx
import FeatureSection from './components/FeatureSection'

<FeatureSection
  id="nosotros"
  title="¿Por qué elegirnos?"
  description={
    <>
      <p>Párrafo de descripción</p>
      <ul>
        <li>Característica 1</li>
        <li>Característica 2</li>
      </ul>
    </>
  }
  image="/ruta/a/imagen.jpg"
  imageAlt="Descripción de la imagen"
  imagePosition="left"  // "left" | "right"
  backgroundColor="white"
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | string | - | ID para navegación |
| `title` | string | - | Título |
| `description` | string/JSX | - | Descripción |
| `image` | string | - | URL de la imagen |
| `imageAlt` | string | "" | Alt text |
| `imagePosition` | string | "left" | Posición de imagen |
| `backgroundColor` | string | "default" | Color de fondo |

---

### ServicesGrid

Grid de servicios con iconos y descripciones.

```jsx
import ServicesGrid from './components/ServicesGrid'

<ServicesGrid
  id="servicios"
  title="Nuestros Servicios"
  subtitle="Todo lo que necesitas"
  services={[
    {
      icon: '🏠',
      title: 'Gestión Completa',
      description: 'Nos encargamos de todo.'
    },
    {
      icon: '📸',
      title: 'Fotografía',
      description: 'Fotos profesionales.'
    }
  ]}
  backgroundColor="default"
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | string | "servicios" | ID para navegación |
| `title` | string | "Nuestros Servicios" | Título |
| `subtitle` | string | "Todo lo que necesitas..." | Subtítulo |
| `services` | array | [...] | Array de servicios |
| `backgroundColor` | string | "white" | Color de fondo |

**Estructura de `services`:**
```js
{
  icon: '🏠',          // Emoji o componente de icono
  title: 'Título',
  description: 'Descripción del servicio'
}
```

---

### Testimonials

Carrusel de testimonios de clientes.

```jsx
import Testimonials from './components/Testimonials'

<Testimonials
  id="testimonios"
  title="Lo que dicen nuestros clientes"
  testimonials={[
    {
      name: 'María González',
      role: 'Propietaria en Palermo',
      content: 'Excelente servicio...',
      avatar: '/ruta/a/avatar.jpg'  // opcional
    }
  ]}
  backgroundColor="white"
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | string | "testimonios" | ID para navegación |
| `title` | string | "Lo que dicen..." | Título |
| `testimonials` | array | [...] | Array de testimonios |
| `backgroundColor` | string | "default" | Color de fondo |

---

### ContactForm

Formulario de contacto conectado al backend.

```jsx
import ContactForm from './components/ContactForm'

<ContactForm
  id="contacto"
  title="Contáctanos"
  subtitle="Déjanos tus datos"
  backgroundColor="default"
/>
```

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `id` | string | "contact-form" | ID para navegación |
| `title` | string | "Contáctanos" | Título |
| `subtitle` | string | "¿Tienes una propiedad..." | Subtítulo |
| `backgroundColor` | string | "white" | Color de fondo |

**Campos del formulario:**
- Nombre (requerido)
- Email (requerido)
- Teléfono
- Tipo de propiedad (select)
- Mensaje (requerido)

---

### Footer

Pie de página con información de contacto y enlaces.

```jsx
import Footer from './components/Footer'

<Footer
  companyName="Nido Urbano"
  description="Administración profesional de rentas..."
  contactInfo={{
    email: 'info@nidourbano.com',
    phone: '+54 11 1234-5678',
    address: 'Buenos Aires, Argentina'
  }}
  socialLinks={[
    { name: 'Instagram', url: 'https://instagram.com/...', icon: '📷' }
  ]}
  quickLinks={[
    { label: 'Inicio', href: '#inicio' }
  ]}
/>
```

---

## Personalización

### Colores

Editar las variables CSS en `frontend/src/styles/global.css`:

```css
:root {
  /* Colores principales */
  --color-primary: #14274A;        /* Azul oscuro */
  --color-primary-light: #1e3a6e;  /* Azul claro */
  --color-secondary: #F5A623;      /* Amarillo/dorado */
  --color-accent: #E8B86D;         /* Dorado claro */

  /* Fondos */
  --color-background: #F5F5F5;     /* Gris claro */
  --color-background-alt: #FFFFFF; /* Blanco */

  /* Texto */
  --color-text: #333333;           /* Texto principal */
  --color-text-light: #666666;     /* Texto secundario */
  --color-text-inverse: #FFFFFF;   /* Texto sobre fondos oscuros */
}
```

### Tipografía

La fuente por defecto es **Poppins** (cargada desde Google Fonts). Para cambiarla:

1. Actualizar el link en `frontend/index.html`
2. Cambiar `font-family` en `global.css`

```css
body {
  font-family: 'Tu Fuente', sans-serif;
}
```

### Espaciado

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-xxl: 4rem;    /* 64px */
}
```

### Agregar un nuevo componente

1. Crear carpeta en `frontend/src/components/NuevoComponente/`
2. Crear archivos:
   - `NuevoComponente.jsx`
   - `NuevoComponente.css`
   - `index.js`

3. Exportar desde `frontend/src/components/index.js`:
```js
export { default as NuevoComponente } from './NuevoComponente'
```

4. Usar en la página:
```jsx
import { NuevoComponente } from '../components'

<NuevoComponente prop1="valor" />
```

### Agregar una nueva página

1. Crear archivo en `frontend/src/pages/NuevaPagina.jsx`
2. Agregar ruta en `frontend/src/App.jsx`:

```jsx
import NuevaPagina from './pages/NuevaPagina'

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/nueva" element={<NuevaPagina />} />
</Routes>
```

---

## API

### Endpoints

#### GET /api/health

Health check del servidor.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T12:00:00.000Z"
}
```

#### GET /api/content

Obtiene todo el contenido del sitio.

**Response:**
```json
{
  "hero": { ... },
  "intro": { ... },
  "services": [ ... ],
  "testimonials": [ ... ],
  "contact": { ... }
}
```

#### GET /api/content/:section

Obtiene una sección específica.

**Ejemplo:** `GET /api/content/services`

**Response:**
```json
[
  {
    "icon": "🏠",
    "title": "Gestión Completa",
    "description": "..."
  }
]
```

#### POST /api/contact

Envía el formulario de contacto.

**Request:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "phone": "+54 11 1234-5678",
  "propertyType": "1-dormitorio",
  "message": "Me interesa su servicio..."
}
```

**Response (éxito):**
```json
{
  "success": true,
  "message": "Gracias por contactarnos. Te responderemos pronto."
}
```

**Response (error):**
```json
{
  "error": "Nombre, email y mensaje son requeridos"
}
```

### Configuración del Backend

Crear archivo `.env` en `backend/` basado en `.env.example`:

```env
PORT=5000
NODE_ENV=development

# Para envío de emails (opcional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=tu-email
SMTP_PASS=tu-password
```

---

## Deployment

### Frontend (Vercel/Netlify)

1. Conectar repositorio
2. Configurar:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Root directory: `frontend`

### Backend (Railway/Render/Heroku)

1. Conectar repositorio
2. Configurar:
   - Root directory: `backend`
   - Start command: `npm start`
3. Agregar variables de entorno

### Variables de entorno en producción

**Frontend:**
- Actualizar `vite.config.js` con la URL del backend en producción

**Backend:**
```env
PORT=5000
NODE_ENV=production
```

---

## Responsive Design

La página es totalmente responsive con breakpoints en:

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

Los estilos responsive están incluidos en cada componente usando media queries.

---

## Migración a App Móvil

La arquitectura está diseñada para facilitar la migración a React Native:

1. Los componentes usan props, fácilmente adaptables
2. La lógica de negocio está separada en hooks (`useApi.js`)
3. El backend es independiente y reutilizable
4. Los estilos usan variables, traducibles a StyleSheet de RN

---

## Licencia

ISC
