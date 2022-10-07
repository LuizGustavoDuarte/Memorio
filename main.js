let palavra = document.querySelector("h3")
let passou = document.querySelectorAll("button")[0]
let nova = document.querySelectorAll("button")[1]
let score = 0

let passadas = []

let gerarPalavra = () => {
    palavra.innerHTML = wordlist[Math.floor(Math.random() * wordlist.length)]
}

passou.addEventListener("click", () => {
    if(passadas.includes(palavra.innerHTML)) {
        passadas.push(palavra.innerHTML)
        gerarPalavra()
        console.log(passadas)
    } else {
        window.alert("Perdeu")
    }
})

nova.addEventListener("click", () => {
    if(passadas.includes(palavra.innerHTML)) {
        window.alert("Perdeu")
    } else {
        passadas.push(palavra.innerHTML)
        gerarPalavra()
        console.log(passadas)
    }
})