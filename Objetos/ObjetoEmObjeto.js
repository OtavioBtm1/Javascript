const cliente={
    nome: 'otavio',
    idade: 19,
    telefone:['11953210283', '11989668452']
}
cliente.endereco={
    rua:'Rua um',
    bairro:'Bairro dois',
    cidade:'Sao paulo',
    estado:'São Paulo'
}//podemos adicionar a estrutura de objeto dentro de um objeto caso o mesmo tenha varias informações, como nesse caso o endereço, que contem, rua, bairro, estado, cidade
console.log(cliente.endereco.bairro)
console.log(cliente.endereco.rua)
console.log(cliente.endereco.cidade)
console.log(cliente.endereco.estado)
// dessa maneira acima que os valores de um objeto dentro do outro são chamados