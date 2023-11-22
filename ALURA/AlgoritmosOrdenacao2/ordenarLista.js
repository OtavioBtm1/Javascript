// Importando as listas de livros da arquivo "lista.js"
const { livros1, livros2 } = require('./lista');

// Função para juntar duas listas de livros em uma lista final ordenada por preço
function juntaListas(lista1, lista2) {
  let listaFinal = []; // Lista final que será retornada
  let posicaoAtualLista1 = 0; // Posição atual na lista1
  let posicaoAtualLista2 = 0; // Posição atual na lista2
  let atual = 0; // Índice atual na listaFinal

  // Enquanto houver elementos em ambas as listas
  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1]; // Produto atual da lista1
    let produtoAtualLista2 = lista2[posicaoAtualLista2]; // Produto atual da lista2

    // Compara os preços dos produtos atuais
    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1; // Adiciona o produto da lista1 à listaFinal
      posicaoAtualLista1++; // Incrementa a posição atual da lista1
    } else {
      listaFinal[atual] = produtoAtualLista2; // Adiciona o produto da lista2 à listaFinal
      posicaoAtualLista2++; // Incrementa a posição atual da lista2
    }

    atual++; // Incrementa o índice atual na listaFinal
  }

  // Se ainda houver elementos restantes na lista1, adiciona-os à listaFinal
  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  // Se ainda houver elementos restantes na lista2, adiciona-os à listaFinal
  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }

  return listaFinal; // Retorna a listaFinal
}

// Chama a função juntaListas passando as listas de livros e exibe o resultado no console
console.log(juntaListas(livros1, livros2));
