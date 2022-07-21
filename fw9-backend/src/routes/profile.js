const profile = require('express').Router();
const profileController = require('../controllers/profile');
const uploadProfile = require('../middleware/uploadProfile');

const updateProfileRules = require('./profile.validator');
const validation = require('../middleware/validation');

// profile.get('/', transactionsController.getAllTransactions);
profile.post('/', profileController.updateProfile);
profile.patch('/:id', uploadProfile, ...updateProfileRules, validation, profileController.updateProfile);

module.exports = profile;