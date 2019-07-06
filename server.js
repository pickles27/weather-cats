const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'https://www.metaweather.com'
};

app.get('/search/:string', cors(corsOptions), (req, res) => {
  var query = 'https://www.metaweather.com/api/location/search/?query=' + req.params.string;
  axios.get(query)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(error => {
    res.status(400).send(error);
  });

});

app.get('/data/:woeid', cors(corsOptions), (req, res) => {
  var today = new Date();
  var year = today.getFullYear().toString();
  var month = (today.getMonth() + 1).toString();
  var day = today.getDate().toString();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  var date = year + '/' + month + '/' + day;
  var query = `https://www.metaweather.com/api/location/${req.params.woeid}/${date}/`;
  axios.get(query)
  .then(response => {
    res.status(200).send(response.data[0]);
  })
  .catch(error => {
    res.status(400).send(error);
  })
});

var port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}........... o.o`);
});