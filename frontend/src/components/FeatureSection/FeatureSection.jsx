import React from 'react'
import './FeatureSection.css'

const FeatureSection = ({
  id,
  title,
  description,
  image,
  imageAlt = '',
  imagePosition = 'left',
  backgroundColor = 'default'
}) => {
  return (
    <section
      id={id}
      className={`feature-section feature-section--${backgroundColor} feature-section--image-${imagePosition}`}
    >
      <div className="feature-section__container container">
        <div className="feature-section__image-wrapper">
          {image && (
            <img
              src={image}
              alt={imageAlt || title}
              className="feature-section__image"
              loading="lazy"
            />
          )}
        </div>
        <div className="feature-section__content">
          {title && <h2 className="feature-section__title">{title}</h2>}
          {typeof description === 'string' ? (
            <p className="feature-section__description">{description}</p>
          ) : (
            <div className="feature-section__description">{description}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
