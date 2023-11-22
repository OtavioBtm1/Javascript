const lista = require("./array")

function encontraMenores(pivo, array){
    let menores=0
    for( let atual = 0; atual< array.length; atual++){
        let produtoAtual=array[atual]
        if(produtoAtual.preco<pivo.preco){
            menores++
        }
    }
        trocaLugares(array, array.indexOf(pivo), menores)
        return array
    
}

function trocaLugares(array, de , para){
    const elem1= array[de]  
    const elem2= array[para]  
    
    array[para]= elem1
    array[de]= elem2
}
function dividePivo(array){
    let pivo= array[Math.floor(array.length/2)]
    console.log(pivo)
    encontraMenores(pivo, array)
    let valoresMenores=0

    for(let analisando = 0; analisando<array.length;analisando++){
        let atual=array[analisando]
        if(atual.preco<pivo.preco && atual !== pivo){
            trocaLugares(array, analisando, valoresMenores)
            valoresMenores++
        }
    }
    return array
}
console.log(dividePivo(lista))

module.exports= trocaLugares