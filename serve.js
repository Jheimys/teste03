
const express = require('express')
const path = require('path')
const rotas = require('./users')

const app = express()
const Port = 5000
const basePath = path.join(__dirname, 'templates')

//ler body
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.use(express.static('public'))
app.use('/', rotas)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.listen(Port, () => {
    console.log(`App rodando na porta ${Port}`)
})