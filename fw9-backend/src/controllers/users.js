const response = require('../helpers/standartResponse');

const userModel = require('../models/users');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'Message from standart response', results);
  });
};

const {
  validationResult
} = require('express-validator');
const errorRespon = require('../helpers/errorResponse');

exports.createUser = (req, res) => {
  // if(req.body.username.length < 4){
  //   return response(res, 'Username length must be greater than 4 character', null, 400)
  // };
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return response(res, 'Error accured', validation.array());
  }

  userModel.createUser(req.body, (err, results) => {
    if (err) {
      if (err.code === '23505' && err.detail.includes('email')) {
        const eres = errorRespon('Email already exists', 'email');
        return response(res, 'Error', eres, 400);
      } else if (err.code === '23505' && err.detail.includes('username')) {
        const eres = errorRespon('Username already exists', 'username');
        return response(res, 'Error', eres, 400);
      } else {
        return response(res, 'Create user successfully', results[0]);
      }
      return response(res, 'Error', null, 400);
    } else {
      return response(res, 'Create user successfully', results[0]);
    }
  });
};

exports.editUser = (req, res) => {
  const {
    id
  } = req.params;
  return response(res, 'Data from params', id);
};