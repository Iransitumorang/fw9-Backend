const response = require('../helpers/standartResponse');

exports.getAllUsers = (req, res)=>{
    return response(res, 'Message from standart response', 404);
};