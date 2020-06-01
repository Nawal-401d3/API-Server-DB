'use strict';

const express = require('express');
const app = express();
app.use(express.json());





/******************************************* Server  POL **********************************************************/
module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(` listening on port No.${PORT}`));
    },
  };