// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
// Math.round(4.3) retorna 4
// Math.round(3.85) retorna 4
// Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
console.log("Arrendondamento de valores: 2.7 e 2.4")
console.log(Math.round(2.7))
console.log(Math.round(2.4))

// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
// Math.ceil(5.2) retorna 6
console.log("Arredondamento pra cima de: 5.1")
console.log(Math.ceil(5.1))

// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
// Math.floor(5.2) retorna 5
console.log("Arredondamento pra baixo de: 5.9")
console.log(Math.floor(5.9))

// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4
console.log("Desconsidera numeros decimais, numero: 2.32421")
console.log(Math.trunc(2.32421))

// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
// Math.pow(4 , 2) retorna 4^2 = 16
// Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
console.log("Função que faz a exponenciação de numeros, 4^2")
console.log(Math.pow(4 , 2)) 

// Math.sqrt() : Retorna a raiz quadrada de um número.
// Math.sqrt(64) retorna 8
console.log("Retorna a raiz quadrada de: 81")
console.log(Math.sqrt(81))

// Math.min(): Retorna o menor valor entre os argumentos.
// Math.min(0, 150, 30, 20, -8, -200) retorna -200
console.log("Retorna o menor numero entre 2, 4, 5, 10, -12, -200, 90")
console.log(Math.min(2, 4, 5, 10, -12, -200, 90))

// Math.max(): Retorna o maior valor entre os argumentos.
// Math.max(0, 150, 30, 20, -8, -200) retorna 150
console.log("Retorna o maior numero entre 12 , -12, 43, 99, 27 ")
console.log(Math.max(12 , -12, 43, 99, 27))

// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
// Math.random() retorna 0.7456916270759015
// Math.random() retorna 0.15449802102729304
// Math.random() retorna 0.4214269561951203
console.log("Retorna um numero randomico")
console.log(Math.random())