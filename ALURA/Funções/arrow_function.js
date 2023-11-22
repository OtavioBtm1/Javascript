function apresentarnome(nome){
    return `meu nome é ${nome}`
}

const apresentararrow= nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1+num2
console.log(soma(3,5))
console.log(apresentararrow("Otavio"))
/// arrow function é uma maneira simples de declarar uma função em apenas uma linha, como podemos ver
/// basta declarar a função, "= variavel" "=> processamento"
/// como podemos ver na soma, é declarada como const, o igual sinaliza suas variaveis entre parenteses (num1 e num2) a arrow => indica o processamento da variavel

const somanumpq = (num1, num2) => {
    if (num1 >=10 || num2 >=10){
        return 'numero muito alto'
    }else{
        return num1 + num2
    }
}
console.log(somanumpq(2, 5))