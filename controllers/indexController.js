const usuarios = require('../database/Usuarios.json');

module.exports = {
  home: (req, res) => {
    res.render('home');
  },

  login: (req, res) => {
    res.render('login')
  },

  validaLogin: (req, res) => {
    let {email, senha} = req.body

    const usuario = usuarios.find( u => u.email == email && u.senha == senha);

    if (usuario === undefined) {
      return res.send('Senha ou e-mail não cadastrado')
    }

    return res.send('Logado com sucesso!')

  }
}