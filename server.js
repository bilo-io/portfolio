var fallback = require('express-history-api-fallback');
var express = require('express');
var server = express();
var port = process.env.port || 8080;


server.use(express.static(__dirname + '/dist/'));
server.use(fallback('index.html', {root:__dirname + '/dist/'}));
server.listen(port, '0.0.0.0');
console.log(`
 ______  _____         _____    _____  _____ 
 |_____]   |   |      |     |     |   |     |
 |_____] __|__ |_____ |_____| . __|__ |_____|
 
 `)
console.log('listening on port: ' + port);