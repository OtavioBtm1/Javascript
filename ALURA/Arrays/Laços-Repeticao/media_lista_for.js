const notas = [6, 4, ]
var soma =0
for (i=0;i<notas.length;i++){
    var soma= soma + notas[i]
    console.log(`Nota ${i+1}=${notas[i]}`)
}
const media = soma/notas.length
console.log(`A soma das notas é ${soma} e a media final é ${media}`)