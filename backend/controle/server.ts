import express from 'express'
import cors from 'cors'
import path from 'path'
//cors vai ser usado para comunicação externa
const app = express()
const port = 5000

//imports dos métodos
import cadastrar from './cadastrarUsuario.ts'

// TODO executar o codigo do prisma por aqui

// ! Mover pasta backend para a pasta principal

// server.ts será responsável pela inicialização do servidor e o carregamento de todos os recursos necessários
// pode conter testes para verificar se a conexão foi bem sucedida

// routes.ts será responsável por designar funções para determinadas rotas
// quando uma rota for chamada por algum método HTTP (GET, POST, etc), ela executará a função designada para aquela rota

app.use

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


//Mover para a Pasta Rotas
app.post('/cadastrar', (req, res) => {
    //cadastrar();
    //res.send("");
    console.log("Cadastro Realizado com Sucesso");
}); 
