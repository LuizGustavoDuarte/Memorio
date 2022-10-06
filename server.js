let fs = require("fs");

let palavras = fs.readFileSync("./br-utf8.txt", "UTF-8").split("\n")

console.log(palavras)