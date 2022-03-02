const {validationResult} = require('express-validator');
const fs = require('fs');

module.exports = {
  cadastro: (req, res) => {
    res.render('cadastro');
  },

  store: (req, res) => {
    // let {senha01, senha02} = req.body;
    let errors = validationResult(req);

    if (errors.isEmpty()) {

      // Lógica para definir o novo id
      /*let db = fs.readFile('../formulario-com-validacao/database/Usuarios.JSON', 'utf-8', error => {
        if (error) {
          console.log(error.message)
        } else {
          console.log(db)
        }
      })

      // Lógica para salvar o novo usuário no JSON // console.log(req.body);
      let {nome, email, senha01} = req.body;
      let usuarioNovo = {}*/

      res.redirect('sucesso');

    } else {
      res.render('cadastro', {errors:errors.mapped(), old:req.body});
    }
  },

  sucesso: (req, res) => {
    res.render('sucesso');
  }
}