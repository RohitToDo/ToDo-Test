const express = require('express');
const { signUp, login } = require('../controllers/authController');
const { body } = require('express-validator');
const validateRequest = require('../middlewares/validationMiddleware');

const router = express.Router();

// Sign up route
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  validateRequest,
  signUp
);

// Login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validateRequest,
  login
);

module.exports = router;
