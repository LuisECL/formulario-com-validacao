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

    novoUsuario.id = novoId.toString();
    data.push(novoUsuario);

    let dataToJson = JSON.stringify(data, null, 2);

    fs.writeFile('./database/Usuarios.JSON', dataToJson, (error) => {
      if (error) {
        console.log("Erro tentando adicionar o novo usuário")
        console.log(error.message);
      } else {
        console.log("Novo usuário adicionado!")
      }
    })
  }
})