const response = require('../helpers/standartResponse');
const userModel = require('../models/users');
const {validationResult, body} = require('express-validator');
const errorResponse = require('../helpers/errorResponse');
const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'Message from standart response', results);
  });
};

exports.createUser = [
  body('email')
    .isEmail().withMessage('Email fomat invalid'),
  body('username')
    .isLength({min: 4}).withMessage('Username length minimal 4 character'),
  body('password')
    .isLength({min: 8}).withMessage('Password length minimal 8 character')
    .customSanitizer(async (val) => {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(val, salt);
      return hash;
    }),

  (req, res) => {
    // if(req.body.username.length < 4){
    //   return response(res, 'Username length must be greater than 4 character', null, 400)
    // };

    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      return response(res, 'Error accured', validation.array(), 400);
    }

    userModel.createUser(req.body, (err, results) => {
      if (err) {
        return errorResponse(err, res);
      } else {
        return response(res, 'Create user successfully', results[0]);
      }
    });
  }
];

exports.editUser = (req, res) => {
  const {id} = req.params;
  return response(res, 'Data from params', id);
};

exports.deleteUser = (req, res) => {
  const {id} = req.params;
  userModel.deleteUser(id, (results) => {
    return response(res, 'User deleted', results[0]);
  });
};