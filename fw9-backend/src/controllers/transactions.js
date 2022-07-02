const {body, validationResult } = require('express-validator');
const errorResponse = require('../helpers/standartResponse');
const response = require('../helpers/standartResponse');

const transactionModel = require('../models/transactions');

exports.getAllTransactions = (req, res)=>{
  transactionModel.getAllTransactions((err, results)=>{
    const parsedDate = results.rows.map(o =>{
      const rawTime = new Date(o.time);
      const time = `${rawTime.getDate()}-${rawTime.getMonth()+1}-${rawTime.getFullYear()} ${rawTime.getHours()}:${rawTime.getMinutes()}:${rawTime.getSeconds()}`;
      return {
        amount: o.amount,
        sender_id: o.sender_id,
        time,
        notes: o.notes,
        type_id: o.type_id
      };
    });
    return response(res, 'List all transactions', parsedDate);
  });
};

exports.createTransaction = [
  body('time').isISO8601().withMessage('Date and format invalid (ISO8601)'),  
  (req, res)=>{
    const validation = validationResult(req);
    if(!validation.isEmpty()){
      return response(res, 'Error occured', validation.array(), 400);
    }
    transactionModel.createTransaction(req.body, (err, results)=>{
      if(err){
        return errorResponse(err, res);
      }
      return response(res, 'Transaction created', results);
    });
  }
];