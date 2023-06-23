const Pessoa={ 
    nome: 'Otavio',
    idade: 19,
    cpf: '50608172880'
}
console.log(`Meu nome é ${Pessoa['nome']} eu tenho ${Pessoa["idade"]} anos e meu cpf é ${Pessoa['cpf']}`)
// a utilização desses colchetes seria para no caso de nao sabermos os valores do objeto, para consultarmos podemos fazero seguinte
const chaves=['nome', 'idade', 'cpf', 'altura']// aqqui definimos um array que contem os mesmos atributos do objeto, porém sem valores
chaves.forEach((chaves)=>{ //aqui uma função callback que chama os valores da estrutura do objeto 
    console.log(`A chave ${chaves} tem valor ${Pessoa[chaves]}`)// aqui utilizamos a lista 'chaves' como um auxilio para pegar as palavras chaves do que queremos, assim dando utilidade ao colchete
})// podemos perceber tambem o retorno para a chave 'altura', que nao possui valor no objeto