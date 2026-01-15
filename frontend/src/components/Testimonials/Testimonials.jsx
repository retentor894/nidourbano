import React, { useState } from 'react'
import './Testimonials.css'

const defaultTestimonials = [
  {
    name: 'María González',
    role: 'Propietaria en Palermo',
    content: 'Desde que dejé mi departamento en manos de Nido Urbano, mis ingresos aumentaron un 40%. Son profesionales y siempre están disponibles.',
    avatar: null
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Propietario en Recoleta',
    content: 'Excelente servicio. Me mantienen informado de todo y los huéspedes siempre dejan reseñas de 5 estrellas.',
    avatar: null
  },
  {
    name: 'Ana Martínez',
    role: 'Propietaria en San Telmo',
    content: 'Lo mejor que pude hacer fue confiar en ellos. Ahora tengo tiempo para otras cosas mientras mi propiedad genera ingresos.',
    avatar: null
  }
]

const Testimonials = ({
  id = 'testimonios',
  title = 'Lo que dicen nuestros clientes',
  testimonials = defaultTestimonials,
  backgroundColor = 'default'
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id={id} className={`testimonials testimonials--${backgroundColor}`}>
      <div className="testimonials__container container">
        {title && <h2 className="testimonials__title">{title}</h2>}

        <div className="testimonials__slider">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>

          <div className="testimonials__content">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonials__item ${index === activeIndex ? 'testimonials__item--active' : ''}`}
              >
                <blockquote className="testimonials__quote">
                  "{testimonial.content}"
                </blockquote>
                <div className="testimonials__author">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonials__avatar"
                    />
                  ) : (
                    <div className="testimonials__avatar testimonials__avatar--placeholder">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div className="testimonials__author-info">
                    <cite className="testimonials__name">{testimonial.name}</cite>
                    <span className="testimonials__role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
