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
const errorResponse = require('../helpers/errorResponse');

exports.createUser = (req, res) => {
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
};

exports.editUser = (req, res) => {
  const {
    id
  } = req.params;
  return response(res, 'Data from params', id);
};

exports.deleteUser = (req, res)=>{
  const {id} = req.params;
  userModel.deleteUser(id, (results)=>{
    return response(res, 'User deleted', results[0]);
  });
};