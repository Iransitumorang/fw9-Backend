const {
  validationResult
} = require('express-validator');
const errorResponse = require('../helpers/standartResponse');
const response = require('../helpers/standartResponse');
const transTypeModels = require('../models/transType');

exports.getAllTransType = (req, res) => {
  transTypeModels.getAllTransType((err, results) => {
    const parsedDate = results.rows.map(o => {
      return {
        id: o.id,
        name: o.name,
        description: o.description
      };
    });
    return response(res, 'List all transType', parsedDate);
  });
};

exports.createTransType = [
  (req, res) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      return response(res, 'Error occured', validation.array(), 400);
    }
    transTypeModels.createTransType(req.body, (err, results) => {
      if (err) {
        return errorResponse(err, res);
      }
      return response(res, 'TransType created', results);
    });
  }
];