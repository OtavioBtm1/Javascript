//// variaves, var, let e const

/// var pode ser utilizada em qualquer momento do código, até mesmo depois de console log
/// quando um programa em js se inicia, ele recolhe primeiramente todos os valores das variaveis var e depois roda

// var forma = 'retangulo'
// var altura = 5
// var comprimento = 7
// if (forma === 'retangulo'){
//         area = altura * comprimento
// } else{
//     area = (altura*comprimento)/2
// }
// console.log(area) 
// var area;

/////////// agora com a variavel let
// let forma_let = 'retangulo'
// let altura_let = 5
// let comprimento_let = 7
// if (forma_let === 'retangulo'){
//         area_let = altura_let * comprimento_let
// } else{
//     area_let = (altura_let*comprimento_let)/2
// }
// console.log(area_let) 
// let area_let;

//// pode se perceber que o programa aparece uma mensagem de erro "Cannot access 'area_let' before initialization"
//// isso pelo fato da unica variavel possivel de ser inicalizada depois de console.log é a varivel var
/// unica maneira de ser utilizada é

        //  let forma_let = 'retangulo'
        //  let altura_let = 5
        //  let comprimento_let = 7
        //  let area_let;
        //  if (forma_let === 'retangulo'){
        //          area_let = altura_let * comprimento_let
        //  } else{
        //      area_let = (altura_let*comprimento_let)/2
        //  }
        //  console.log(area_let)

// com area_let declarada antes
/// Agora vamos falar de const, const é uma variavel que não pode ter seu valor mudado em qualquer trecho do código
const forma_C= 'quadrado'
const altura_C= 5
const comprimento_c =7
// const area_c    ///<--- a variavel area_c deve ter um valor pré definido, não pode ser inicializada com nada, ou seja, deve ser const area_c = altura_c*comprimento_c
const area_c = altura_C*comprimento_c
if (forma_C === 'retangulo'){
    area_c = altura_C * comprimento_c
} else{
area_c = (altura_C*comprimento_c)/2
}
console.log(area_c)