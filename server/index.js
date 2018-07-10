require('newrelic');

require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');
require('../db/config');
const cors = require('cors');

const toobusy = require('toobusy-js');

const { router } = require('./router');

const app = express();
const port = 3002;

app.use(cors());

app.get(
  '/loaderio-7dad13af7e0d2d43497cb43ec00a0282',
  function(req, res) {
    res.send(process.env.loader_key);
  }
);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);

app.use(function(req, res, next) {
  if (toobusy()) {
    res.status(503).send("I'm busy right now, sorry.");
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log('listening to port ', port);
});
