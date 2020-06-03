'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// errors 
const err404 = require('../middleware/404.js');
const err500 = require('../middleware/500.js');


// use our created routes 
const catRoutes = require('../routes/cat-route.js');
const prodRoutes = require('../routes/prod-route.js');

app.use('/api/v1', catRoutes);
app.use('/api/v1', prodRoutes);

app.use(err404);
app.use(err500);


module.exports = {
    server : app,
    start : port => {
      let PORT = port || process.env.PORT || 8080;
      app.listen(PORT , ()=> console.log('The App Is a live and Listening on Port No.',PORT));
    },
  };