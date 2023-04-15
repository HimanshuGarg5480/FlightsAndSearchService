const express = require('express');
const router = express.Router();
const v1Apirouter = require('./v1/index');

router.use('/v1',v1Apirouter);
module.exports = router;
