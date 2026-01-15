import React from 'react'
import './Hero.css'

const Hero = ({
  title = 'Maximiza el potencial de tu propiedad',
  subtitle = 'Administramos tu departamento en Airbnb, Booking y más plataformas. Tú descansas, nosotros trabajamos.',
  backgroundImage = '/assets/documento-front-cmi0gm1ip000an901juqe3frc.jpg',
  ctaText = 'Contáctanos',
  ctaHref = '#contacto',
  secondaryCtaText = 'Conoce más',
  secondaryCtaHref = '#servicios'
}) => {
  return (
    <section
      id="inicio"
      className="hero"
      style={{ backgroundImage: `linear-gradient(rgba(20, 39, 74, 0.7), rgba(20, 39, 74, 0.8)), url(${backgroundImage})` }}
    >
      <div className="hero__content container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__cta-group">
          <a href={ctaHref} className="btn btn-primary hero__cta">
            {ctaText}
          </a>
          {secondaryCtaText && (
            <a href={secondaryCtaHref} className="btn btn-outline hero__cta">
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero
