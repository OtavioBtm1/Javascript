const precos = [10, 15, 20, 25, 19];

let barato = precos[0]; // Inicializa com o primeiro valor do array

precos.forEach((preco) => {// aqui o forEach, le cada posição do array, ele estipula que o laço vai se repetir dependendo da quantidade de arrays
  if (preco < barato) {
    barato = preco;// aqui ja na função, caso o valor seja menor, a variavel toma esse valor, caso o contrario, vai se repetindo
  }
});

console.log(barato); // Imprime o valor mais barato encontrado
