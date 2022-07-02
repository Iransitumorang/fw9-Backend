const db = require('../helpers/db');

exports.getAllTransactions = (cb)=>{
  const q = 'SELECT amount, recipient_id, sender_id, notes, time, type_id FROM transaction';
  db.query(q, (err, res)=>{
    cb(err, res);
  });
};

exports.createTransaction = (data, cb) => {
  const q = 'INSERT INTO transaction(amount, recipient_id, sender_id, notes, time, type, type_id) VALUES($1, $2, $3, $4, $5, $6)';
  const val = [data.amount, data.recipient_id, data.sender_id, data.notes, data.time, data.type_id];
  db.query(q, val, (err, res)=>{
    if(err){
      cb(err);
    }else{
      cb(err, res.rows);
    }
  });
};