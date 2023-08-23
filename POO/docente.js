import User from "./user.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role ='docente', ativo = true){ // Define o construtor da classe 'Admin' com parâmetros: nome, email, nascimento, role (com valor padrão 'admin') e ativo (com valor padrão 'true').
        super(nome, email, nascimento, role, ativo); // Chama o construtor da classe 'User' com os mesmos parâmetros, para inicializar as propriedades da classe 'User'.
    }
    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}
// const novoDocente = new Docente('Bala tensa' , 'Balatensa@gmail', '1975-12-4')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('otavio', 'fifa'))