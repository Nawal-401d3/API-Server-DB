'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const mongoose = require('mongoose');

const mongodbOptions = {
  useNewUrlParser: true, 
  useCreateIndex:true,
  useUnifiedTopology:true, 
};
const MONGOOSE_URI='mongodb://localhost:27017/class08_401d3';

mongoose.connect(MONGOOSE_URI, mongodbOptions);

server.start();

