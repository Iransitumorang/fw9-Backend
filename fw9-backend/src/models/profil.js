const db = require('../helpers/db');

exports.getAllProfil = (cb) => {
  db.query('SELECT * FROM profil', (err, res) => {
    cb(res.rows);
  });
};

exports.updateProfil = (data, cb) => {
  const q = 'UPDATE profil SET email="$1", password="$2", username="$3", pin="$4"';
  const val = [data.email, data.password, data.username, data.pin];
  db.query(q, val, (err, res) => {
    cb(res.rows);
  });
};

exports.deleteProfil = (id, cb) => {
  const q = 'DELETE FROM profil WHERE id=$1 RETURNING *';
  const val = [id];
  db.query(q, val, (err, res) => {
    if (err) {
      return err;
    }
    cb(res.rows);
  });
};