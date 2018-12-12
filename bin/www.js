'use strict';
const http = require('http');
const app = require('../app')

const server = http.createServer(app).listen(4200, () => {
  console.log('Server start at port 4200');
});