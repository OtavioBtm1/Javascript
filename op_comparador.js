/// no JavaScript existem tipos diferentes de comparadores lógicos
const idade_num=19
const idade_str="19"


/// temos o == que serve para comparar os valores da variavel independente de tipo
/// Exemplo:
console.log("com '=='")
console.log("valor igual e tipo diferente ", idade_num == idade_str)
/// para puxarmos do sistema o tipo da variavel, usamos a função typeof, dentro do console.log
console.log("Agora puxando os tipos das variaveis:")
console.log( typeof idade_num, typeof idade_str)// irá retornar "number, string" ou seja, os tipo das variaveis

/// agora possuimos o ===, que é mais rigido para retornar true, exigindo igualdade de valor e tipo
/// Exemplo:
console.log("Agora com '==='")
console.log("valor igual e tipo diferente =", idade_num === idade_str)// irá retornar false pois os valores são iguais, porém uma é do tipo string e a outra do tipo number
console.log("Agora com a função:")
console.log("valor igual e tipo igual =", idade_num === Number(idade_str))