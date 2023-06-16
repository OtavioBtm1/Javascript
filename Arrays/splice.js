const alunos=[ 'Maria', 'Ana', 'Caio',  'Bia',  'Marjorie', 'Leo']
/// Agora vamos ver como remover itens de uma lista
/// A função splice pode fazer isso, o primeiro numero do parenteses significa a posição que desejamos remover
/// Já o segundo numero se refere a quantidade de itens após a posição que devem ser removidos
// Uma outra função do splice é a substituição dos valores deletados por outro, apenas sendo necessario colocar como terceiro parametro
alunos.splice(1, 2, "Rodrigo")// Nesse caso "Ana" e "Caio" serão removidos e rodrigo é adicionado
console.log(alunos)/// Diferente do slice, a função ja remove da lista, nao precisando digitar apenas no console.log ou armazenar em uma variavel
