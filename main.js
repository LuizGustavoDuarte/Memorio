let palavra = document.querySelector("h3")

let passou = document.querySelectorAll("button")[0]
let nova = document.querySelectorAll("button")[1]

let wordlist = [
"Aarão",
"Abel",
"Abelardo",
"Abissínia",
"Abner",
"Abraão",
"Absalão",
"Acab",
"Acaia",
"Acker",
"Aconcágua",
"Acre",
"Acrópole",
"Adauto",
"Ademir",
"Adhemar",
"Adolfo",
"Adriana",
"Adriano",
"Adriático",
"Adroaldo",
"Afeganistão",
"Afonso",
"Afrodite",
"Agostinho",
"Aires",
"Ajax",
"Alagoas",
"Alair",
"Alarico",
"Alasca",
"Alberta",
"Albertina",
"Alberto",
"Alceu"
]

let passadas = []

let gerarPalavra = () => {
    palavra.innerHTML = wordlist[Math.floor(Math.random() * wordlist.length)]
}

passou.addEventListener("click", () => {
    gerarPalavra()
})

nova.addEventListener("click", () => {
    gerarPalavra()
})