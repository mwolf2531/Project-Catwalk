const express = require('express')
const app = express()
const port = 3000
const APIRoutes = require('./routes.js');

app.use(express.json());
app.use(express.static(__dirname + '/../dist'));

//using express, telll our server to use the routes.js file for all requests to /api

app.use('/api', APIRoutes);

//test route to /test (not /api/test)
app.get('/test', (req, res) => {
  res.send('Server Says Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})