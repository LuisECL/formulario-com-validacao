//const usuarios = require('../database/Usuarios.json');
const fs = require('fs')

module.exports = {
  home: (req, res) => {
    res.render('home', {usuario: req.session.usuario});
  },

  login: (req, res) => {
    res.render('login', {erro:""})
  },

  validaLogin: (req, res) => {
    let {email, senha} = req.body

    fs.readFile('./database/Usuarios.json', 'utf-8', (err, jsonString) => {
      if (err) {
        console.log('Não foi possível acessar o banco de dados')
      } else {
        console.log('Acesso ao banco de dados!!')
        let usuarios = JSON.parse(jsonString);

        const usuario = usuarios.find(u => u.email == email && u.senha01 == senha);

        if (usuario === undefined) {
          return res.render('login', {erro:"erro"})
        }

        req.session.usuario = usuario
        return res.redirect('/');
      }
    })

  }
}