// tipo de dado
//booleanos
let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
/// para a verificação podemos utilizar a função typeof para saber se foi convertido
console.log(typeof String(usuarioConectado)); 
console.log(typeof String(usuarioConectado)); 

const numero =123
const numeroString = "123"


// conversão implicita
console.log(numero === numeroString)/// <== irá retonar false pois o valor é igual mas o tipo é diferente
console.log(numero == numeroString)/// <= irá retornar true pois o valor é igual e isso já basta para "=="
console.log(numero+numeroString)///<== o resultado virá a ser 123123, um numero acompanhado de uma string, pois seu valor pode ser igual mas seu tipo não
console.log(numero+numero)/// <== o resultado virá a ser 246 pois nesse caso o tipo de ambos é o mesmo
//agora para a conversão podemos utilizar funções pré-estabelecidas como: Number() e String()

// conversão explicita
console.log(numero + Number(numeroString))/// <== irá retornar 246 pois numeroString foi convertido para number pela função
console.log(numero == Number(numeroString))// retornará true pois o valor de ambos é igual
console.log(numero === Number(numeroString))// agora retornará true pois o valor é igual e o tipo string foi convertido para o tipo number

