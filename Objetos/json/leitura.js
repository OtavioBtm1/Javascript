const dados = require("./cliente.json")// assim puxamos os dados do arquivo json
console.log(dados)// aqui o objeto é retornado

const jsonEmString= JSON.stringify(dados)// essa é uma função que nos retorna o que esta presente no arquivo json, transformado em string
console.log(jsonEmString)
console.log(typeof jsonEmString)// aqui ja nos retorna o objeto transformado em string
console.log(typeof dados)// sera retorando objeto, jaq ue o que compoe o arquivo json é um objeto
//podemos perceber de outra maneira, caso queiramos buscar um valor de uma propriedade do objeto
console.log(dados.nome)//aqui ir anos retornar o nome presente no objeto
console.log(jsonEmString.nome)// aqui ira nos retornar undefined

const tradObjeto=JSON.parse(jsonEmString)//aqui existe a função parse, que basicamente traduz a string para o que nós queremos, que é o objeto
console.log(tradObjeto)// é retornado em objeto o que era uma string