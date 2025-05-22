import express from 'express';
import { Resend } from '@resend/node';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Name <your-email@yourdomain.com>',
      to: 'kythaundi@gmail.com',
      subject: `New Message from ${name}`,
      html: `
        <h1>New Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully', data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
});

export default router;