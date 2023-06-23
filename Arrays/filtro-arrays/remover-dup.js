const nomes= ['otavio', 'julia', 'julia', 'rafaela', 'livia', 'livia']

const meuSet=new Set(nomes)// set cria um conjunto novo com o conteudo que lhe compoe, nesse caso sendo a lista nomes e evita repetições, tudo o que estiver de repetido ele tira
console.log(meuSet)
//caso nao queira que apareça "set" escrito no terminal, basta declarar uma nova variavel que possui o valor de set
const semRep=[...meuSet]
console.log(semRep)