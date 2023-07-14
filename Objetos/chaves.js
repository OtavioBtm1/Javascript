const cliente={
    nome: 'otavio',
    idade: 19,
    telefone:['11953210283', '11989668452'],
    email: 'otavio.vitoriano@hotmail.com'
}
cliente.enderecos=[{
    rua:'Rua um',
    bairro:'Bairro dois',
    cidade:'Sao paulo',
    estado:'São Paulo',
    apartamento: true
}]

const chaves = Object.keys(cliente)// essa é uma função que mostramos as propriedades do objeto de uma maneira diferente
console.log(chaves)// aqui é impresso um array com todas as propriedades que o objeto possui

for (let chav in cliente){ /// é diferente do for in por nos retornar um array com as propriedade
    console.log(chav)// o for ir nos retorna as propriedades em forma de string
}
const chavfunc= nomes =>{// aqui existe uma arrow function que nos retorna caso o parametro passado exista no objeto
if(chaves.includes(nomes)){// pegamos a variavel chaves que contem todas as propriedades do objeto cliente e fazemos uma verificação
    return `A propriedade ${nomes} existe `// caso o parametro passado para "nomes" exista em "chaves", ira retornar uma mensagem
}else{
    return `A propriedade ${nomes} não existe`
}
}
console.log(chavfunc('mbappe'))