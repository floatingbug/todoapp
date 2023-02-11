const router = require('express').Router();
const ctl_registration = require('./controller/ctl_registration');
const ctl_finishRegistration = require('./controller/ctl_finishRegistration');
const ctl_login = require('./controller/ctl_login');

router.post('/registration', ctl_registration);
router.get('/registration', ctl_finishRegistration);
router.post('/login', ctl_login);

module.exports = router;
