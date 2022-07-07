const db = require('../helpers/db');

exports.getAllTransType = (cb) => {
  const q = 'SELECT amount, id, name, description FROM TransType';
  db.query(q, (err, res) => {
    cb(err, res);
  });
};