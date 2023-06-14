const num1= 5
const num2= 10

///// A comparação dos dados pode ser feita no console.log, para fazer essa comparção utilizamos "===", que retorne true ou false
console.log(num1 === num2) //// irá retornar false pois num1 é diferente de num2

const num3 = 5
console.log (num1 === num3) //// irá retornar true pois as variaveis possuem o mesmo valor


///// Agora podemos ver a comparação com o tipo string, pode-se observar que mesmo com as mesmas letras
///// O resultado será "false", já que uma possui letras maiusculas e outras minusculas
const nome = "otavio"
const nome2 = "OTAVIO"
console.log(nome === nome2)//// false pois otavio não é igual a OTAVIO

////// Para resolver esse problema, nós utilizamos as funções vistas anteriormente toLowerCase() e toUpperCase

const nomeUpper = nome.toUpperCase() /// otavio ---> OTAVIO
const nomeLower = nome2.toLowerCase() /// OTAVIO ---> otavio

console.log(nomeUpper === nome2)/// irá retornar true pois os valores se tornaram iguais
console.log(nomeLower === nome)/// irá retornar true pois os valores se tornaram iguais