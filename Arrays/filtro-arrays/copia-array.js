const nota=[10,8,7,9]
const nota2=[2,...nota,6]//... em javascript pega os valores esperados, nesse caso, sendo os valores ja presentes em notas
// podemos observar que é possivel adicionar outros valores dentro do array antes e depois do espelhamento de outro, não sendo necessario de push
console.log(`As notas originais são ${nota}`)
console.log(`As novas notas são ${nota2}`)