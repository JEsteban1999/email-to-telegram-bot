const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/mail/list/:email', controllers.getLastMail);

module.exports = router;