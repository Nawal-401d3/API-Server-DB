'use strict';

const Model = require('../dy-model.js');
const schema = require('./categories-schema.js');

class Categories extends Model {
  constructor() {
    super(schema);
  }
}

module.exports =  Categories;