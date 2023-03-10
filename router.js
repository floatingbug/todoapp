const router = require('express').Router();
const ctl_registration = require('./controller/ctl_registration');
const ctl_finishRegistration = require('./controller/ctl_finishRegistration');
const ctl_login = require('./controller/ctl_login');
const ctl_getTodoList = require('./controller/ctl_getTodoList');
const ctl_addTodo = require('./controller/ctl_addTodo');

router.post('/registration', ctl_registration);
router.get('/registration', ctl_finishRegistration);
router.post('/login', ctl_login);
router.get('/todo', ctl_getTodoList);
router.post('/addtodo', ctl_addTodo);

module.exports = router;
