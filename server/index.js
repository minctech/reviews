const express = require('express');

const app = express();
const port = 3210;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/listings', (req, res) => {
  db.getAllListings((error, data) => {
    if (error) {
      console.log('SERVER GET LISTINGS ERROR: ', error);
      res.status(500).send(error);
    } else {
      console.log('SERVER GET LISTINGS SUCCESS');
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
