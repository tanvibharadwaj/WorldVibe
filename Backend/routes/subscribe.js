const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route  POST /api/subscribe
// @desc   Subscribe to newsletter
// @access Public
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const existing = await Subscriber.findOne({ email: email.toLowerCase() });
    if (existing) {
      if (existing.active) {
        return res.status(409).json({ success: false, message: "You're already subscribed!" });
      }
      // Re-activate unsubscribed user
      existing.active = true;
      await existing.save();
      return res.status(200).json({ success: true, message: "You've been re-subscribed successfully!" });
    }

    await Subscriber.create({ email });

    res.status(201).json({
      success: true,
      message: "You've subscribed successfully! Welcome to the WordVibe community.",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: 'Please enter a valid email.' });
    }
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// @route  DELETE /api/subscribe
// @desc   Unsubscribe from newsletter
// @access Public
router.delete('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const subscriber = await Subscriber.findOne({ email: email.toLowerCase() });
    if (!subscriber) {
      return res.status(404).json({ success: false, message: 'Email not found in our subscriber list.' });
    }

    subscriber.active = false;
    await subscriber.save();

    res.status(200).json({ success: true, message: 'Unsubscribed successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
