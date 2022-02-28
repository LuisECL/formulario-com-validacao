const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/', usuarioController.cadastro);

module.exports = router;