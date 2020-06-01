'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const loggerReq = require('./logger.js');
const timeS = require('./timeStamp.js');
app.use(loggerReq);



/************************************************ API Routes **********************************************************/

let dbCat = [];
let dbPro = [];

// categories API Routes 
app.get('/api/v1/categories',timeS(), (req, res, next) => {
  let count = dbCat.length;
  let results = dbCat;
  res.json({ count, results });
}); // end of api get categories 

app.get('/api/v1/categories/:id',timeS(), (req, res, next) => {
  let id = req.params.id;
  let record = dbCat.filter(record => record.id === parseInt(id));
  res.json(record);
}); // end of api get categories by ID 

app.post('/api/v1/categories',timeS(),(req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = dbCat.length + 1;
  dbCat.push(record);
  res.json(record);
}); // end of api post categories 

app.put('/api/v1/categories/:id',timeS(), (req, res, next) => {
  let idUpdate = req.params.id;
  let { name, id } = req.body;
  let recordUpdate = { name, id };
  dbCat = dbCat.map((record) => (record.id === parseInt(idUpdate)) ? recordUpdate : record);
  res.json(recordUpdate);
}); // end of api put categories by ID 

app.patch('/api/v1/categories/:id',timeS(), (req, res, next) => {
    let id = req.params.id;
    let { name } = req.body;
    let recordUpdate = { name ,id};
    dbPro = dbPro.map((record) => (record.id === parseInt(id)) ? recordUpdate : record);
    res.json(recordUpdate);
  }); // end of api put categories by ID 

app.delete('/api/v1/categories/:id',timeS(), (req, res, next) => {
  let idDelete = req.params.id;
  dbCat = dbCat.filter(record => record.id !== parseInt(idDelete));
  res.json({ message: ' Item Deleted' });
}); // end of api put categories by ID 


// Products API Routes 

app.get('/api/v1/products',timeS(),(req, res, next) => {
  let count = dbPro.length;
  let results = dbPro;
  res.json({ count, results });
}); // end of api get Products 

app.get('/api/v1/products/:id',timeS(), (req, res, next) => {
  let id = req.params.id;
  let record = dbPro.filter(record => record.id === parseInt(id));
  res.json(record);
}); // end of api get Products by ID 

app.post('/api/v1/products',timeS(), (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = dbPro.length + 1;
  dbPro.push(record);
  res.json(record);
}); // end of api post Products 

app.put('/api/v1/products/:id',timeS(), (req, res, next) => {
  let idUpdate = req.params.id;
  let { name, id } = req.body;
  let recordUpdate = { name, id };
  dbPro = dbPro.map((record) => (record.id === parseInt(idUpdate)) ? recordUpdate : record);
  res.json(recordUpdate);
}); // end of api put Products by ID 

app.patch('/api/v1/products/:id',timeS(), (req, res, next) => {
    let id = req.params.id;
    let { name } = req.body;
    let recordUpdate = { name ,id};
    dbPro = dbPro.map((record) => (record.id === parseInt(id)) ? recordUpdate : record);
    res.json(recordUpdate);
  }); // end of api put Products by ID 

app.delete('/api/v1/products/:id',timeS(),(req, res, next) => {
  let idDelete = req.params.id;
  dbPro = dbPro.filter(record => record.id !== parseInt(idDelete));
  res.json({ message: ' Item Deleted' });
}); // end of api delete Products by ID





/******************************************* Server  POL **********************************************************/
module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(` listening on port No.${PORT}`));
    },
  };