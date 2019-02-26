const express = require('express');

const version2Controller = require('../controllers/version2');

const router = express.Router();

router.post("/", version2Controller.parse);


module.exports = router;