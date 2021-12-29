const express = require('express')
const app = express()
const port = 3000


app.use(express.json());
app.use(express.static(__dirname + '/../dist'));

//using express, telll our server to use the routes.js file for all requests
const APIRoutes = require('./routes.js');
app.use('/api', APIRoutes);
// app.get('/test', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})