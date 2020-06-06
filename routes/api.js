'use strict';

const express = require('express');

const Categories = require('../models/categories-mod/categories-model.js');
const Products = require('../models/products-mod/products-model.js');

const router = express.Router();

const catMod = new Categories();
const proMod = new Products();

// makes the products and categories route generic 
function modelName(req, res, next) {
    // make the model name generic globally 
    let model = req.params.model;

    // to modify the middleware request 
    switch (model) {
        // api/v1/modelN === api/v1/categories 
        case 'categories':
            req.model = catMod;
            next();
            return;

        // api/v1/modelN === api/v1/produts 
        case 'products':
            req.model = proMod;
            next();
            return;

        // if the model name invalid , the middleware error will occars 
        default:
            next(' This model Name Not Exist');
            return;

    } // end of switch statement 

} // end of modelname function 


// request params ( :modelN )
router.param('model', modelName);


// Define our routes
router.get('/:model', getMod);
router.get('/:model/:id', getOne);
router.post('/:model', postMod);
router.put('/:model/:id', putMod);
router.delete('/:model/:id', deleteMod);


function getMod(req, res, next) {
    req.model.get()
        .then(data => {
            console.log('data : ', data);
            res.status(200).json(data);
        })
        .catch(next);
}

function getOne(req, res, next) {
    let id = req.param.id;
    req.model.get(id)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(next);
  } // end of getOne function

function postMod(req, res, next) {
    req.model.create(req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}
function putMod(req, res, next) {
    req.model.update(req.params.id, req.body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

function deleteMod(req, res, next) {
    req.model.delete(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(next);
}

module.exports = router;