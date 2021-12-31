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
    url: url + '/reviews',
    headers: headers,
    params: {
      page: 1, //review page to pull from
      count: 5, //number of reviews to pull
      sort: 'relevant', //placeholder - replace with currently selected sort method
      product_id: 37314 //placeholder - replace with id of current product
    }
  };
  axios(options)
    .then(function (res) {
      console.log(res.data);
      getRes.send(res.data)
    })
    .catch(function (err) { getRes.send(err) });
})
// get "metaData" - pulls all review meta data for the current item
router.get('/revMeta', (req, getRes) => {
  //Call API, Get review data
  let options = {
    method: 'GET',
    url: url + '/reviews/meta',
    headers: headers,
    params: {
      product_id: 37314 //placeholder - replace with id of current product
    }
  };
  axios(options)
    .then(function (res) {
      console.log(res.data);
      getRes.send(res.data)
    })
    .catch(function (err) { getRes.send(err) });
})
// post "review" - posts a new user created review
router.post('/reviews', (req, postRes) => {
  //Call API, Get review data
  let options = {
    method: 'POST',
    url: url + '/reviews',
    headers: headers,
    params: {
      product_id: 37314, //placeholder - replace with id of current product
      rating: 5, //placeholder - takes in 1-5 for star rating
      summary: 'User Entered Title Here', //placeholder
      body: 'User Entered Review Body Goes Here', //placeholder
      recommend: true, //placeholder - boolean representing if user recommends product
      name: 'User Entered Username', //placeholder
      email: 'User@Entered.Email', //placeholder
      photos: [], //placeholder - array of text urls that link to user uploaded images
      characteristics: {} //placeholder - object of keys representing characteristic_id and values representing review value
      //example, "size" is characteristic 14. {14:3} is perfect size. {14:5} is a full size too big {14:2} is a half size small
    }
  };
  axios(options)
    .then(function (res) {
      console.log(res.data);
      postRes.send(res.data)
    })
    .catch(function (err) { postRes.send(err) });
})
// put "helpful" - posts a user toggle of the "helpful" trait review
router.put('/helpful', (req, putRes) => {
  //Call API, Get review data
  let options = {
    method: 'PUT',
    url: url + '/reviews/1074988/helpful', //replace 1074988 with current review id
    headers: headers,
    params: {
      review_id: 1074988 //placeholder - replace with id of current review
    }
  };
  axios(options)
    .then(function (res) {
      console.log(res.data);
      putRes.send(res.data)
    })
    .catch(function (err) { putRes.send(err) });
})
// put "report" - posts a user toggle of a particular report option (bad language, hate speech, etc)
router.put('/report', (req, putRes) => {
  //Call API, Get review data
  let options = {
    method: 'PUT',
    url: url + '/reviews/1074988/report', //replace 1074988 with current review id
    headers: headers,
    params: {
      review_id: 1074988 //placeholder - replace with id of current review
    }
  };
  axios(options)
    .then(function (res) {
      console.log(res.data);
      putRes.send(res.data)
    })
    .catch(function (err) { putRes.send(err) });
})
//MEGAN'S ROUTES

router.get('/questions', (req, getRes) => {
  //Call API, Get question data
  let options = {
    method: 'GET',
    url: url + '/qa/questions',
    headers: headers,
    params: {
      product_id: 37314,
      page: 20,
      count: 20

    }
  };
  axios(options)
    .then(function (res) {
      getRes.send(res.data)
    })
    .catch(function (err) { getRes.send(err) });
})

router.get('/certainQuestion', (req, getRes) => {
  //Call API, Get question data
  let options = {
    method: 'GET',
    url: url + '/qa/questions/2/answers',
    headers: headers,
    params: {
      question_id: 2
    }
  };
  axios(options)
    .then(function (res) {
      getRes.send(res.data)
    })
    .catch(function (err) { getRes.send(err) });
})


//RYDER's ROUTES
module.exports = router;