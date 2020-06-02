'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const mongoose = require('mongoose');

const mongodbOptions = {
    useNewUrlParser: true, 
    useCreateIndex:true,
    useUnifiedTopology:true 
};

mongoose.connect(process.env.MONGOOSE_URI, mongodbOptions);

server.start();

