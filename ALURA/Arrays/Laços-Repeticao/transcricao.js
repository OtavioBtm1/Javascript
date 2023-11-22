const media=[10, 8, 9,7]
var somadasnotas=0
for(let nota of media){// uma maneira bem mais simples de exibir todos os elementos de um array, é utilizando for of, primeiro declaramos o for, dentro do parenteses colocamos uma variavel e depois "of" nome_da_tabela
    console.log(nota)
    somadasnotas+=nota
}
console.log(somadasnotas)
const mediageral = somadasnotas/ media.length
console.log(mediageral)