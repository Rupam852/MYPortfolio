require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create Nodemailer Transporter using Gmail App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Rupam Portfolio" <${process.env.EMAIL_USER}>`,
    to: 'rupambairagya08@gmail.com', // Received at your main inbox
    replyTo: email,
    subject: `New Message from ${name} via Portfolio`,
    text: `You received a message from: ${name} (${email})\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully via SMTP' });
  } catch (error) {
    console.error('SMTP Mail Error:', error);
    res.status(500).json({ error: 'Failed to send message via SMTP server' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SMTP Express server running locally on port ${PORT}`);
});
