const express = require('express')
const router = express.Router()

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, propertyType } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Nombre, email y mensaje son requeridos'
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Email inválido'
      })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Integrate with CRM

    console.log('New contact form submission:', {
      name,
      email,
      phone,
      message,
      propertyType,
      timestamp: new Date().toISOString()
    })

    res.json({
      success: true,
      message: 'Gracias por contactarnos. Te responderemos pronto.'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      error: 'Error al enviar el formulario. Por favor intenta de nuevo.'
    })
  }
})

module.exports = router
