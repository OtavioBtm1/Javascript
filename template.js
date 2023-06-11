const nome = "Otavio"
const nasc = "17/02/2004"
const idade = 19
const cid = "São Paulo"

const apres = "Meu nome é " + nome + ", nasci dia " + nasc + " na cidade de " + cid + ", atualmente possuo " + idade + " anos"
console.log(apres)
/// agora uma maneira mais simples de organizar uma frase que contem variaveis
const temp_apres = `Meu nome é ${nome}, nasci dia ${nasc} na cidade de ${cid}, atualmente tenho ${idade} anos`
console.log(temp_apres)
/// o resultado de ambos é  igual, porem, o templete facilita muito na hora de escrever uma frase com valor de variavel
/// basta iniciar a frase com acento grave, crase, " ` ", e quando for chamar um valor de variavel, colocar o cifrão e chaves, 
/// Exemplo: 
// const nome = "otavio"
// const frase = `Meu nome é ${nome}`