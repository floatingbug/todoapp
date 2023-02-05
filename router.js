const router = require('express').Router();
const ctl_registration = require('./controller/ctl_registration');
const ctl_finishRegistration = require('./controller/ctl_finishRegistration');

router.post('/registration', ctl_registration);
router.get('/registration', ctl_finishRegistration);

module.exports = router;
