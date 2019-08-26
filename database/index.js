const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'reviewsmodule',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// here is where your query functions with callbacks go
const getAllListings = function (callback) {
  connection.query('SELECT * FROM listings', (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getListingReviews = function (listingID, callback) {
  connection.query(`SELECT * FROM reviews WHERE listings_id = ${listingID}`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getAllListings,
  getListingReviews,
};
