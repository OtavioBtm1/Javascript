const clientes = require("./cliente2.json")

function encontrarAp(clientes){
    return clientes.filter((clientes)=> {
        return (clientes.endereco.apartamento && !clientes.endereco.hasOwnProperty("complemento"))// essa função nos filtra quais tem apartamento e nao tem complemento
    })// nao é necessario colocar === true, pois ele ja é true, para verificar se tem complemento utilizamos a função hasOwnProperty, que verifica se existe dentro do objeto, a exclamação no inicio diz que é uma negação, ou seja, so funciona se nao tiver
}

const filtrados= encontrarAp(clientes)
console.log(filtrados)