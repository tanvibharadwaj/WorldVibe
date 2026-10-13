const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route  POST /api/contact
// @desc   Submit a contact form message
// @access Public
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const contact = await Contact.create({ firstName, lastName, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Thank you for reaching out! We'll get back to you within 24 hours.",
      contact,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// @route  GET /api/contact
// @desc   Get all contact messages (admin use)
// @access Public (can be locked down later with auth)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, total: messages.length, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
