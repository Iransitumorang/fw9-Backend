const transactions = require('express').Router();
const transactionsController = require('../controllers/transactions');

transactions.get('/', transactionsController.getAllTransactions);
transactions.post('/', ...transactionsController.createTransaction);

module.exports = transactions;