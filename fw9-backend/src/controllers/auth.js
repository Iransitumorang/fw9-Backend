const userModel = require('../models/users');
const response = require('../helpers/standartResponse');

exports.resgister = (req, res) => {
  req.body.pin = null;
  userModel.createUser(req.body, (err, results) => {
    return response(res, 'Register successfully');
  });
};

