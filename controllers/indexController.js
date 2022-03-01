module.exports = {
  home: (req, res) => {
    res.render('home');
  },

  login: (req, res) => {
    res.render('login')
  },

  validaLogin: (req, res) => {
    let {email, senha} = req.body

    res.redirect('/')
  }
}