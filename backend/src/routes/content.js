const express = require('express')
const router = express.Router()

// Content data (in production, this would come from a database or CMS)
const siteContent = {
  hero: {
    title: 'Maximiza el potencial de tu propiedad',
    subtitle: 'Administramos tu departamento en Airbnb, Booking y más plataformas. Tú descansas, nosotros trabajamos por ti.',
    ctaText: 'Contáctanos',
    secondaryCtaText: 'Nuestros Servicios'
  },
  intro: {
    title: 'Bienvenido a Nido Urbano',
    content: 'Somos expertos en la administración de propiedades para renta a corto plazo. Nos encargamos de todo el proceso: desde la publicación en las mejores plataformas hasta la atención de tus huéspedes.'
  },
  services: [
    {
      icon: '🏠',
      title: 'Gestión Completa',
      description: 'Nos encargamos de todo: desde la publicación hasta el check-out del huésped.'
    },
    {
      icon: '📸',
      title: 'Fotografía Profesional',
      description: 'Capturamos la esencia de tu propiedad con fotos de alta calidad.'
    },
    {
      icon: '💰',
      title: 'Precios Dinámicos',
      description: 'Optimizamos tus tarifas según la demanda para maximizar ingresos.'
    },
    {
      icon: '🧹',
      title: 'Limpieza Premium',
      description: 'Servicio de limpieza profesional entre cada reserva.'
    },
    {
      icon: '📱',
      title: 'Atención 24/7',
      description: 'Soporte continuo para ti y tus huéspedes, todos los días.'
    },
    {
      icon: '📊',
      title: 'Reportes Mensuales',
      description: 'Informes detallados de rendimiento y ocupación de tu propiedad.'
    }
  ],
  testimonials: [
    {
      name: 'María González',
      role: 'Propietaria en Palermo',
      content: 'Desde que dejé mi departamento en manos de Nido Urbano, mis ingresos aumentaron un 40%. Son profesionales y siempre están disponibles.'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Propietario en Recoleta',
      content: 'Excelente servicio. Me mantienen informado de todo y los huéspedes siempre dejan reseñas de 5 estrellas.'
    },
    {
      name: 'Ana Martínez',
      role: 'Propietaria en San Telmo',
      content: 'Lo mejor que pude hacer fue confiar en ellos. Ahora tengo tiempo para otras cosas mientras mi propiedad genera ingresos.'
    }
  ],
  contact: {
    email: 'info@nidourbano.com',
    phone: '+54 11 1234-5678',
    address: 'Buenos Aires, Argentina'
  }
}

// GET /api/content - Get all site content
router.get('/', (req, res) => {
  res.json(siteContent)
})

// GET /api/content/:section - Get specific section
router.get('/:section', (req, res) => {
  const { section } = req.params

  if (siteContent[section]) {
    res.json(siteContent[section])
  } else {
    res.status(404).json({ error: 'Section not found' })
  }
})

module.exports = router
