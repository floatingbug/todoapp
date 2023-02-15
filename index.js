const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const body_parser = require('body-parser');
const router = require('./router');
const cors = require('cors');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use('/', router);
app.use(express.static(__dirname + '/public'));

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
/*app.use(session({
	secret: 'foo',
	store: mongoStore.create({ mongoUrl: 'mongodb://localhost/todo-session-store' })
}));
*/

httpServer.listen(PORT);
