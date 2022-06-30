const errorResponse = (msg, param, location='hoby')=>[
  {
    msg,
    param,
    location
  }
];

module.exports = errorResponse;