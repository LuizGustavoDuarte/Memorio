let palavra = document.querySelector("h3")

let passou = document.querySelectorAll("button")[0]
let nova = document.querySelectorAll("button")[1]
let score = 0

let passadas = []

let gerarPalavra = () => {

    let resp = ""
    fetch("http://localhost:3000", {method: "GET"}).then(resposta => {resp = resposta}).then(() => {
        console.log(resp)
        palavra.innerHTML = resp
    })
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