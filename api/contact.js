const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

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
    to: 'rupambairagya08@gmail.com',
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
    return res.status(200).json({ success: true, message: 'Message sent successfully to both admin and visitor' });
  } catch (error) {
    console.error('Serverless SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to send message via Serverless SMTP' });
  }
};
