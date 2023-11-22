// const nota1= 10 
// const nota2= 6.5
// const nota3= 8
// const nota4= 7.5
var soma=0
const nota=[10, 6.5, 8, 7.5] /// um array em js serve para simplificar sistemas que precisam de muitos dados, como um de notas de provas
 for (i=0;i < nota.length; i++) { // este é um laço de repetição que roda todas as notas de dentro do array

var soma= nota[i]+soma/// dentro dela são executadas o tanto de vezes em relação ao numero de casas de dentro do array
}
console.log("As notas são: ")
for (i=0; i < nota.length; i++)
    console.log(`A nota da prova ${i+1} é ${nota[i]}`)
    // quando estiver um console.log apontando para a lista, e a variavel do laço de repetição estiver dentro da lista "[i]", vai ser imprimido cada conteudo de dentro da lista
console.log(`A soma final das notas é ${soma}`)
console.log(`E a media é  ${soma/nota.length}`) 
/// a função .length serve para ler o comprimento do array, sendo util nesse caso tanto para o sistema de repetição quanto para o tanto a ser dividido