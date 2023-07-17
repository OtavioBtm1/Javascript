const livros = require("./listaLivros");
const encontrarMenor = require("./encontrarMenor");

for (let atual = 0; atual < livros.length; atual++) {
  let menor = encontrarMenor(livros, atual);

  console.log('Posição atual:', atual);
  console.log('Livro atual:', livros[atual]);
  console.log('Livro mais barato:', livros[menor]);

  // Realize a troca de posições dos livros, se necessário
  [livros[atual], livros[menor]] = [livros[menor], livros[atual]];
}
