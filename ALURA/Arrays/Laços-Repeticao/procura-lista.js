const alunos=["augusto", 'juliano', 'giovana', 'breno', 'stevan']
const medias= [10, 8, 7.5, 9]

const Lista_aluno_nota = [alunos, medias]   
const [alunos_lista, media_aluno]= Lista_aluno_nota 
// uma maneira muito mais simples de declarar variaveis que possuem em seu valor as listas, é essa

function exibir_aluno_nota(aluno){
    if(alunos_lista.includes(aluno)){/// para pesquisarmos algo dentro de uma lista e verificar sua existencia em um laço de repetição, utilizamos a função .includes() que é preenchida com a variavel que queremos comparar
        console.log(`O aluno ${aluno} está cadastrado`)
        const indice= alunos_lista.indexOf(aluno)// em um laço de repetição, para buscarmos a posição em que a variavel encontrada pelo include se encontra, utilizamos o .indexOf, que nos da a posição de 'aluno' nesse caso

        console.log(indice) //aqui podemos ver em ação o indexOf, voltando a posição da variavel, caso encontrada

        const nota= media_aluno[indice] // assim pegamos dentro da lista [1] que é a de alunos, a nota em referente a posição do nome do aluno, se o aluno ocupa a casa 2 em lista de aluno ele possui a nota 2 em lista de nota

        console.log(`A nota do aluno ${aluno} é ${nota}`)
    }else{
        console.log(`${aluno} não está cadastrado`)
    }
}
exibir_aluno_nota('augusto')