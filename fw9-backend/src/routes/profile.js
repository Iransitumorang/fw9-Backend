const profile = require('express').Router();
const { body } = require('express-validator');
const profileController = require('../controllers/profile');
const uploadProfile = require('../middleware/middleware');

const validation = [
  body('fullname').isString().withMessage('Fullname must be a string'),
  body('balance').toInt().isNumeric().withMessage('Balance must be a string'),
  body('phonenumber').isMobilePhone('id-ID').withMessage('Phone number format is incorrect'),
];

// profile.get('/', transactionsController.getAllTransactions);
profile.post('/', profileController.updateProfile);
profile.patch('/:id', uploadProfile, ...validation, profileController.updateProfile);

module.exports = profile;