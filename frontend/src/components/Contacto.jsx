import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [asunto, setAsunto] = useState('');

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const asunto = params.get('asunto');
    if (asunto) {
      setAsunto(asunto);
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contacto', { name, email, message, asunto });
      alert('Message sent successfully!');
      setName('');
      setAsunto('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <Container>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formAsunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control type="text" placeholder="Enter the subject" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;