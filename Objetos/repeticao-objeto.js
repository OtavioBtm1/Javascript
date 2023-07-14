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

for (let chave in cliente){// essa estrutura de repetição passa por todos os campos do objeto cliente e nos retorna o nome deles
    // console.log(`${chave}:`)    // nos retorna todos os campos do objeto, nome, idade, telefone e enderecos
    // console.log(`${cliente[chave]}`)    / dessa forma, ira nos retornar os valoress presentes dentro de cada campo, não apenas o nome
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo != 'function'){// aqui fazemos uma validação para filtrar o que vai nos retornar, pra nao haver problemas de retornar uma função dentro do objeto ou algum array de objetos

    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
    // o retorno desse laço de repetição ira nos retornar o nome do campo e o valor dentro dele
}