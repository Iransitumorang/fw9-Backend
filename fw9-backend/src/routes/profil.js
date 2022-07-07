const profil = require('express').Router();
const profilController = require('../controllers/profil');

profil.get('/', profilController.getAllTransactions);
profil.post('/', ...profilController.createTransaction);

module.exports = profil;