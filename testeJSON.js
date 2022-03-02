const fs = require('fs');

let novoUsuario = {
  nome: "Luis",
  email: "luis@mail.com",
  senha01: "123"
}

fs.readFile('./database/Usuarios.JSON', 'utf-8', (error, jsonString) => {
  if(error) {
    console.log(error.message);
  } else {
    const data = JSON.parse(jsonString);
    let novoId = data.length+1;

    novoUsuario.id = novoId;

    fs.appendFile('./database/Usuarios.JSON', 'utf-8', (error) => {
      if (error) {
        console.log("Erro tentando adicionar o novo usuário")
      } else {
        console.log("Novo usuário adicionado!")
      }
    })
  }
})