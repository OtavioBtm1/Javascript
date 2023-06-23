const sala1=[10,6,8,7,3]
const sala2=[8,9,10,3,8]
const sala3=[6,8,6,6,9]
const todas_salas=sala1.concat(sala2,sala3)// aqui utilizamor o .concat para juntar as listas em uma so 
function mediaGeral(notasSala){
    const notaGeral = notasSala.reduce((acumulador, nota)=>{//aqui declaramos os parametros diferentes, o acumulador vai recebendo os valores das somas das notas
        return nota +acumulador// aqui é feita a soma 
    }, 0)// este 0 indica o valor do acumulador
    console.log(notaGeral/notasSala.length)// aqui trazemos de volta a media, puxando a variavel notaGeral e dividindo pelo comprimento de notasSala
}
mediaGeral(todas_salas)
