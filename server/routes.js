const express = require('express');
const router = express.Router();
const axios = require('axios');
//Server info variable (API)
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe`;
//Header (API Auth)
const { headers } = require('./APIHelper.js');
//SUPPORT ROUTES
//test route at /api/test
router.get('/tests', (req, res) => {
  res.send('API Router says Hello World!');
})
//ALEX's ROUTES
// get "allReviews" - pulls all review data for the current item
router.get('/reviews', (req, getRes) => {
  //Call API, Get review data
  let options = {
    method: 'GET',
    url: url + '/products',
    headers: headers
  };
  axios(options)
    .then(function (res) {
      console.log(res.data);
      getRes.send(res.data)
    })
    .catch(function (err) { res.send(err) });
})
// post "review" - posts a new user created review
// post "helpful" - posts a user toggle of the "helpful" trait review
// post "report" - posts a user toggle of a particular report option (bad language, hate speech, etc) - Can be faked
//MEGAN'S ROUTES

//RYDER's ROUTES
module.exports = router;