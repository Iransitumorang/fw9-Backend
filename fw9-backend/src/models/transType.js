const db = require('../helpers/db');

exports.getAllTransType = (cb) => {
  const q = 'SELECT amount, id, name, description FROM TransType';
  db.query(q, (err, res) => {
    cb(err, res);
  });
};

exports.createTransType = (data, cb) => {
  const q = 'INSERT INTO TransType(id, name, description) VALUES($1, $2, $3)';
  const val = [data.id, data.name, data.description];
  db.query(q, val, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(err, res.rows);
    }
  });
};