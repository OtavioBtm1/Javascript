const user={
    nome: 'Otavio',
    email: 'otavio.vitoriano@hotmail.com',
    nascimento:'2004/02/17',
    role:'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome)
    }
}

const admin={
    nome: 'Bala Tensa',
    email: 'otavio.vitoriano@hotmail.com',
    nascimento:'2004/02/17',
    role:'admin',
    ativo: true,
    criaCurso(){
        console.log('curso criado')
    }   
}
Object.setPrototypeOf(admin, user)// nesse caso queremos utilizar uma função que esta declarada no objeto de user, mas queremos em adm
// para isso utilizamos a função setPrototypeOf, acompanhada de Object. passamos como parametro o objeto que possui a função que queremos e em segundo o objeto em que a função vai ser utilizada
admin.criaCurso()
admin.exibirInfos()// essa é uma função que nao esta presente nesse objeto, porem, com a função setPrototypeOf, acaba podendo ser utilizada