const prompt = require('prompt-sync')();
let celsius = parseFloat(prompt("temperatura em graus "))
let fahrenheit = (celsius * 9/5) + 32
console.log(`${celsius} graus celcius equivalem a ${fahrenheit} fahrenheit`)