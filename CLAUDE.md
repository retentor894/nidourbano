# Nido Urbano - Guía del Proyecto

## Descripción General

Nido Urbano es una aplicación web para un negocio de **Administración de Rentas a Corto Plazo**. Similar a las empresas de conserjería en Francia, la empresa recibe propiedades (monoambientes, departamentos) de clientes y las administra en plataformas como Airbnb, Booking.com, TikTok y renta directa, a cambio de una comisión.

## Arquitectura

El proyecto está dividido en dos partes independientes:

```
nidourbano/
├── frontend/    # Aplicación React + Vite (puerto 3000)
├── backend/     # API Express.js (puerto 5000)
```

### Stack Tecnológico

**Frontend:**
- React 19
- React Router DOM 7
- Vite 7 (bundler)
- CSS puro con variables CSS

**Backend:**
- Node.js
- Express 4
- CORS habilitado

## Comandos Principales

### Frontend
```bash
cd frontend
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo (puerto 3000)
npm run build      # Build de producción
npm run preview    # Preview del build
```

### Backend
```bash
cd backend
npm install        # Instalar dependencias
npm run dev        # Servidor con hot-reload (puerto 5000)
npm start          # Servidor de producción
```

## Estructura de Componentes

Los componentes siguen un patrón modular:

```
frontend/src/components/
├── Header/          # Menú de navegación fijo
├── Hero/            # Sección principal con imagen de fondo
├── TextSection/     # Bloques de texto centrado
├── FeatureSection/  # Secciones con imagen + descripción
├── ServicesGrid/    # Grid de servicios
├── Testimonials/    # Carrusel de testimonios
├── ContactForm/     # Formulario de contacto
└── Footer/          # Pie de página con contacto
```

Cada componente tiene:
- `ComponentName.jsx` - Lógica y markup
- `ComponentName.css` - Estilos específicos
- `index.js` - Export por defecto

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/content` | Contenido completo del sitio |
| GET | `/api/content/:section` | Sección específica |
| POST | `/api/contact` | Enviar formulario de contacto |

## Variables CSS Importantes

Las variables están en `frontend/src/styles/global.css`:

```css
--color-primary: #14274A;      /* Azul oscuro principal */
--color-secondary: #F5A623;    /* Amarillo/dorado para CTAs */
--color-background: #F5F5F5;   /* Fondo gris claro */
```

## Convenciones de Código

- Componentes funcionales con hooks
- CSS con nomenclatura BEM: `.component__element--modifier`
- Props con valores por defecto para modularidad
- Archivos de componentes en PascalCase

## Docker

El proyecto está completamente dockerizado para facilitar el despliegue.

### Estructura Docker
```
nidourbano/
├── docker-compose.yml       # Producción
├── docker-compose.dev.yml   # Desarrollo
├── .env.example             # Variables de entorno
├── frontend/
│   ├── Dockerfile           # Build producción (nginx)
│   ├── Dockerfile.dev       # Desarrollo con hot-reload
│   ├── nginx.conf           # Configuración nginx
│   └── .dockerignore
└── backend/
    ├── Dockerfile           # Build producción
    ├── Dockerfile.dev       # Desarrollo con hot-reload
    └── .dockerignore
```

### Comandos Docker

**Producción:**
```bash
# Construir y levantar
docker compose up -d --build

# Ver logs
docker compose logs -f

# Detener
docker compose down
```

**Desarrollo (con hot-reload):**
```bash
# Levantar entorno de desarrollo
docker compose -f docker-compose.dev.yml up --build

# Detener
docker compose -f docker-compose.dev.yml down
```

### Puertos

| Servicio | Desarrollo | Producción |
|----------|------------|------------|
| Frontend | 3000 | 80 |
| Backend | 5000 | 5000 |
