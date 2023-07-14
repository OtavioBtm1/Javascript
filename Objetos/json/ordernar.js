const cliente = require("./cliente2.json")

function ordernar(lista, propriedade){
    // A função ordernar recebe uma lista e uma propriedade para ordenar os objetos da lista.

    const resultado = lista.sort((a, b) => {
        // A função sort recebe uma função de comparação que especifica a ordem de classificação.
        // Essa função de comparação compara os valores da propriedade fornecida para ordenar os objetos.

        if (a[propriedade] < b[propriedade]){
            // Compara se o valor da propriedade de 'a' é menor do que o valor da propriedade de 'b'.
            // Se sim, retorna -1 para indicar que 'a' deve ser classificado antes de 'b'.
            return -1
        }

        if (a[propriedade] > b[propriedade]){
            // Compara se o valor da propriedade de 'a' é maior do que o valor da propriedade de 'b'.
            // Se sim, retorna 1 para indicar que 'a' deve ser classificado depois de 'b'.
            return 1
        }

        // Se os valores da propriedade de 'a' e 'b' forem iguais,
        // retorna 0 para indicar que eles são considerados igualmente classificados.
        return 0
    })

    // Retorna a lista ordenada.
    return resultado
}

const ordenarNome = ordernar(cliente, "nome")
// Chama a função ordernar passando a lista de clientes e a propriedade "nome" para ordenar.

console.log(ordenarNome)
// Imprime a lista de clientes ordenada pelo nome.
