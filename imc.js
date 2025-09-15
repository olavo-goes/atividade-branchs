const prompt = require('prompt-sync')();
let peso = parseFloat(prompt("digite seu peso "))
let altura = parseFloat(prompt("digite sua Altura "))
let imc = peso / (altura * altura)
console.log(`seu imc é ${imc}`)