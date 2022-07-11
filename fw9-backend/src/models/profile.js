const db = require('../helpers/db');

exports.updateProfile = (id, picture, data, cb) => {
  // const q = `UPDATE profile SET ${picture!==null && 'picture=$1,'}  balance = $3, phonenumber=$4, fullname=$5 WHERE id=$2 RETURNING *`;
  let val = [id];
  const filtered = {};
  const obj = {
    picture,
    fullname: data.fullname,
    balance: data.balance,
    phonenumber: data.phonenumber,
  };

  for(let x in obj){
    if(obj[x]!==null){
      filtered[x] = obj[x];
      val.push(obj[x]);
    }
  }

  const key = Object.keys(filtered);
  const finalResult = key.map((o, ind) => `${o}=$${ind+2}`);

  // console.log(finalResult);
  // console.log(val);
  
  const q = `UPDATE profile SET ${finalResult} WHERE id=$1 RETURNING *`;
  db.query(q, val, (err, res) =>{
    cb(err, res);
  });

  // const val = [picture, id, data.balance, data.phonenumber, data.fullname];
  // db.query(q, val, (err, res) => {
  //   cb(err, res);
  // });
};
