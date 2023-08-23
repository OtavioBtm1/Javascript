class Familia{
    constructor(nome, idade, nascimento, cargo){
        this.nome=nome
        this.idade=idade
        this.nascimento=nascimento
        this.cargo= cargo
    }
}
const Otavio = new Familia('otavio', '19', '17-02-2004', 'filho')
const adriana= new Familia('adriana', '43', '10-06-1980', 'mae')
const adriano= new Familia('adriano', '48', '13-03-1975', 'pai')
const rafaela= new Familia('rafaela', '16', '21-03-2007', 'filha')
const livia= new Familia('livia', '16', '21-03-2007', 'filha')

const familias
 = [Otavio, adriana, adriano, livia, rafaela]
const exibir = function(array){
    console.log(`eu sou ${array.nome}, tenho ${array.idade} anos, nasci em ${array.nascimento}, e eu sou ${array.cargo} na familia`)
}
for(const familiar of familias){
 exibir(familiar)   
}