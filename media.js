let notas = [10,6,4,5,7,8,10]
let soma = notas.reduce((acumulador, valor) => acumulador + valor, 0)
let media = soma / notas.length
console.log(media)