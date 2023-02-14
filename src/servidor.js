const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados.js')



app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: res.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})