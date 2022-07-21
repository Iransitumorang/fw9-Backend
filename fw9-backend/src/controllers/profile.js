const response = require('../helpers/standartResponse');
const profileModel = require('../models/profile');

exports.updateProfile = (req, res)=>{
  const {id} = req.params;

  let filename = null;
  if(req.file){
    filename = req.file.filename;
  }

  profileModel.updateProfile(id, filename, req.body, (err, results)=>{
    if(err){
      return response(res, `Failed to update: ${err.message}`, null, null, 400);
    }
    return response(res, 'Profile updated', results.rows[0]);
  });
};

