import express from 'express'
const app = express()
const port = 5000

// TODO executar o codigo do prisma por aqui

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})