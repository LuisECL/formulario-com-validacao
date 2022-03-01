module.exports = {
  entrada: (req, res) => {
    res.render('entrada', {usuario: req.session.usuario});
  },
  aliens: (req, res) => {
    res.render('aliens', {usuario: req.session.usuario});
  }
}