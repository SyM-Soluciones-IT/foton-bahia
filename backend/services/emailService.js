// services/emailService.js

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendNewsletter(email, subject, content) {
  const msg = {
    to: email,
    from: 'matiaspa380@gmail.com', // Reemplaza con tu dirección de correo electrónico
    subject: subject,
    html: content,
  };

  try {
    await sgMail.send(msg);
    console.log(`Correo electrónico enviado a ${email}`);
  } catch (error) {
    console.error(`Error al enviar correo electrónico a ${email}:`, error);
    throw new Error(`Error al enviar correo electrónico a ${email}`);
  }
}

module.exports = { sendNewsletter };
