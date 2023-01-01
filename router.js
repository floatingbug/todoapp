const router = require('express').Router();
const ctl_registration = require('./controller/ctl_registration');

router.post('/registration', ctl_registration);
router.get('/registration', ctr_registration);

module.exports = router;
