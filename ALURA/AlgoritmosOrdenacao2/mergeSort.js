const listaLivros = require('./listaLivros');

function mergeSort(array, nivelAninhamento = 0) {
  // Exibe o nível de aninhamento atual e o array sendo ordenado
  console.log(`Nível de aninhamento: ${nivelAninhamento}`);
  console.log(array);

  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    
    // Chamada recursiva para ordenar a primeira metade do array
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
    
    // Chamada recursiva para ordenar a segunda metade do array
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
    
    // Une as partes ordenadas
    array = ordena(parte1, parte2);
  }

  return array;
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = [];

  // Une as partes ordenadas em um único array
  while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    let produtoAtualParte1 = parte1[posicaoAtualParte1];
    let produtoAtualParte2 = parte2[posicaoAtualParte2];

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1);
      posicaoAtualParte1++;
    } else {
      resultado.push(produtoAtualParte2);
      posicaoAtualParte2++;
    }
  }

  // Concatena os elementos restantes da parte1 ou parte2, se houver
  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1)
    : parte2.slice(posicaoAtualParte2)
  );
}

console.log(mergeSort(listaLivros));
