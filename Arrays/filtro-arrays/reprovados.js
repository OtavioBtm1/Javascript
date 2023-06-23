const alunos = ['otavio', 'julia', ' rafaela', 'livia' ]
const notas = [10, 9, 4, 8]
const reprovados = alunos.filter((alunos, indice)=>{// filtera é uma função que filtra o que desejamos do array e nos retorna um array com o que filtramos
    return notas[indice] <= 7
})
console.log(reprovados)