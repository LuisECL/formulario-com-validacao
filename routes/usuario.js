const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const validador = require('../middlewares/validadorForms')

router.get('/cadastro', usuarioController.cadastro);
router.post('/cadastro', validador, usuarioController.store);
router.get('/sucesso', usuarioController.sucesso)

module.exports = router;