const express = require('express');

const app = express();
const port = 3210;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://ec2-54-67-76-57.us-west-1.compute.amazonaws.com:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(`${__dirname}/../client/dist`));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/listings/:listing_id/reviews', (req, res) => {
  const listingID = req.params.listing_id;
  db.getListingReviews(listingID, (error, data) => {
    if (error) {
      console.log('SERVER GET LISTING REVIEWS ERROR: ', error);
      res.status(500).send(error);
    } else {
      console.log('SERVER GET LISTING REVIEWS SUCCESS');
      res.status(200).send(data);
    }
  });
});

app.get('/api/listings/:listing_id/host', (req, res) => {
  const listingID = req.params.listing_id;
  db.getListingHost(listingID, (error, data) => {
    if (error) {
      console.log('SERVER GET LISTING HOST ERROR: ', error);
      res.status(500).send(error);
    } else {
      console.log('SERVER GET LISTING HOST SUCCESS');
      res.status(200).send(data);
    }
  });
});

app.get('/api/listings/users/:user_id', (req, res) => {
  const userID = req.params.user_id;
  db.getReviewUser(userID, (error, data) => {
    if (error) {
      console.log('SERVER GET REVIEW USER ERROR: ', error);
      res.status(500).send(error);
    } else {
      console.log('SERVER GET REVIEW USER SUCCESS');
      res.status(200).send(data);
    }
  });
});

app.get('/api/listings/review/response/:response_id', (req, res) => {
  const responseID = req.params.response_id;
  db.getReviewResponse(responseID, (error, data) => {
    if (error) {
      console.log('SERVER GET REVIEW RESPONSE ERROR: ', error);
      res.status(500).send(error);
    } else {
      console.log('SERVER GET REVIEW RESPONSE SUCCESS');
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
