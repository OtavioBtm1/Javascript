
///// as funções tem formas diferentes de serem escritas, uma é com o console.log dentro dela, trazendo o resultado da variavel, para chamar a função, apenas escrever o nome dela e parenteses a frente
function soma(){
    const res = 2 + 2
    console.log(res)

}
soma()
//// nesse outro caso, o console.log pode ser chamado fora da função, só que dentro dele ele deve chamar a função, dentro da função deve possuir um return, trazendo o valor desejado
function soma2(){
    const result = 2+5
    return result
}
// console.log(soma2())

//// existe mais uma forma de chamar o resultado da função, não sendo necessario declarar variavel, apenas com o return
function soma3(){
    return 2+8
}
// console.log(soma3())

///////// também é possivel, chamar uma função que imprime as outras como no caso abaixo, em que a função já faz o papel de console.log, mas apenas nos casos em que existe o return dentro, caso o contrario, é necessário declarar console.log dentro da função
function imprimeTexto(texto){
console.log(texto)
}
imprimeTexto(soma())
imprimeTexto(soma2())
imprimeTexto(soma3())
