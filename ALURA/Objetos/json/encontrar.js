const clientes = require("./cliente2.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))// aqui utilizamos uma função para encontrar objetos na lista com os parametros que queremos
}// o find faz a busca e quando acha o primeiro resultado que esta certo ja retorna, e o includes trabalha com mais de um valor no array, caso exista ele exibe, assim nao existe problema de existir mais de um numero guardado e der problema

const encontradinho= encontrar(clientes, "telefone", '1918820860')
const encontrado= encontrar(clientes, "nome", 'Kirby')
console.log(encontrado)
console.log(encontradinho)