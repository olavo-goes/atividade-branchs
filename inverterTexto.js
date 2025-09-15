const prompt = require('prompt-sync')();

function inverterTexto(texto) {
    return texto.split('').reverse().join('')
}

let nome = prompt("digite seu nome ")
let nomeInvertido = inverterTexto(nome)
console.log(nomeInvertido)