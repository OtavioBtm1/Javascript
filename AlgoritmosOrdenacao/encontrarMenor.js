function encontrarMenor(arrLivros, posInicial) {
    let maisBarato = posInicial;
  
    for (let atual = posInicial + 1; atual < arrLivros.length; atual++) {
      if (arrLivros[atual].preco < arrLivros[maisBarato].preco) {
        maisBarato = atual;
      }
    }
  
    return maisBarato;
  }
  
  module.exports = encontrarMenor;
  