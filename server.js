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

  // 1. Mail to Owner (Rupam)
  const ownerMailOptions = {
    from: `"Rupam Portfolio" <${process.env.EMAIL_USER}>`,
    to: 'rupambairagya08@gmail.com', // Received at your main inbox
    replyTo: email,
    subject: `New Message from ${name} via Portfolio`,
    text: `You received a message from: ${name} (${email})\n\nMessage:\n${message}`
  };

  // 2. Auto-Response Confirmation Mail to Visitor
  const visitorMailOptions = {
    from: `"Rupam Bairagya" <${process.env.EMAIL_USER}>`,
    to: email, // Sent to visitor's email address
    subject: `Thank you for reaching out, ${name}!`,
    text: `Hi ${name},\n\nThank you for getting in touch through my portfolio website! This is an automated confirmation to let you know that I have received your message safely and will review it shortly.\n\nHere is a copy of the message you sent:\n---\n"${message}"\n---\n\nBest regards,\nRupam Bairagya\nhttps://rupam-portfolio.pages.dev/`
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(visitorMailOptions)
    ]);
    res.status(200).json({ success: true, message: 'Message sent successfully to both admin and visitor' });
  } catch (error) {
    console.error('SMTP Mail Error:', error);
    res.status(500).json({ error: 'Failed to send message via SMTP server' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SMTP Express server running locally on port ${PORT}`);
});
