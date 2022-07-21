const transType = require('express').Router();
const transTypeController = require('../controllers/transType');

transType.get('/', transTypeController.getAlltransType);

module.exports = transType;