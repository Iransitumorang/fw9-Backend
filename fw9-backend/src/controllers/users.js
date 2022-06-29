const response = require('../helpers/standartResponse');

const userModel = require('../models/users');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((results) => {
    return response(res, 'Message from standart response', results);
  });
};

exports.createUser = (req, res)=>{
  userModel.createUser(req.body, (results)=>{
    return response(res, 'Create user successfully', results);
  });
};