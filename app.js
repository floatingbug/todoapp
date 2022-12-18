const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const body_parser = require('body-parser');
const router = require('./router');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

app.use('/', router);

httpServer(8000);
