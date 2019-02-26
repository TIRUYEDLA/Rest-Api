const express = require('express');

const version1Controller = require('../controllers/version1');

const router = express.Router();

router.post("/", version1Controller.parse);


module.exports = router;