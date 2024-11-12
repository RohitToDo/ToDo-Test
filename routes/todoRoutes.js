const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');
const { body, param } = require('express-validator');
const validateRequest = require('../middlewares/validationMiddleware');

const router = express.Router();

// Get all todos for a user
router.get('/', authMiddleware, getTodos);

// Create a new todo
router.post(
  '/',
  authMiddleware,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('dueDate')
      .optional()
      .isISO8601()
      .withMessage('Due date must be a valid ISO8601 date format'),
  ],
  validateRequest,
  createTodo
);

// Update an existing todo
router.put(
  '/:id',
  authMiddleware,
  [
    param('id').isMongoId().withMessage('Invalid Todo ID'),
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('dueDate')
      .optional()
      .isISO8601()
      .withMessage('Due date must be a valid ISO8601 date format'),
    body('completed').optional().isBoolean().withMessage('Completed must be a boolean value'),
  ],
  validateRequest,
  updateTodo
);

// Delete a todo
router.delete(
  '/:id',
  authMiddleware,
  [param('id').isMongoId().withMessage('Invalid Todo ID')],
  validateRequest,
  deleteTodo
);

module.exports = router;
