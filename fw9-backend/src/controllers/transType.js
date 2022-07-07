const response = require('../helpers/standartResponse');
const transTypeModels = require('../models/transType');

exports.getAllTransType = (req, res) => {
  transTypeModels.getAllTransType((err, results) => {
    const parsedDate = results.rows.map(o => {
      return {
        id: o.id,
        name: o.name,
        description: o.description
      };
    });
    return response(res, 'List all transType', parsedDate);
  });
};