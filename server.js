const express = require('express')
const app = express()
const port = 3000
let fs = require("fs");
let wordlist = fs.readFileSync("./br-utf8.txt", "UTF-8").split("\n")
let gerarPalavra = () => {
    return wordlist[Math.floor(Math.random() * wordlist.length)]
}

app.get('/', (req,res) => {
    console.log("palavra requisitada")
    res.send(gerarPalavra())
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// const { get } = require('http')

// let palavras = fs.readFileSync("./br-utf8.txt", "UTF-8").split("\n")

// console.log(palavras)


