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

      let novoUsuario = req.body

      fs.readFile("./database/Usuarios.JSON", "utf-8", (error, jsonString) => {
        if (error) {
          console.log(error.message);
        } else {
          const data = JSON.parse(jsonString);
          let novoId = data.length + 1;

          novoUsuario.id = novoId.toString();
          data.push(novoUsuario);

          let dataToJson = JSON.stringify(data, null, 2);

          fs.writeFile("./database/Usuarios.JSON", dataToJson, (error) => {
            if (error) {
              console.log("Erro tentando adicionar o novo usuário");
              console.log(error.message);
            } else {
              console.log("Novo usuário adicionado!");
            }
          });
        }
      });

      res.redirect('sucesso');

    } else {
      res.render('cadastro', {errors:errors.mapped(), old:req.body});
    }
  },

  sucesso: (req, res) => {
    res.render('sucesso');
  }
}