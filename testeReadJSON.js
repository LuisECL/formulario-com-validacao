const fs = require('fs')

var usuarioTeste = {
  id: '4',
  nome: 'teste',
  email: 'teste@mail.com',
  senha01: '123'
}

fs.readFile('./database/Usuarios.json', 'utf-8', (err, jsonString) => {
  if (err) {
    console.log('Não foi possível acessar o banco de dados')
    console.log(err)
  } else {
    console.log('Acesso ao banco de dados!');
    let usuarios = JSON.parse(jsonString);
    console.log(usuarios);

    const usuario = usuarios.find(u => u.email == usuarioTeste.email && u.senha01 == usuarioTeste.senha01);

    console.log(usuario);

    if (usuario == undefined) {
      console.log('Não deu certo')
    } else {
      console.log("Achei o usuário!!")
    }
  }
})