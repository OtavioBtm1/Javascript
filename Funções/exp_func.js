const soma = function soma(num1 , num2) {return num1 + num2}
console.log(soma(2, 4))
// existe mais uma maneira de se escrever função, atribuindo como se fosse uma variavel e colocando seu processamento na mesma linha
// só que existe um probleminha nesse tipo de declaração
console.log(apresentação())
function apresentação(){
    return "Boa tarde"
}
// console.log(multiplicação(4, 5))
const multiplicação = function multiplicação(num1, num2) {return num1*num2}
// nesse caso, para executar a função, o console.log deve ser chamado após a declaração dela, diferente da maneira tradicional de declarar uma função
// pode-se observar que a função apresentação, mesmo sendo criada depois, foi utilizada com sucesso, por conta de sua declaração
// já a função multiplicação, apresentou um problema, pois foi chamada antes de sua declaração
console.log(multiplicação(4,5))// dessa maneira ela ira funcionar, pois foi chamada apos a declaração