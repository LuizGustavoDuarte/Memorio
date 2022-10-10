const express = require('express')
const app = express()
const port = 3000

let fs = require("fs");
let cors = require('cors');
app.use(cors())


let wordlist = fs.readFileSync("./br-utf8.txt", "UTF-8").split("\n")


let gerarPalavra = () => {
    return wordlist[Math.floor(Math.random() * wordlist.length)]
}

app.get('/', (req,res) => {
    res.send(JSON.stringify({palavra: gerarPalavra().toUpperCase()}))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


