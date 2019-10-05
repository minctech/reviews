const mysql = require('mysql');

const connection = mysql.createConnection({ // docker exec -it mysql bash
  host: 'localhost', // change this for aws ec2 instance, docker network inspect bridge
  user: 'root',
  password: 'password',
  database: 'reviewsmodule',
});

connection.connect();

const getListingReviews = function (listingID, callback) {
  connection.query(`SELECT * FROM reviews WHERE listings_id = ${listingID}`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getListingHost = function (listingID, callback) {
  connection.query(`SELECT host_pic, host_name FROM listings WHERE id = ${listingID}`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getReviewUser = function (userID, callback) {
  connection.query(`SELECT * FROM users WHERE id = ${userID}`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getReviewResponse = function (responseID, callback) {
  connection.query(`SELECT * FROM responses WHERE id = ${responseID}`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getListingReviews,
  getListingHost,
  getReviewUser,
  getReviewResponse,
};
