/// Para um sistema de notas podemos adicionar valores da maneira convencional sem problemas
const nota = [8, 6, 10, 8, 9]
/// Podemos também adicionar valores após isso com a função push
nota.push(8, 9, 10)
/// Agora verificando:
console.log(`Notas: ${nota}`)
/// Para tirarmos a media existe a maneira mais complexa, sendo: 
const media= ((nota[0] + nota[1] + nota[2] + nota[3] + nota[4] + nota[5] + nota[6] + nota[7]) / nota.length)
console.log(`Média é: ${media}`)
/// Para facilitar existe uma maneira de fazer um laço de repetição que lê todos os valores e tira a media
var soma=0
for(i = 0; i < nota.length; i++){/// esse laço vai se repetir o tanto de vezes em relação ao tamanho do array
    var soma= nota[i]+soma //aqui, o valor de dentro do array vai ser lido e somado ao anterior, assim trazendo como resultado a soma de todos juntos
}
/// podemos ver a soma aqui
console.log(`Soma das notas ${soma}`)
/// para tirar a media, precisamos apenas dividir a soma pelo tamanho do array, dentro do proprio console.log
console.log(`A média é ${soma/nota.length}`)

///// Essa maneira de tirar a media e pegar a soma dos resultados é muito util para codigos grandes, com muitas notas a serem somadas, bem mais simples

