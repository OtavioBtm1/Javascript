const listaLivros = require("./listaLivros");

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            // Armazenando temporariamente o elemento atual e o elemento anterior
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
            
            // Realizando a troca de posição entre o elemento atual e o elemento anterior
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;
            
            // Decrementando o índice de análise para continuar comparando com os elementos anteriores
            analise--;
        }
    }

    console.log(lista);
}

insertionSort(listaLivros);
