const auth = require('express').Router();
const authController = require('../controllers/auth');

auth.get('/register', authController.register);

module.exports = auth;