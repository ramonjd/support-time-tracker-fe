import express from 'express';
import path from 'path';


let app = express();
let server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, '/public')));

server.listen('8888', '0.0.0.0', function () {
    console.log('Express server listening on %d', '8888');
});

exports = module.exports = app;