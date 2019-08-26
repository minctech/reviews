const express = require('express');

const app = express();
const port = 3210;
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const db = require('../database/index.js'); // I'm not using by db here yet

app.use(express.static(`${__dirname}/../client/dist`));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(201).send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
