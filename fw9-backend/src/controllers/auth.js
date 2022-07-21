const userModel = require('../models/users');
const response = require('../helpers/standartResponse');
const errorResponse = require('../helpers/errorResponse');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  req.body.pin = null;
  userModel.createUser(req.body, (err) => {
    if(err){
      return errorResponse(err, res);
    }
    return response(res, 'Register successfully');
  });
};

exports.createPin = (req, res) => {
  const {email} = req.body;
  userModel.getUserByEmail(email, (err, results) => {
    if(results.rows.length > 0){
      const user = results.rows[0];
      if(user.pin === null){
        userModel.updateUser(user.id, {pin: req.body.pin}, (err, resultUpdate) => {
          const userUpdated = resultUpdate.rows[0];
          if(userUpdated.email === user.email){
            return response(res, 'Create Pin success');
          }
        });
      }else{
        return response(res, 'Error: Pin already set', null, null, 400);
      }
    }else{
      return response(res, 'Error: Failed to create pin', null, null, 400);
    }
  });
};

exports.login = (req, res) => {
  const {email, password} = req.body;
  userModel.getUserByEmail(email, (err, results) => {
    if(results.rows.length < 1){
      return response(res, 'User not found', null, null, 400);
    }
    const user = results.rows[0];
    bcrypt.compare(password, user.password)
      .then((cpRes) =>{
        console.log(cpRes);
        if(cpRes){
          const token = jwt.sign({id: user.id}, process.env.APP_SECRET || 'secretKey');
          return response(res, 'Login Success', {token});          
        }
        return response(res, 'Email or Password not match', null, null, 400);
      })
      .catch(e => {
        return response(res, 'Email or Password not match', null, null, 400);
      });
  });
};
