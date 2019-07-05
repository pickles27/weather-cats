const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('hellooooooo');
});

app.use(express.static('public'));

var port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}........... o.o`);
})