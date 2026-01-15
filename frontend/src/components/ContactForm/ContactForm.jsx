import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({
  id = 'contact-form',
  title = 'Contáctanos',
  subtitle = '¿Tienes una propiedad que quieres rentabilizar? Déjanos tus datos y te contactaremos.',
  backgroundColor = 'white'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', phone: '', propertyType: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error de conexión. Por favor intenta de nuevo.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id={id} className={`contact-form contact-form--${backgroundColor}`}>
      <div className="contact-form__container container">
        <div className="contact-form__header">
          {title && <h2 className="contact-form__title">{title}</h2>}
          {subtitle && <p className="contact-form__subtitle">{subtitle}</p>}
        </div>

        <form className="contact-form__form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name" className="contact-form__label">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form__input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="email" className="contact-form__label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form__input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="phone" className="contact-form__label">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contact-form__input"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 11 1234-5678"
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="propertyType" className="contact-form__label">
                Tipo de propiedad
              </label>
              <select
                id="propertyType"
                name="propertyType"
                className="contact-form__input contact-form__select"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Seleccionar...</option>
                <option value="monoambiente">Monoambiente</option>
                <option value="1-dormitorio">1 Dormitorio</option>
                <option value="2-dormitorios">2 Dormitorios</option>
                <option value="3-dormitorios">3+ Dormitorios</option>
                <option value="casa">Casa</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-form__input contact-form__textarea"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Cuéntanos sobre tu propiedad..."
            />
          </div>

          {status.message && (
            <div className={`contact-form__status contact-form__status--${status.type}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary contact-form__submit"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
