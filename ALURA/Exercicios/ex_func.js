
/// nesse caso, temos um exemplo de execução de função, pegando valores que o programa nos traz fora da função
/// precisamos definir as variveis dentro dos parenteses da função, essas variaveis precisam fazer parte do processamento 
/// elas vão servir de base para buscar os valores que vao preencher as variaveis do processamento

function soma(num1, num2){ /// são definidas variaveis num1 e num2, dessa mesma forma e ordem, já que são elas que precisam de valor para a função funcionar
    
    res = num1 + num2 /// aqui estão as variaveis num1 e num2, elas são somadas, mas precisam de um valor para retornar algo
    console.log(`a soma de ${num1} e ${num2} se resulta em ${res}`)
    return res
}
function mult(num1, num2){
    res = num1 * num2
    console.log(`a multiplicação de ${num1} e ${num2}, resulta em ${res}`)
    return res
}

const y = 5
const z=2
const x = 10
console.log(soma(x, y)) //agora dentro do console.log, as variaveis fora da função são declaradas, para substituir num1 e num2, já que elas possuem seu valor
                            // para o funcionamento, as variaveis devem ser declaradas de maneira igual às aquelas quais vão atribuir seus valores
                            // sendo assim, y => num1 = 5, x => num2 = 10, após a atribuição ser feita, a função roda com os valores das variaveis requisitadas
                            // assim, retornando o resultado esperado
console.log(soma(5, 10)) /// também é possivel ja indicar os valores dessa forma

                      //num1    //num2
        //num1*num2  //5+5=10   //10+2=12
console.log(mult    (soma(y,y), soma(x,z)))
/// também é possivel chamar uma função por meio de outra função, assim, fazendo o valor final dela, se tornar o valor da variavel da função primaria

function cumprimento(){
    return "olá galera"
}
function nome_pes(nomepessoa){
    console.log(`${cumprimento()}, meu nome é ${nomepessoa}`)
}
nome_pes('otavio')

/// nesse caso, a função cumprimento() é chamada dentro da função nome_pes() que recebe a variavel "nomepessoa" entre seus parenteses
/// ao inicializar a função nome_pes, o nome da pessoa é informado entre os parenteses, assumindo o valor de "nomepessoa" 
