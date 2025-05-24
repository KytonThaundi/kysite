import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Add request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// API route for sending emails
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email using Resend
    const response = await resend.emails.send({
      from: 'Kysite <onboarding@resend.dev>', // Use Resend's default sender for testing
      to: process.env.EMAIL_TO, // Your email address to receive the message
      subject: `New Message from ${name}`,
      html: `
        <h1>New Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log(`Email sent successfully: ${response.id}`);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message);
    res.status(500).send({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});