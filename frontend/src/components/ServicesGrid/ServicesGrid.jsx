import React from 'react'
import './ServicesGrid.css'

const defaultServices = [
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
]

const ServicesGrid = ({
  id = 'servicios',
  title = 'Nuestros Servicios',
  subtitle = 'Todo lo que necesitas para rentabilizar tu propiedad sin preocupaciones',
  services = defaultServices,
  backgroundColor = 'white'
}) => {
  return (
    <section id={id} className={`services-grid services-grid--${backgroundColor}`}>
      <div className="services-grid__container container">
        <div className="services-grid__header">
          {title && <h2 className="services-grid__title">{title}</h2>}
          {subtitle && <p className="services-grid__subtitle">{subtitle}</p>}
        </div>
        <div className="services-grid__items">
          {services.map((service, index) => (
            <div key={index} className="services-grid__item">
              <div className="services-grid__icon">{service.icon}</div>
              <h3 className="services-grid__item-title">{service.title}</h3>
              <p className="services-grid__item-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
