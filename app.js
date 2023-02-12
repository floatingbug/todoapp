const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const body_parser = require('body-parser');
const router = require('./router');
const cors = require('cors');
const session = require('express-session');
const mongoStore = require('connect-mongo');

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
app.use(session({
	secret: 'foo',
	store: mongoStore.create({ mongoUrl: 'mongodb://localhost/todo-session-store' })
}));
app.use('/', router);

httpServer.listen(8000);
