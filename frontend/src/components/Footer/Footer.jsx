import React from 'react'
import './Footer.css'

const Footer = ({
  companyName = 'Nido Urbano',
  description = 'Administración profesional de rentas a corto plazo. Maximizamos tus ingresos mientras tú disfrutas tu tiempo.',
  contactInfo = {
    email: 'info@nidourbano.com',
    phone: '+54 11 1234-5678',
    address: 'Buenos Aires, Argentina'
  },
  socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'TikTok', url: '#', icon: '🎵' }
  ],
  quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' }
  ]
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1920 100" preserveAspectRatio="none">
          <path d="M0,100 L0,50 Q480,0 960,50 T1920,50 L1920,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="footer__content">
        <div className="footer__container container">
          <div className="footer__grid">
            <div className="footer__brand">
              <h3 className="footer__logo">{companyName}</h3>
              <p className="footer__description">{description}</p>
              <div className="footer__social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="footer__social-link"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__links">
              <h4 className="footer__title">Enlaces Rápidos</h4>
              <ul className="footer__menu">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__contact">
              <h4 className="footer__title">Contacto</h4>
              <ul className="footer__contact-list">
                {contactInfo.email && (
                  <li className="footer__contact-item">
                    <span className="footer__contact-icon">✉️</span>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </li>
                )}
                {contactInfo.phone && (
                  <li className="footer__contact-item">
                    <span className="footer__contact-icon">📞</span>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                      {contactInfo.phone}
                    </a>
                  </li>
                )}
                {contactInfo.address && (
                  <li className="footer__contact-item">
                    <span className="footer__contact-icon">📍</span>
                    <span>{contactInfo.address}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            &copy; {currentYear} {companyName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
