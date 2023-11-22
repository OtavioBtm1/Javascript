const cliente={
    nome: 'otavio',
    idade: 19,
    telefone:['11953210283', '11989668452']
}
cliente.enderecos=[{
    rua:'Rua um',
    bairro:'Bairro dois',
    cidade:'Sao paulo',
    estado:'São Paulo',
    apartamento: true
}]
// para criarmos um array de objetos, basta apenas colocar as chaves em volta
// para adicionar valores nesses arrays podemos utilizar o push
cliente.enderecos.push({
    rua:"Rua dois",
    bairro:'Bairro tres',
    cidade:'Manaus',
    estado:'Amazonas',
    apartamento:false
})
const listaAps=cliente.enderecos.filter((endereco)=> endereco.apartamento===true)
console.log(listaAps)// com essa logica utilizando o filter, podemos buscar na lista apenas o endereço que é apartamento