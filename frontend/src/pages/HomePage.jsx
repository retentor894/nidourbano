import React from 'react'
import {
  Header,
  Hero,
  TextSection,
  FeatureSection,
  ServicesGrid,
  Testimonials,
  ContactForm,
  Footer
} from '../components'

const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <Hero
          title="Maximiza el potencial de tu propiedad"
          subtitle="Administramos tu departamento en Airbnb, Booking y más plataformas. Tú descansas, nosotros trabajamos por ti."
          ctaText="Contáctanos"
          ctaHref="#contacto"
          secondaryCtaText="Nuestros Servicios"
          secondaryCtaHref="#servicios"
        />

        <TextSection
          title="Bienvenido a Nido Urbano"
          content="Somos expertos en la administración de propiedades para renta a corto plazo. Nos encargamos de todo el proceso: desde la publicación en las mejores plataformas hasta la atención de tus huéspedes. Con nosotros, tu propiedad trabaja mientras tú disfrutas."
          backgroundColor="white"
        />

        <ServicesGrid
          id="servicios"
          title="Nuestros Servicios"
          subtitle="Todo lo que necesitas para rentabilizar tu propiedad sin preocupaciones"
          backgroundColor="default"
        />

        <FeatureSection
          id="nosotros"
          title="¿Por qué elegirnos?"
          description={
            <>
              <p>
                En Nido Urbano combinamos tecnología y experiencia para maximizar tus ingresos.
                Trabajamos con las principales plataformas del mercado:
              </p>
              <ul>
                <li>Airbnb - El líder mundial en alquileres vacacionales</li>
                <li>Booking.com - Alcance global con millones de usuarios</li>
                <li>TikTok - Marketing directo a nuevas generaciones</li>
                <li>Renta directa - Sin comisiones de intermediarios</li>
              </ul>
            </>
          }
          image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"
          imageAlt="Interior de departamento moderno"
          imagePosition="left"
          backgroundColor="white"
        />

        <FeatureSection
          title="Gestión Profesional 24/7"
          description={
            <>
              <p>
                Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana.
                Nos encargamos de:
              </p>
              <ul>
                <li>Check-in y check-out de huéspedes</li>
                <li>Atención de consultas y emergencias</li>
                <li>Coordinación de limpieza y mantenimiento</li>
                <li>Optimización de precios en tiempo real</li>
              </ul>
            </>
          }
          image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600"
          imageAlt="Sala de estar de departamento"
          imagePosition="right"
          backgroundColor="default"
        />

        <Testimonials
          id="testimonios"
          title="Lo que dicen nuestros clientes"
          backgroundColor="white"
        />

        <ContactForm
          id="contacto"
          title="Contáctanos"
          subtitle="¿Tienes una propiedad que quieres rentabilizar? Déjanos tus datos y te contactaremos."
          backgroundColor="default"
        />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
