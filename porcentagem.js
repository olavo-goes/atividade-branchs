const prompt = require('prompt-sync')();

let valor = parseFloat(prompt("digite o valor total "))
let porcentagem = parseFloat(prompt("digite a porcentagem "))

let resultado = (valor * porcentagem) / 100 
console.log(resultado)