const response = require('../helpers/standartResponse');
const profilModels = require('../models/profil');
const {
  validationResult,
  body
} = require('express-validator');
const bcrypt = require('bcrypt');

exports.getAllProfil = (req, res) => {
  profilModels.getAllProfil((results) => {
    return response(res, 'Message from standart response', results);
  });
};

exports.createProfil = [
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
      return response(res, 'Error accured', validation.array(), 400);
    }

  }
];

exports.getProfilById = (req, res) => {
  const {
    id
  } = req.params;
  profilModels.getProfilById(id, (err, results) => {
    if (results.rows.length > 0) {
      return response(res, 'Deatil User', results.rows[0]);
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

exports.deleteProfil = (req, res) => {
  const {
    id
  } = req.params;
  profilModels.deleteProfil(id, (results) => {
    if (results.length > 0) {
      return response(res, 'Delete Users success', results[0]);
    } else {
      return res.redirect('/404');
    }
  });
};