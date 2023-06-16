const sala1=["Otavio", "Julia", "Ademar", "Cleiton", "Vitor", "Neymar"]
const sala2=["Messi", "Bia", "Calvin", "Jordan", "Mbappe", "Ibrahimovic"]
// Para unificar as salas temos a função .concat, detalhe, isso vai gerar uma nova lista, entao deve ser declarada como valor de uma variavel ou em um console.log se for apenas para amostra
const sala_junta=sala1.concat(sala2)
console.log(sala_junta)
console.log(sala1.concat(sala2))/// pode ser escrito assim tambem caso seja apenas de uso para console.log  