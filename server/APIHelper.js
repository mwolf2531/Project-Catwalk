const config = require('../config.js');

let options = {
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/:rfe/`,
  headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  }
};

module.exports = { options };