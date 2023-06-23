const notas=[10, 9.5, 8, 7 , 6]
notas.forEach(function(soma){
console.log(soma+1>=10?10:soma+1) // essa é uma maneira simples aumentar em +1 o valor de cada nota, utilizando o forEach()
})
// agora vamos fazer de outra maneira, utilizando a função map()

const novasNotas= notas.map((nota)=>{// basta apenas declarar uma nova variavel que vai receber esse novo array, e fazermos uma função
    return nota + 1>=10?10:nota+1 // aqui utilizamos um operador ternario para fazer a verificação de que o valor nao ultrapasse 10
})
console.log(novasNotas)

// .map() funciona para alterar ou passar pelos valores das arrays, na sua declaração, precisa ser definida uma função callback