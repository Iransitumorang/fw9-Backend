const transactions = require('express').Router()

const transactionsController = require('../controllers/transactions')

transactions.get('/', transactionsController.getAllTransactions)

module.exports = transactions;