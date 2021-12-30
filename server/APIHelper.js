const config = require('../config.js');
let headers = {
  'User-Agent': 'request',
  'Authorization': `token ${config.TOKEN}`
};
module.exports = { headers };