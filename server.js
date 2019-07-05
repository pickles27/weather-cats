const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
let app = express();


//app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('hi')
// });
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

var port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}........... o.o`);
});