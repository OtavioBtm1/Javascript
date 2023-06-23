const notas = [10, 8, 7, 6]
let soma=0
// vamos fazer o calculo da media agora utilizando a função .forEach(), no caso o E de Each deve sempre ser maiusculo
notas.forEach(function(){
    console.log('ola')// será impresso "ola, ola, ola, ola" por conta do numero de casas, podemos entao deduzir que essa função funciona como um laço de repetição que se repete dependendo da quantidade de casas dentro do array
})
notas.forEach(function(nota){//declaramos nota como parametro mas poderia ser qualquer outro nome, ja que iria trabalhar da mesma forma com os valores da lista
soma+=nota//aqui soma que vale 0, toma valores que estao dentro da lista mas a lista possuindo sua variavel de "nota", rodando o mesmo numero de vezes em relação a quantidade de casas nos arrays
})

const media=soma/notas.length// aqui puxa o valor final de soma, que é a soma dos valores do array e divide pelo tamanho do array
console.log(`A media das notas é ${media}` )