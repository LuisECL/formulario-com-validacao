const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const semLogin = require('../middlewares/semLogin');

router.get('/', indexController.home);
router.get('/login', semLogin, indexController.login)
router.post('/login', indexController.validaLogin)
router.get('/logout', indexController.logout)

module.exports = router;