const transType = require('express').Router();
const transTypeController = require('../controllers/transType');

transType.get('/', transTypeController.getAllTransactions);
transType.post('/', ...transTypeController.createTransaction);

module.exports = transType;