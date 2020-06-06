'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name : {type : String , required : true},
  price: { type: 'number', required: true },
  weight: Number,
  quantity_in_stock: { type: 'number', required: true },
});

module.exports = mongoose.model('products', products);