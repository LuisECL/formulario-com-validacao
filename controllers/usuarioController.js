const {validationResult} = require('express-validator');

module.exports = {
  cadastro: (req, res) => {
    res.render('cadastro');
  },

  store: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {

      console.log(req.body);
      res.redirect('sucesso');

    } else {
      res.render('cadastro', {errors:errors.mapped(), old:req.body});
    }
  },

  sucesso: (req, res) => {
    res.render('sucesso');
  }
}