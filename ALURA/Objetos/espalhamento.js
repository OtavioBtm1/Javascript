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
function ligacao(telCasa, telCelular){
    console.log(`Ligando para ${telCasa}`)
    console.log(`Ligando para ${telCelular}`)
}
ligacao(...cliente.telefone)//nesse caso, o espalhamento ja joga tudo o que esta dentro do array do objeto como parametro

const encomenda={
    destinatario: cliente.nome,
    ...cliente.enderecos[0]// o espalhamento que é demonstrado por " ... ", nos ajuda a exibir os valores de uma maneira mais simples, nao sendo aninhada
}
console.log(encomenda)