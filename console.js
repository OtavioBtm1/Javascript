// console.error() para exibir mensagens de erro;
const erro = new Error("Erro personalizado"); // Criando um objeto de erro personalizado
const numero = 42;

console.error("Ocorreu um erro:", erro);
console.error(new Error("Número inválido:"));

// console.table() para visualizar de forma mais organizada informações tabulares;
const data = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
  ];
  
  console.table(data);
  
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.time('tempoTotal'); // Inicia o temporizador

// Código que você deseja medir o tempo de execução
for (let i = 0; i < 1000000; i++) {
  // ...
}

console.timeEnd('tempoTotal'); // Finaliza o temporizador e exibe o tempo decorrido no console

// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
