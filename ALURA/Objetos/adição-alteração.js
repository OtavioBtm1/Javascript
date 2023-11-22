const pessoa = {
    nome:'Otavio',
    idade:19,
    altura:189,
    email:'otavio.vitoriano@hotmail.com'
}
console.log(`Meu nome é ${pessoa.nome}, eu tenho ${pessoa.altura}cm de altura, tenho ${pessoa.idade} anos, minhas informações de contato são:\nEmail: ${pessoa.email}\nTelefone: ${pessoa.telefone}`)
//podemos perceber que nesse caso pessoa.telefone não existe e volta como undefined, para adicionarmos uma chave com valor a um objeto, podemos fazer assim
pessoa.telefone= '(11)95321-0283'// essa é uma maneira de acessar o objeto e adicionar mais um valor e mais uma chave
console.log('Agora com telefone adicionado')
console.log(`Meu nome é ${pessoa.nome}, eu tenho ${pessoa.altura}cm de altura, tenho ${pessoa.idade} anos, minhas informações de contato são:\nEmail: ${pessoa.email}\nTelefone: ${pessoa.telefone}`)
// para alteração de algo do objeto podemos fazer o seguinte
console.log(pessoa)
pessoa.nome='Julia'
pessoa.idade=19
pessoa.altura=154
pessoa.email='juliasosurp@gmail.com'
console.log("Após alteração")
console.log(pessoa)// assim podemos ver que a adição e alteração de valores de dentro de um objeto, são da mesma forma
// para deletarmos um item de um objeto, utilizamos a função delete
delete pessoa.email
console.log('Após o email ser deletado:')
console.log(pessoa)