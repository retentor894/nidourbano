import React from 'react'
import './TextSection.css'

const TextSection = ({
  id,
  title,
  content,
  centered = true,
  backgroundColor = 'default'
}) => {
  return (
    <section
      id={id}
      className={`text-section text-section--${backgroundColor} ${centered ? 'text-section--centered' : ''}`}
    >
      <div className="text-section__container container">
        {title && <h2 className="text-section__title">{title}</h2>}
        {typeof content === 'string' ? (
          <p className="text-section__content">{content}</p>
        ) : (
          <div className="text-section__content">{content}</div>
        )}
      </div>
    </section>
  )
}

export default TextSection
