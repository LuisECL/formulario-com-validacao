module.exports = {
  cadastro: (req, res) => {
    res.render('cadastro');
  },
  store: (req, res) => {

    console.log(req.body);
  }
}