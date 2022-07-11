const response = require('../helpers/standartResponse');
const userModel = require('../models/users');
const {
  validationResult,
  body
} = require('express-validator');
const errorResponse = require('../helpers/errorResponse');
const bcrypt = require('bcrypt');

const {
  LIMIT_DATA
} = process.env;

exports.getAllUsers = (req, res) => {
  const {
    q = '', limit = parseInt(LIMIT_DATA), page = 1
  } = req.query;
  const offset = (page - 1) * limit;
  userModel.getAllUsers(q, limit, offset, (err, results) => {
    if (results.length < 1) {
      return res.redirect('/404');
    }
    const pageInfo = {};

    userModel.countAllUsers(q, (err, totalData) => {
      pageInfo.totalData = totalData;
      pageInfo.totalData = Math.ceil(totalData / limit);
      pageInfo.currentPage = parseInt(page);
      pageInfo.nextPage = pageInfo.currentPage < pageInfo.totalPage ? pageInfo.currentPage + 1 : null;
      pageInfo.prevPage = pageInfo.currentPage > 1 ? pageInfo.currentPage - 1 : null;
      return response(res, 'List all user', results, pageInfo);
    });
    //   console.log(err);
    //   const pageInfo = {};
    //   return response(res, 'List all users', results, pageInfo);
    // });
    // const {
    //   search = ''
    // } = req.query;
    // userModel.getAllUsers(search, q, (err, results, totalData) => {
    //   pageInfo.totalData = totalData;
    //   // const pageInfo = {};
    //   return response(res, 'List of all users', results, pageInfo);

  });
};

exports.createUser = [
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
      return response(res, 'Error accured', validation.array(), null, 400);
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

exports.getUserById = (req, res) => {
  const {
    id
  } = req.params;
  userModel.getUserById(id, (err, results) => {
    if (results.rows.length > 0) {
      return response(res, 'Detail User', results.rows[0]);
    } else {
      return res.redirect('/404');
    }
  });
};

exports.editUser = (req, res) => {
  const {
    id
  } = req.params;
  return response(res, 'Data from params', id);
};

exports.deleteUser = (req, res) => {
  const {
    id
  } = req.params;
  userModel.deleteUser(id, (results) => {
    if (results.length > 0) {
      return response(res, 'Delete Users success', results[0]);
    } else {
      return res.redirect('/404');
    }
  });
};