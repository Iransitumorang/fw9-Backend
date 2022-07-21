const {body} = require('express-validator');
const bcrypt = require('bcrypt');

exports.register = [
  body('email')
    .isEmail().withMessage('Email fomat invalid'),
  body('username')
    .isLength({
      min: 3
    }).withMessage('Username length minimal 3 character'),
  body('password')
    .isLength({
      min: 8
    }).withMessage('Password length minimal 8 character')
    .customSanitizer(async (val) => {
      const hash = await bcrypt.hash(val, 0);
      return hash;
    }),
];

exports.createPin = [
  body('email')
    .isEmail().withMessage('Email fomat invalid'),
  body('pin')
    .isLength({min: 6, max: 6}).withMessage('Pin length must be 6 character')
    .isNumeric().withMessage('Pin must be a number'),
];

exports.login = [
  body('email')
    .isEmail().withMessage('Email fomat invalid'),
];