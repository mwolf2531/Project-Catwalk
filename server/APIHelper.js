const config = require('../config.js');
let headers = {
  'Authorization': config.TOKEN
};
module.exports = { headers };