module.exports = {
  cadastro: (req, res) => {
    res.render('cadastro');
  },
  store: (req, res) => {

    console.log(req.body);

    res.redirect('/sucesso')
  },
  sucesso: (req, res) => {
    res.render('sucesso');
  }
}