const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const validate = require('../middleware/validate');

// Validation rules
const userValidationRules = [
  check('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 50 }).withMessage('Name cannot be more than 50 characters'),
  check('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  check('age')
    .optional()
    .isInt({ min: 0, max: 120 }).withMessage('Age must be between 0 and 120')
];

// Create a new user
router.post('/', userValidationRules, validate, userController.createUser);

// Get all users
router.get('/', userController.getUsers);

// Get a single user
router.get('/:id', userController.getUserById);

// Update a user
router.put('/:id', userValidationRules, validate, userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
