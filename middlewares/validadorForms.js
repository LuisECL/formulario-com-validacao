const {check, body} = require('express-validator');

const validador = [
  check('nome')
  .notEmpty().withMessage('Que é isso! Preenche o nome aí, meu!').bail()
  .isLength({min:4}).withMessage('Teu nome não tem menos de 4 letras, nem vem...'),

  check('email')
  .notEmpty().withMessage('E-mail também, né?').bail()
  .isEmail().withMessage('Isso não é um e-mail!'),

  check('senha01')
  .notEmpty().withMessage('Precisa de uma senha!'),

  check('senha02')
  .notEmpty().withMessage('Aqui também...'),
]

module.exports = validador;