const express = require('express');
const router = express.Router();

//SUPPORT ROUTES
router.get('/test', (req, res) => {
  res.send('Hello World!')
})

//ALEX's ROUTES
// get "allReviews" - pulls all review data for the current item
// post "review" - posts a new user created review
// post "helpful" - posts a user toggle of the "helpful" trait review
// post "report" - posts a user toggle of a particular report option (bad language, hate speech, etc) - Can be faked

//MEGAN'S ROUTES

//RYDER's ROUTES

module.exports = router;