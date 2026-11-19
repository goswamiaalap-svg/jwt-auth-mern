const express = require('express');
const router = express.Router();
const { protect, authorise } = require('../middleware/auth');

// Admin-only dashboard data
router.get('/admin', protect, authorise('admin'), (req, res) => {
  res.json({
    message: 'Welcome to the Admin Dashboard',
    user: { id: req.user._id, name: req.user.name, email: req.user.email, role: req.user.role }
  });
});

// Manager + Admin dashboard data
router.get('/manager', protect, authorise('admin', 'manager'), (req, res) => {
  res.json({
    message: 'Welcome to the Manager Dashboard',
    user: { id: req.user._id, name: req.user.name, email: req.user.email, role: req.user.role }
  });
});

// All authenticated users
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Welcome to your Dashboard',
    user: { id: req.user._id, name: req.user.name, email: req.user.email, role: req.user.role }
  });
});

module.exports = router;
