const router = require('express').Router();
const ctl_registration = require('./controller/ctl_registration');

router.post('/registration', ctl_registration);
router.get('/registration', ctl_registration);

module.exports = router;
