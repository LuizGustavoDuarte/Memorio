let palavra = document.querySelector("h3")
let passou = document.querySelectorAll("button")[0]
let nova = document.querySelectorAll("button")[1]
let pontos = document.querySelector("#pontos")
let score = 0
let errado = false
let passadas = []
let ultimaPalavra = ""

let gerarPalavra = () => {
    if ((Math.floor(Math.random() * 10)) <= 3 && passadas.length > 5) {
        let palavraGerada = passadas[Math.floor(Math.random() * passadas.length)]
        
        palavra.innerHTML = palavraGerada != ultimaPalavra ? palavraGerada : passadas[Math.floor(Math.random() * passadas.length)]
    
    } else {
        let resp = ""
        fetch("http://localhost:3000", { method: "GET" }).then(data => data.json()).then(resposta => { resp = resposta.palavra }).then(() => {
            console.log(resp)
            palavra.innerHTML = resp
        })
    }
}

let derrota = () => {
    
    palavra.innerHTML = "Tente Novamente"
    Swal.fire({
        title: 'Perdeu!',
        text: 'Tente Novamente',
        icon: 'error',
        confirmButtonText: 'Recom'
    }).then(() => {
        score = 0
        pontos.innerHTML = score
        gerarPalavra()
        passadas = []
    })

    
}

let acertou = ()  =>  {
    passadas.push(palavra.innerHTML)
    gerarPalavra()
    console.log(passadas)
    score++;
    pontos.innerHTML = score
}

gerarPalavra()

passou.addEventListener( "click", () => {(passadas.includes(palavra.innerHTML)) ? acertou() : derrota()} )

nova.addEventListener( "click", () => {(passadas.includes(palavra.innerHTML)) ? derrota() : acertou()} )