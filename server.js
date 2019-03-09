const express = require('express')
const app = express()
const port = 8000
const request = require('request');

request('http://api.citybik.es/v2/networks', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.networks[0].company);
  console.log(body.explanation);
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))