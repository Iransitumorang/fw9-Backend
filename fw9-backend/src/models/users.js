const db = require('../helpers/db');

exports.getAllUsers = (cb) => {
  db.query('SELECT * FROM users', (err, res)=>{
    cb(res.rows);
  });
};

exports.createUsers = (data, cb)=>{
  const q = 'INSERT INTO users(email, password, username, pin) VALUES ($1, $2, $3, $4) RETURNING *';
  const val = [data.email, data.password, data.username, data.pin];
  db.query(q, val, (err, res)=>{
    if(res){
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};

exports.updateUser = (data, cb)=>{
  const q = 'UPDATE users SET email="$1", password="$2", username="$3", pin="$4"';
  const val = [data.email, data.password, data.username, data.pin];
  db.query(q, val, (err, res)=>{
    cb(res.rows);
  });
};

