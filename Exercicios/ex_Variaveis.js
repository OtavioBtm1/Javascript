var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)// o resultado será 3.14, 42 e 29

}
console.log(respostaDeTudo, idade, pi)// o resultado será 3.14, 29 e 3.14

// quando no mesmo código existem duas variaveis iguais declaradas como var, o programa exibe a ultima, no caso sendo 3.14
// quando o programa roda, let mantem o valor de fora das chaves como 29, mas no console.log de dentro ela assume o valor 42, ou seja, se mostra flexivel dentro de condições
// quando o programa roda const, ele passa pelo mesmo processo de let, assumindo valores, mas apenas se estiverem dentro de chaves

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

// nesse exemplo pode se perceber que let nao precisa estar dentro de chaves para ter seu valor modificado ao longo do codigo
// no caso, const só pode ser declarada uma vez fora das chaves e assume o mesmo valor sempre