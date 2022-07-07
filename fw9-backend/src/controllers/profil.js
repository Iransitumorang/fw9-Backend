const response = require('../helpers/standartResponse');
const profilModels = require('../models/profil');

exports.getAllProfil = (req, res) => {
  profilModels.getAllProfil((results) => {
    return response(res, 'Message from standart response', results);
  });
};

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

exports.editProfil = (req, res) => {
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