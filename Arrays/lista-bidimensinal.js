const alunos=["augusto", 'juliano', 'giovana', 'breno', 'stevan']
const medias= [10, 8, 7.5, 9]
const lista=[alunos, medias]// é possivel criar uma lista dentro de uma lista, assim sendo possivel chamar valores de outras listas dentro dela
console.log(`O aluno da posição 1 da lista de alunos é ${lista[0][1]}, e sua nota é ${lista[1][0]}`)
// nesse exemplo temos adição das listas alunos e medias dentro de lista, para puxar algum dado basta colocar a posição referente e lista que queira acessar, por exemplo alunos=[0] media[1]
// e para acessar os dados dentro da lista é da mesma maneira, se eu quiser acessar breno e nota 9, temos lista[0][3]=breno lista[1][3]=9