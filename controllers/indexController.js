const usuarios = require('../database/Usuarios.json');

module.exports = {
  home: (req, res) => {
    res.render('home');
  },

  login: (req, res) => {
    res.render('login', {erro:""})
  },

  validaLogin: (req, res) => {
    let {email, senha} = req.body

    const usuario = usuarios.find( u => u.email == email && u.senha == senha);

    if (usuario === undefined) {
      return res.render('login', {erro:"erro"})
    }

    return res.redirect('/');

  }
}