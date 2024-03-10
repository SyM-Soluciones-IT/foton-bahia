const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Ruta para manejar el envío de correo electrónico
router.post('/', async (req, res) => {
  const { name, email, message, asunto } = req.body;

  try {
    // Configuración del transporter (cambiar con tu configuración de email)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // Opciones del correo
    const mailOptions = {
      from: `${email}`,
      to: process.env.EMAIL,
      subject: `${asunto}`,
      text: `De ${name}: ${message}`
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);
    
    // Respuesta exitosa
    res.status(200).send('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error enviando el correo:', error);
    res.status(500).send('Ocurrió un error al enviar el correo');
  }
});

module.exports = router;
