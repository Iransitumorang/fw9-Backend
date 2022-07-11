const response = require('./standartResponse');

const errorHandling = (msg, param, location = 'hoby') => [{
  msg,
  param,
  location
}];

const errorResponse = (err, res) => {
  if (err.code === err.code && err.detail.includes('email')) {
    const eres = errorHandling('Email already exists', 'email');
    return response(res, 'Error', eres, null, 400);
  }
  if (err.code === err.code && err.detail.includes('username')) {
    const eres = errorHandling('Username already exists', 'username');
    return response(res, 'Error', eres, null, 400);
  }
  if (err.column === 'amount' && err.message.includes('not-null')) {
    const eres = errorHandling('Amount cannot be null', 'amount');
    return response(res, 'Error', eres, null, 400);
  }
  return response(res, 'Error', null, null, 400);
};

module.exports = errorResponse;