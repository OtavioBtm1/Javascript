const cpf = [1111, 22222, 3333]
const info=['nome', 'Otavio', 'idade', 19, 'cpf', '50608172880']// essa é uma maneira rustica de definir informações sobre uma pessoa, com informações meio soltas e confusas
const objetoPessoa={ // essa é uma maneira mais simples de declarar informações sobre algum, basta declarar o objeto e por entre { }, e listando seus atributos
    nome: 'Otavio',
    idade: 19,
    cpf: '50608172880'
}
console.log(objetoPessoa)//irá nos retornar as informações de dentro
console.log(objetoPessoa.nome)
console.log(objetoPessoa.idade)
console.log(objetoPessoa.cpf)
// essa é a maneira de chamar os atributos dentro do objeto, colocando o nome da variavel, um ponto e o nome da informação, sendo nome, idade ou cpf
console.log(`Meu nome é ${objetoPessoa.nome}, eu tenho ${objetoPessoa.idade} anos, meu CPF é ${objetoPessoa.cpf}`)
// assimm formulamos uma frase cfom os atributos presentes dentro do objeto
console.log(`Os 3 primeiros digitos do cpf são ${objetoPessoa.cpf.substring(0,3)}`)
// a substring serve para pegarmos apenas uma parte da string que queremos, colocando como parametros onde inicia e onde corta