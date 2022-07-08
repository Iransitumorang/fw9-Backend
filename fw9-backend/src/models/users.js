const db = require('../helpers/db');

exports.getAllUsers = (keyword, cb) => {
  //console.log(keyword);
  db.query(`SELECT * FROM users WHERE email LIKE '%${keyword}%' ORDER BY id ASC`, (err, res) => {
    // console.log(res);
    if (err) {
      console.log(err);
    } else {
      cb(err, res.rows);
    }
  });
};

exports.getUserById = (id, cb) => [
  db.query('SELECT * FROM users WHERE id=$1', [id], (err, res) => {
    cb(err, res);
  })
];

exports.createUser = (data, cb) => {
  const q = 'INSERT INTO users(email, password, username, pin) VALUES ($1, $2, $3, $4) RETURNING *';
  const val = [data.email, data.password, data.username, data.pin];
  db.query(q, val, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};

exports.updateUser = (data, cb) => {
  const q = 'UPDATE users SET email="$1", password="$2", username="$3", pin="$4"';
  const val = [data.email, data.password, data.username, data.pin];
  db.query(q, val, (err, res) => {
    cb(res.rows);
  });
};

exports.deleteUser = (id, cb) => {
  const q = 'DELETE FROM users WHERE id=$1 RETURNING *';
  const val = [id];
  db.query(q, val, (err, res) => {
    if (err) {
      return err;
    }
    cb(res.rows);
  });
};