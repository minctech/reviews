const express = require('express');

const app = express();
const port = 3210;
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const {getReposByUsername} = require('../helpers/github.js');
// const savedb = require('../database/index.js');

app.use(express.static(`${__dirname  }/../client/dist`));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
