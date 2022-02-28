const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/cadastro', usuarioController.cadastro);
router.post('/cadastro', usuarioController.store);
router.get('/sucesso', usuarioController.sucesso)

module.exports = router;