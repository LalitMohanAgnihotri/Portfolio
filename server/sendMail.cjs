// D:\JAVA\pcph\server.js

require('dotenv').config(); 
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001; // The backend will run on port 3001

// 1. Middleware Setup
app.use(cors({
    // Allow requests only from your React app's development URL
    origin: 'http://localhost:5173' // This is the common default Vite port
}));
app.use(express.json());

// 2. Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, // Accessing from the global process.env object
    pass: process.env.EMAIL_PASS,
  },
});

// 3. Email Sending Endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    replyTo: email, 
    to: 'lalitagnihotri62@gmail.com', // <-- Your destination email
    subject: `[Portfolio Contact] ${subject}`,
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<h3>New Contact</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr><p style="white-space: pre-wrap;">${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// 4. Start Server
app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});