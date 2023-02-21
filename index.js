require('dotenv').config();
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

app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
app.use(session({
	secret: 'kdjflsjdfoij3f8939f3fj8932j893fjwe8djfa98J()JFG(jh89sjge3g89)(/7sdf9:',
	//dont save session data again into db, just load if request was made
	resave: false,
	//dont save a session if no data is attached to req.session
	saveUninitialized: false,
	store: mongoStore.create({
		mongoUrl: 'mongodb://localhost/testdb'
	})
}));

app.use('/', router);


httpServer.listen(PORT);
