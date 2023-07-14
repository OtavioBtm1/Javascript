const livros = require("./listaLivros")// esse require serve para importar dados, puxando o objeto de outro arquivo, serve para json quanto para js
let maisbarato=0
 
for(let atual = 0; atual<livros.length;atual++ ){
    if(livros[atual].preco< livros[maisbarato].preco){
        maisbarato=atual
    }
}
console.log(`O livro mais barato é o ${maisbarato} e seu nome é ${livros[maisbarato].titulo} e custa ${livros[maisbarato].preco}`)