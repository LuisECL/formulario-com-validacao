const express = require('express');
const area51Controller = require('../controllers/area51Controller.js');
const router = express.Router();

router.get('/entrada', area51Controller.entrada);
router.get('/aliens', area51Controller.aliens)

module.exports = router;