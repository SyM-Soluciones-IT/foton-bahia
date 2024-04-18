// routes/newsletter.js
const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber.model');
const emailService = require('../services/emailService');

// Ruta para manejar las suscripciones al newsletter
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Guarda el correo electrónico en la base de datos
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    console.log(`Correo electrónico guardado en la base de datos: ${email}`);
    res.status(201).json({ message: 'Correo electrónico guardado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el correo electrónico:', error);
    res.status(500).json({ error: 'Hubo un error al guardar el correo electrónico' });
  }
});

// Ruta para enviar novedades a los suscriptores
router.post('/send-newsletter', async (req, res) => {
  try {
    // Recupera los correos electrónicos de los suscriptores desde la base de datos
    const subscribers = await Subscriber.find({}, 'email');
    
    // Envía el correo electrónico a cada suscriptor
    for (const subscriber of subscribers) {
      const email = subscriber.email;
      await emailService.sendNewsletter(email, req.body.subject, req.body.content);
    }
    
    res.status(200).json({ message: 'Novedades enviadas exitosamente a todos los suscriptores' });
  } catch (error) {
    console.error('Error al enviar novedades:', error);
    res.status(500).json({ error: 'Hubo un error al enviar novedades' });
  }
});

module.exports = router;
