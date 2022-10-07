const express = require('express')
const app = express()
const port = 3000
let fs = require("fs");aa
let cors = require('cors');
let wordlist = fs.readFileSync("./br-utf8.txt", "UTF-8").split("\n")
server.use(cors())
let gerarPalavra = () => {
    return wordlist[Math.floor(Math.random() * wordlist.length)]
}

app.get('/', (req,res) => {
    res.send(gerarPalavra())
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// const { get } = require('http')

// let palavras = fs.readFileSync("./br-utf8.txt", "UTF-8").split("\n")

// console.log(palavras)


