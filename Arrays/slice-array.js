const familia=[
    " Otavio",
    " Livia",
    " Rafaela",
    " Adriana",
    " Adriano"
]
/// As vezes precisamos escolher determinadas casas das arrays para exibir seus valores, por isso em Js, existe uma função chamada slice()
/// Slice serve para "cortar" as partes que devem ser selecionadas, por exemplo
console.log(`Minha familia ${familia}`)// essa função mostra tudo que esta dentro da array
console.log(`Meus pais são ${familia.slice(3,5)}`)// ja essa mostra apenas o que esta dentro das posições 3 e 5
console.log(`Minhas irmãs são ${familia.slice(1,3)}`)// essa apenas mostra o que possui 1,3
console.log(`E eu sou o ${familia.slice(0,1)}`)// e essa apenas o que há entre 0,1
// a forma de usar essa função é simples, basta chamar a array, colocar na frente o slice() e indicar entre os parenteses o que deseja visualizar
// (primeira posição, o fim da seleção), exemplo Familia.slice(1,4) = Livia[1], Rafaela[2], Adriana[3], a ultima posição não é mostrada, apenas a primeira
// Outra maneira de declararmos é
const irmãs = familia.slice(1,3)
const pais = familia.slice(3,5)
const eu = familia.slice(0,1)
console.log(`Minhas irmãs são:${irmãs} meus pais são${pais} e eu sou o${eu}`)
/// como podemos ver, podemos adicionar as seleções dos arrays divididos e seus valores, dentro de variaveis para a mostra, tornando assim uma maneira mais simples de mostrar como texto em string