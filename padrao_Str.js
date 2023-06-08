const minuscula = "otavio"
const maiuscula = "OTAVIO"

////////// Para padronização das palavras, utiliza-se da função toLowerCase() para transformar as letras de uma palavra para minuscula
const nomeMinusculo = maiuscula.toLowerCase()

///////////// Pode ser utilizado da mesma forma para transformar as letras para maiuscula com a função toUppercase()
const nomeMaiusculo = minuscula.toUpperCase()

////////////// Caso o a palavra nao seja padronizada o resultado virá como "false"

console.log(maiuscula === minuscula) //// false
console.log(maiuscula === nomeMaiusculo) //// true
console.log(minuscula === nomeMinusculo) //// true

///////// Existe também uma função para contar a quantidade de caracteres de uma palavra, ex: senha, a função é "lenght"

const senha= "123abc  oieee" /////////// 13 caracteres, o espaço também é contabilizado
console.log(senha.length)