const cliente={
    nome: 'otavio',
    idade: 19,
    telefone:['11953210283', '11989668452']// como nesse caso que colocamos dois numeros de telefone distintos dentro de um array na lista
}
// quando existem dados que possuem mais de um valor na estrutura do objeto, podemos declarar como arrays, para agrupar mais dados
console.log(`O meu telefone fixo é ${cliente.telefone[0]}, já o meu celular é ${cliente.telefone[1]}`)// assim que são chamados os dados de um objeto em array